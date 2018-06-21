import React, {Component} from 'react'
import Image from 'react-bootstrap/lib/Image'
class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <h1>This is an about page</h1>
        <article className="bio">
          <Image className="bio-portrait" src="images/home_alone.jpg" circle />
          <p className="bio-copy">Biography biography biograpy. Language language language. Fact fact fact.</p>
        </article>
      </div>
    )
  }
}

export default AboutPage
