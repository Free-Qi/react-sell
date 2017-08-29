/**
 * Created by dllo on 17/8/26.
 */
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import RightActive from '../../components/rightActive/RightActive'
import Nav from '../../components/web-nav/nav'

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <RightActive />
        <Footer />
      </div>
    )
  }
}
export default App
