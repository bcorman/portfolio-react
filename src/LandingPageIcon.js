import React, {Component} from 'react'

class LandingPageIcon extends Component {
  render() {
    return (
      <a href={this.props.icon.link}><i className={this.props.icon.icon}></i></a>
    )
  }
}

export default LandingPageIcon
