/**
 * Created by dllo on 17/8/22.
 */
import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import axios from 'axios'
const md5 = require('md5')
class Mlogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dis: 'none',
      mathod: 2,
      user: '',
      pass: ''
    }
  }

  click1 = (e) => {
    var spanarr = document.querySelectorAll('#m-login #login-right #login-right-top span')
    spanarr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'active'
    this.setState({
      mathod: 1,
      dis: 'block'
    })
  }
  click2 = (e) => {
    var spanarr = document.querySelectorAll('#m-login #login-right #login-right-top span')
    spanarr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'active'
    this.setState({
      mathod: 2,
      dis: 'none'
    })
  }
  loginclick = () => {
    this.setState({
      user: this.refs.userinp.value,
      pass: md5(this.refs.passinp.value)
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
      })).then(function (response) {
        console.log(response)
      })
    })
  }

  render() {
    return (
      <div id='m-login'>
        <div className="container">
          <div id='login-right'>
            <div id='login-right-top'>
              <span onClick={this.click1}>快捷登录</span>
              <span className='active' onClick={this.click2}>账号登录</span>
            </div>
            <div id='input1'>
              <div className='bor'>
                <input type='text' className='input1' placeholder='输入手机号或邮箱号' ref='userinp' />
                <span>{this.state.unameHelp}</span>
              </div>
              <div className='bor' style={{display: this.state.dis}}>
                <input type='text' placeholder='输入验证码' className='input1' />
              </div>
              <div className='bor'>
                <input type='password' className='input1' placeholder='输入密码' ref='passinp' />
              </div>
            </div>
            <button id='loginbtn' onClick={this.loginclick}>登录</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Mlogin
