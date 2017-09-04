/**
 * Created by dllo on 17/8/22.
 */
import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import Input1 from './input1'
import Input3 from './input3'
import axios from 'axios'
const forge = require('node-forge')

class Mlogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mathod: 2
    }
  }
  postUrl2 = (myUrl) => {
    let md = forge.md.md5.create()
    md.update(this.refs.myinput.refs.NBpassword.value)
    let password = md.digest().toHex()
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.post(myUrl, JSON.stringify({
      captchaCode: '',
      captchaKey: '',
      loginType: 0,
      name: this.refs.myinput.refs.NBname.value,
      password: password
    })).then(function (response) {
      console.log(response)
      // console.log(response.status)
      // console.log(response.statusText)
      // console.log(response.headers)
      // console.log(response.config)
    })
  }
  click1 = (e) => {
    var spanarr = document.querySelectorAll('#m-login #login-right #login-right-top span')
    spanarr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'active'
    this.setState({
      mathod: 1
    })
  }
  click2 = (e) => {
    var spanarr = document.querySelectorAll('#m-login #login-right #login-right-top span')
    spanarr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'active'
    this.setState({
      mathod: 2
    })
  }
  loginBtn = () => {
    let myUrl = '/api/login?__t=' + new Date().getTime()
    this.postUrl2(myUrl)
    // console.log(this.refs.myinput.refs.NBname.value)
  }
  render() {
    var mydiv = null
    if (this.state.mathod === 1) {
      mydiv = <Input1 />
    }
    if (this.state.mathod === 2) {
      mydiv = <Input3 ref='myinput' />
    }
    return (
      <div id='m-login'>
        <div className="container">
          <div id='login-right'>
            <div id='login-right-top'>
              <span onClick={this.click1}>快捷登录</span>
              <span className='active' onClick={this.click2}>账号登录</span>
            </div>
            <div>{mydiv}</div>
            <button id='loginbtn' onClick={this.loginBtn}>登录2</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Mlogin
