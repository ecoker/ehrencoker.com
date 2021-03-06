import React, { Component } from 'react'

// Services
import * as Colors from '../services/colors'

class Storyteller extends Component {
  render() {
    return (
      <div id='story-teller' className='story-teller'>
        { this.props.children }
        <style jsx global>{`
          @font-face {
            font-family: Argent;
            font-weight: 300;
            src: url(/static/fonts/ArgentCF-Light.woff);
          }
          @font-face {
            font-family: Argent;
            font-weight: 400;
            src: url(/static/fonts/ArgentCF-Regular.woff);
          }
          @font-face {
            font-family: Argent;
            font-weight: 500;
            src: url(/static/fonts/ArgentCF-Bold.woff);
          }
          html {
            overflow: hidden;
            height: 100vh;
          }
          body {
            -webkit-overflow-scrolling: touch;
            max-height: 100vh;
            overflow: auto;
          }
          ::selection {
            background: ${Colors.red};
            color: ${Colors.white};
          }
          html,
          body {
            -webkit-font-smoothing: antialiased;
            background-color: ${Colors.white};
            font-family: Argent, Georgia, Times, serif;
            font-size: 16px;
            margin: 0;
            padding: 0;
          }
          .story-teller {
            min-height: 100vh;
          }
          .story {
            align-items: center;
            display: flex;
            justify-content: center;
            min-height: 100vh;
          }
          h1 {
            color: ${Colors.black};
            font-size: 4rem;
            font-weight: 400;
            text-align: center;
          }
          mark {
            background: transparent;
            color: ${Colors.red};
          }
        `}</style>
      </div>
    )
  }
}

export default Storyteller
