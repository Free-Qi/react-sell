/**
 * Created by dllo on 17/8/28.
 */
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Twopage from '../../components/twoPageFilm/twopage-film'
import Nav from '../../components/web-nav/nav'
import Place from '../../components/placeTop/placeTop'

class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Place />
        <Twopage />
        <Footer />
      </div>
    )
  }
}

export default App
