/**
 * Created by dllo on 17/8/28.
 */
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Teamwork from '../../components/AboutMaizuo/Teamwork'
import Nav from '../../components/web-nav/nav'

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
        <Teamwork />
        <Footer />
      </div>
    )
  }
}

export default App
