import React, { Component } from 'react'
import axios from 'axios'

class IndexPage extends Component {
  componentDidMount = () => {
    axios.get('/index/gray').then(res => {
      console.log(res)
    })
  }
  
  render() {
    return (
      <div>index page</div>
    )
  }
}

export default IndexPage