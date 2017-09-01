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
  // componentDidMount () {
  //   fetch('api/billboard/login', {
  //     method: 'GET'
  //   })
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(response => {
  //       console.log(response.data)
  //       this.setState({
  //         data: response.data.billboards
  //       })
  //     })
  // }
  spanclick = (e) => {
    this.setState({
      cityInnerhtml: e.target.innerHTML
    }, () => {
    })
  }
  render () {
    // const dataArr = this.state.data.map(function (item, index) {
    //   return (
    //     <p key={index.toString()}>{item['name']}</p>
    //   )
    // })
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
