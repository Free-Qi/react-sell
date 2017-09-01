/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import Nav from '../../components/web-nav/nav'
import MovieTheatre from '../../components/MovieTheatre/MovieTheatre'
import Footer from '../../components/Footer/Footer'
import MovitTheatreTwo from '../../components/MovieTheatre/MovieTheatre2'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MovieTheatre />
        <MovitTheatreTwo />
        <Footer />
      </div>
    )
  }
}

export default App
