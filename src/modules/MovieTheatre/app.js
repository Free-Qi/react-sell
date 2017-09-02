/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import Nav from '../../components/web-nav/nav'
import MovieTheatre from '../../components/MovieTheatre/MovieTheatre'
import Footer from '../../components/Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filename: ''
    }
  }
  filmClick = (e) => {
    this.setState({
      filename: e.target.innerHTML
    })
  }
  render() {
    return (
      <div>
        <Nav />
        <MovieTheatre />
        <Footer />
      </div>
    )
  }
}

export default App
