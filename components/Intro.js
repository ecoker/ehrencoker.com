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
    this.handleResize = this.handleResize.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    document.body.scrollTop = 0
    document.body.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    document.body.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }
  handleAnimationReady() {
    clearTimeout(this.animationTimer)
    this.setState({
      ready: true
    })
  }
  handleResize(ev) {
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      this.setState({
        height: typeof window === 'undefined' ? 0 : window.innerHeight
      })
    }, 150)
  }
  handleScroll(ev) {
    if (this.state.ready) {
      let ratio = ev.target.scrollTop / this.state.height
      let opacity = ratio >= 0.5 ? 0 : 1 - 2 * ratio
      this.setState({
        opacity,
        ready: false,
        top: ev.target.scrollTop / 8 * -1
      })
      this.animationTimer = setTimeout(() => {
        this.handleAnimationReady()
      }, 200)
    } else {
      requestAnimationFrame(this.handleAnimationReady)
    }
  }
  render() {
    return (
      <section className='intro story'>
        <h1 style={{ transform: `translate3d(0, ${this.state.top}px, 0)`, opacity: this.state.opacity }}>
          Code is beautiful<mark>.</mark>
        </h1>
        <style jsx>{`
          .intro {
            height: 100vh;
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
