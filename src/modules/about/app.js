/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'

import Nav from '../../components/web-nav/nav'
import AboutMaizuo from '../../components/AboutMaizuo/AboutMaizuo'
import Footer from '../../components/Footer/Footer'

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <AboutMaizuo />
        <Footer />
      </div>
    )
  }
}

export default App
