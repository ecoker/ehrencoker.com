import React, { Component } from 'react'

/* ---
// Services
--- */
import * as Colors from '../services/colors'

class Footer extends Component {
  render() {
    return (
      <footer>
        <style jsx>{`
        footer {
          background: ${Colors.red};
          bottom: 0;
          height: 6px;
          left: 0;
          position: fixed;
          right: 0;
        }
        `}</style>
      </footer>
    )
  }
}

export default Footer
