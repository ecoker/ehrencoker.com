import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: typeof window === 'undefined' ? 0 : window.innerHeight,
      opacity: 1,
      ready: true,
      top: 0
    }
    this.handleAnimationReady = this.handleAnimationReady.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
  }
  componentDidMount() {
    if ('ontouchstart' in window) {
      document.body.addEventListener('touchmove', this.handleScroll)
      document.body.addEventListener('touchend', this.handleTouchEnd)
    } else {
      document.body.addEventListener('scroll', this.handleScroll)
    }
  }
  componentWillUnmount() {
    if ('ontouchstart' in window) {
      document.body.removeEventListener('touchend', this.handleScroll)
      document.body.removeEventListener('touchmove', this.handleScroll)
    } else {
      document.body.removeEventListener('scroll', this.handleScroll)
    }
  }
  handleAnimationReady() {
    clearTimeout(this.animationTimer)
    this.setState({
      ready: true
    })
  }
  handleScroll(ev) {
    clearInterval(this.touchEndInterval)
    if (this.state.ready) {
      let scrollTop = Math.max(ev.target.scrollTop, document.body.firstChild.getBoundingClientRect().top * -1)
      let ratio = scrollTop / this.state.height
      let opacity = ratio >= 0.5 ? 0 : 1 - 2 * ratio
      this.setState({
        opacity,
        ready: false,
        top: scrollTop / 8 * -1
      })
      this.animationTimer = setTimeout(() => {
        this.handleAnimationReady()
      }, 200)
    } else {
      requestAnimationFrame(this.handleAnimationReady)
    }
  }
  handleTouchEnd() {
    this.touchEndIntervals = 0
    this.touchEndInterval = setInterval(() => {
      this.handleScroll({ target: { scrollTop: 0 } })
      if (this.touchEndInterval >= 45) clearInterval(this.touchEndInterval)
      this.touchEndIntervals += 1
    }, 50)
  }
  render() {
    return (
      <section className='intro story'>
        <h1 style={{ transform: `translate3d(0, ${this.state.top}px, 0)`, opacity: this.state.opacity }}>
          Code is beautiful<mark>.</mark>
        </h1>
        <style jsx>{`
          .intro {
            pointer-events: none;
          }
          h1 {
            font-size: 8vw;
            left: 0;
            margin: 0;
            position: fixed;
            right: 0;
            top: calc(50% - 4vw);
            transition: 200ms transform linear, 250ms font-size;
          }
          @media (max-width: 37.5rem) {
            h1 {
              font-size: 2.5rem;
              top: calc(50% - 1.25rem);
            }
          }
          @media (min-width: 75rem) {
            h1 {
              font-size: 6rem;
              top: calc(50% - 1.5rem);
            }
          }
        `}</style>
      </section>
    )
  }
}
