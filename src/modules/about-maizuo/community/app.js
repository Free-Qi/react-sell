/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import Nav from '../../../components/web-nav/nav'
import Community from '../../../components/AboutMaizuo/Community'
import Footer from '../../../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Community />
        <Footer />
      </div>
    )
  }
}
export default App