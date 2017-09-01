/**
 * Created by dllo on 17/8/28.
 */
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Twopage from '../../components/twoPageFilm/twopage-film'
import Nav from '../../components/web-nav/nav'
import Place from '../../components/placeTop/placeTop'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityID: 52,
      cityName: '大连',
      cityInnerhtml: '大连'
    }
    var cookie = `cityId=${this.state.cityID}; cityName=${encodeURI(this.state.cityName)}; `
    document.cookie = cookie
  }
  spanclick = (e) => {
    this.setState({
      cityInnerhtml: e.target.innerHTML,
      cityID: e.target.getAttribute('title'),
      cityName: e.target.getAttribute('name')
    }, () => {
      var cookie = `cityId=${this.state.cityID}; cityName=${encodeURI(this.state.cityName)}; `
      document.cookie = cookie
    })
  }
  render () {
    return (
      <div>
        <Nav getinner={this.spanclick} inner={this.state.cityInnerhtml} />
        <Place />
        <Twopage cityID={this.state.cityID} cityName={this.state.cityName} />
        <Footer />
      </div>
    )
  }
}

export default App
