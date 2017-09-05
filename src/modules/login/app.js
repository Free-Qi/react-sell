import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import Footer from '../../components/Footer/Footer'
import Login from '../../components/login/login'
import Nav from '../../components/web-nav/nav'
import axios from 'axios'
const md5 = require('md5')
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityID: 52,
      cityName: '大连',
      cityInnerhtml: '大连',
      username: '注册'
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
  loginclick = () => {
    this.setState({
      user: this.refs.username.refs.userinp.value,
      pass: md5(this.refs.username.refs.passinp.value)
    }, () => {
      var ot = new Date().getTime()
      let sendurl = 'api/login?__t=' + ot
      axios.defaults.headers.post['Content-Type'] = 'application/json'
      axios.post(sendurl, JSON.stringify({
        captchaCode: '',
        captchaKey: '',
        loginType: 0,
        name: this.state.user,
        password: this.state.pass
      })).then(response => {
        console.log(response)
        if (response.data.msg === 'success') {
          console.log(response.data.msg)
          this.setState({
            username: response.data.data.user.name
          }, () => {
            location.href = 'index.html'
          })
        }
      })
    })
  }
  render () {
    return (
      <div>
        <Nav getinner={this.spanclick} inner={this.state.cityInnerhtml} />
        <Login ref='username' click={this.loginclick} />
        <Footer />
      </div>
    )
  }
}
export default App
