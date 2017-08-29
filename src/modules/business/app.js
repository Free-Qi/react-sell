/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import Nav from '../../components/web-nav/nav'
import Business from '../../components/AboutMaizuo/Business'
import Footer from '../../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Business />
        <Footer />
      </div>
    )
  }
}

export default App