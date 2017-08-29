/**
 * Created by dllo on 17/8/28.
 */
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Teamwork from '../../components/AboutMaizuo/Teamwork'
import Nav from '../../components/web-nav/nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Teamwork />
        <Footer />
      </div>
    )
  }
}

export default App