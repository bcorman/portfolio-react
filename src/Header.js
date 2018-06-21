import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="left-nav">
          <i className="fas fa-male"></i>
        </nav>
        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}


export default Header
