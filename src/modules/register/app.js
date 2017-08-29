/**
 * Created by dllo on 17/8/23.
 */
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Register from '../../components/register/Register'
import Nav from '../../components/web-nav/nav'

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Register />
        <Footer />
      </div>
    )
  }
}
export default App
