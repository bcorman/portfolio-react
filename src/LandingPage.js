import React, {Component} from 'react'
import LandingPageIcon from './LandingPageIcon'

class LandingPage extends Component {
  render() {

    let icons = [{
      icon: 'fas fa-address-card',
      link: '#'
    }, {
      icon: 'fas fa-file',
      link: '#'
    }, {
      icon: 'fas fa-at',
      link: '#'
    }]

    let iconComponents = icons.map((icon, index) => <LandingPageIcon icon={icon} key={index}/>)

    return (
      <div className="landing-page">
        {iconComponents}
      </div>
    )
  }
}

export default LandingPage
