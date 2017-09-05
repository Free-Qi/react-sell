/**
 * Created by dllo on 17/8/25.
 */
import React, { Component } from 'react'
import '../../assets/styles/register.styl'
import axios from 'axios'
const forge = require('node-forge')

class Register2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      msg: [],
      captchaCode: '',
      captchaKey: '',
      code: '',
      name: '',
      password: ''
    }
  }

  componentDidMount () {
    fetch('/api/auth/captcha?__t=' + new Date().getTime(), {
      method: 'POST'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        // console.log(response.data.code.key)
        this.setState({
          data: response.data.code,
          captchaKey: response.data.code.key
        })
      })
  }
  postUrl = (myUrl) => {
    fetch(myUrl, {
      method: 'POST'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        // console.log(response.data)
        this.setState({
          data: response.data.code
        })
      })
  }
  postUrl2 = (myUrl) => {
    let md = forge.md.md5.create()
    md.update(this.refs.password1.value)
    let password = md.digest().toHex()
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.post(myUrl, JSON.stringify({
      captchaCode: this.refs.captchaCode1.value,
      captchaKey: this.state.captchaKey,
      code: this.refs.code1.value,
      name: this.refs.userName.value,
      // password: this.refs.password1.value,
      password: password,
      mobile: this.refs.userName.value,
      type: 3
    })).then(function (response) {
      console.log(response)
      // console.log(response.status)
      // console.log(response.statusText)
      // console.log(response.headers)
      // console.log(response.config)
    })
  }
  registerBtn = () => {
    const url = '/api/register?__t=' + new Date().getTime()
    // let myUrl = '/api/sms/mobile?__t=' + new Date().getTime()
    this.postUrl2(url)
  }
  changeCode = () => {
    let myUrl = '/api/auth/captcha?__t=' + new Date().getTime()
    console.log(new Date().getTime())
    this.postUrl(myUrl)
  }
  codeBtn = () => {
    let myUrl = '/api/sms/mobile?__t=' + new Date().getTime()
    this.postUrl2(myUrl)
  }
  render () {
    return (
      <div id='register-big'>
        <div id='register-left'>
          <h2>
            <b>欢迎加入卖座2</b>
          </h2>
          <p id='register-line' />
          <form action='' id='register-input'>
            <input ref='userName' type='text' placeholder='请输入手机号' />
            <input ref='captchaCode1' type='text' placeholder='请输入验证码' />
            <div id='register-code' onClick={this.changeCode}>
              <img src={this.state.data.url} alt='' />
            </div>
            <input ref='code1' type='text' placeholder='请输入动态码' />
            <div id='register-dynamicState' onClick={this.codeBtn}>发送动态码</div>
            <input ref='password1' type='password' placeholder='设置新密码6-16位,数字,字母' />
            <input type='password' placeholder='请再次输入登录密码' />
            <button id='register-btn' onClick={this.registerBtn} type='button'>立即注册</button>
            <div id='register-clause'>
              <input type='checkbox' />
              <div id='register-agree'>
                <span>我已阅读并同意</span>
                <a href=''>《卖座网服务条款》</a>
              </div>
            </div>
          </form>
        </div>
        <div id='register-right'>
          <p>更加优惠 • 更多服务 • 更多朋友</p>
          <div id='register-backimg'>
            <img src={require('../../assets/images/register/login.png')} alt='' />
          </div>
        </div>
      </div>
    )
  }
}
export default Register2

// captchaCode:""
// captchaKey:""
// loginType:0
// name:"18841524125"
// password:"e10adc3949ba59abbe56e057f20f883e"

// /api/login?__t=1504518692581