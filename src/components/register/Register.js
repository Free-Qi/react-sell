/**
 * Created by dllo on 17/8/25.
 */
import React, { Component } from 'react'
import '../../assets/styles/register.styl'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: '',
      username: '',
      password: '',
      msg: '',
      status: '',
      phoneStatus: ''
    }
  }

  componentDidMount () {
    fetch('api/auth/captcha?__t=1504267067804', {
      method: 'POST'
    })
            .then(response => {
              return response.json()
            })
            .then(response => {
              this.setState({
                data: response.data.code.url
              })
            })
  }
  phone = () => {
  }
  phoneValue = () => {
    const number = document.getElementById('inputPhone').value
    const regex = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
    if (!(regex).test(number)) {
      this.setState({
        phoneStatus: false
      })
    } else {
      this.setState({
        phoneStatus: true
      })
    }
  }
  register = () => {
    if (this.state.phoneStatus) {
      console.log('注册成功!')
    } else {
      console.log('注册失败')
    }
  }
  verify = () => {
    fetch('api/auth/captcha?__t=1504267067804', {
      method: 'POST'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            data: response.data.code.url
          })
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
            <input id='inputPhone' type='text' placeholder='请输入手机号' onClick={this.phone}
              onChange={this.phoneValue} />
            <input type='text' placeholder='请输入验证码' />
            <div id='register-code' onClick={this.conversion}>
              <img src={this.state.data} alt='' onClick={this.verify} />
            </div>
            <input type='text' placeholder='请输入动态码' />
            <div id='register-dynamicState' onClick={this.dynamicState}>发送动态码</div>
            <input type='password' placeholder='设置新密码6-16位,数字,字母' />
            <input type='password' placeholder='请再次输入登录密码' />
            <button id='register-btn' onClick={this.register} type="button">立即注册</button>
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
export default Register
