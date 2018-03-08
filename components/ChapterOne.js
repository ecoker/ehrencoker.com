import React, { Component } from 'react'

// Services
import * as Colors from '../services/colors'

class ChapterOne extends Component {
  render() {
    return (
      <section className='chapter-one story'>
        <h4>Early in my career as a developer, I saw a web site do things I didn’t think were possible.</h4>
        <div className='content'>
          <p>I spent evenings pulling apart the source code to understand how it worked.</p>
          <p>I printed out Snippets of particularly complex or intricate code blocks and put them up on the wall.</p>
          <p>It was like receiving a message in a bottle. It told me that there is a different way to think, to code, to build.</p>
          <p>At the top of the file was a single comment:</p>
          <code>// Code is beautiful.</code>
          <p>It was.</p>
        </div>
        <style jsx>{`
          .chapter-one {
            flex-flow: column;
            margin: 0 auto;
            max-width: 50rem;
            padding: 2rem 0;
            width: 80vw;
          }
          h4 {
            font-size: 2rem;
            margin: 0 0 1em;
            transition: 500ms font-size;
          }
          .content {
            columns: 2;
            column-gap: 2rem;

          }
          .content p:nth-child(1) {
            margin-top: 0;
          }
          code {
            background: rgba(0, 0, 0, 0.05);
            border-radius: 0.25rem;
            color: ${Colors.red};
            display: block;
            margin: 1rem 0;
            padding: 1rem;
          }
          p {
            font-weight: 300;
          }
          @media (max-width: 37.5rem) {
            .content {
              columns: 1;
            }
            h4 {
              font-size: 1.25rem;
            }
          }
          @media (min-width: 50rem) {
            h4 {
              font-size: 2.25rem;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default ChapterOne
