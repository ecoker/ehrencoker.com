import React, { Component } from 'react'

// Services
import * as Colors from '../services/colors'

// Components
import Github from '../icons/github'

class Header extends Component {
  render() {
    return (
      <header>
        <a href='https://github.com/ecoker/ehrencoker.com'>
          <Github />
        </a>
        <style jsx>{`
          header {
            color: ${Colors.black};
            left: 0;
            padding: 1.5rem 2rem;
            position: fixed;
            right: 0;
            text-align: right;
            top: 0;
          }
        `}</style>
      </header>
    )
  }
}

export default Header
