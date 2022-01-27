import React, { Component } from 'react'
import Header from '@components/Header'
import './style.scss'

class IndexPage extends Component {
  render() {
    return (
      <div className='home-container-wrapper'>
        <div className='header-wrapper skeleton'>
          <Header />
        </div>
        <div className='content-wrapper'>
          <div className='left-content-box'>
            <div className='lt-data-trend skeleton'> dataTrend</div>
            <div className='lt-extension-info skeleton'>extensionInfo</div>
            <div className='lt-market-service skeleton'>marketService</div>
          </div>
          <div className='right-content-box'>
            <div className='rt-self-info skeleton'>selfInfo</div>
            <div className='rt-banner skeleton'>banner</div>
            <div className='rt-more skeleton'>more</div>
          </div>
        </div>
        <div className='footer-wrapper skeleton'>footer</div>
      </div>
    )
  }
}

export default IndexPage