import React, { Component } from 'react';
import Header from './Header'
import LandingPage from './LandingPage'
import AboutPage from './AboutPage'
import PortfolioPage from './PortfolioPage'
import ContactPage from './ContactPage'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <LandingPage />
        <AboutPage />
        <PortfolioPage />
        <ContactPage />
        <Footer />
      </div>
    );
  }
}

export default App;
