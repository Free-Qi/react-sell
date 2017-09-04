import React, {Component} from 'react'
import '../../assets/styles/App.styl'

import Footer from '../../components/Footer/Footer'
import Home from '../../components/home/home'
import Nav from '../../components/web-nav/nav'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      cityInnerhtml: '大连'
    }
  }
  spanclick = (e) => {
    this.setState({
      cityInnerhtml: e.target.innerHTML
    }, () => {
    })
  }
  render () {
    return (
      <div>
        <Nav getinner={this.spanclick} inner={this.state.cityInnerhtml} />
        <Home inner={this.state.cityInnerhtml} />
        <Footer />
      </div>
    )
  }
}
export default App
