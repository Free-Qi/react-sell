/**
 * Created by dllo on 17/8/25.
 */
import React, { Component } from 'react'
import '../../assets/styles/register.styl'
import axios from 'axios'
const md5 = require('md5')
class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      key: '',
      tel: '',
      code: '',
      codeurl: '',
      pass: '',
      passagain: '',
      giveme: 0
    }
  }
  getCode = (codeurl) => {
    axios.defaults.withCredentials = true
    axios(codeurl, {
      method: 'POST'
    })
      .then(response => {
        // console.log(response.data.data.code.key)
        this.setState({
          key: response.data.data.code.key,
          codeurl: response.data.data.code.url
        })
      })
  }
  changecode =() => {
    var t = new Date().getTime()
    let codeurl = 'api/auth/captcha?__t=' + t
    this.getCode(codeurl)
    // e.target.setAttribute('src', this.state.codeurl + (new Date()).getTime())
  }
  sendClick = () => {
    var inpArr = document.querySelectorAll('#register-input input')
    this.setState({
      tel: inpArr[0].value,
      code: inpArr[1].value
    }, () => {
      var ot = new Date().getTime()
      let sendurl = 'api/sms/mobile?__t=' + ot
      axios.defaults.headers.post['Content-Type'] = 'application/json'
      axios.post(sendurl, JSON.stringify({
        captchaCode: this.state.code,
        captchaKey: this.state.key,
        mobile: this.state.tel,
        type: 3
      })).then(function (response) {
        console.log(response)
        // console.log(response.status)
        // console.log(response.statusText)
        // console.log(response.headers)
        // console.log(response.config)
      })
    })
  }
  componentDidMount () {
    var t = new Date().getTime()
    let codeurl = 'api/auth/captcha?__t=' + t
    this.getCode(codeurl)
  }
  registerClick = () => {
    var inpArr = document.querySelectorAll('#register-input input')
    this.setState({
      tel: inpArr[0].value,
      code: inpArr[1].value,
      giveme: inpArr[2].value,
      pass: md5(inpArr[3].value),
      passagain: md5(inpArr[4].value)
    }, () => {
      if (this.state.pass === this.state.passagain) {
        var ot = new Date().getTime()
        let sendurl = 'api/register?__t=' + ot
        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.post(sendurl, JSON.stringify({
          captchaCode: this.state.code,
          captchaKey: this.state.key,
          code: this.state.giveme,
          name: this.state.tel,
          password: this.state.pass
        })).then(function (response) {
          console.log(response)
        })
      } else {
        alert('两次密码不一致')
      }
    })
  }
  render () {
    return (
      <div id='register-big'>
        <div id='register-left'>
          <h2>
            <b>欢迎加入卖座</b>
          </h2>
          <p id='register-line' />
          <form action='' id='register-input'>
            <input type='text' placeholder='请输入手机号' />
            <input type='text' placeholder='请输入验证码' />
            <div id='register-code' onClick={this.changecode}>
              <img src={this.state.codeurl} alt='' id="codeimg" />
            </div>
            <input type='text' placeholder='请输入动态码' />
            <div id='register-dynamicState' onClick={this.sendClick}>发送动态码</div>
            <input type='password' placeholder='设置新密码6-16位,数字,字母' />
            <input type='password' placeholder='请再次输入登录密码' />
            <button id='register-btn' type="button" onClick={this.registerClick}>立即注册</button>
            <div id='register-clause'>
              <input type='checkbox' id="checkbox" />
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
export default Register
