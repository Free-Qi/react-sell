/**
 * Created by dllo on 17/8/25.
 */
import React, { Component } from 'react'
import '../../assets/styles/register.styl'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    fetch('/captcha/code/getImg?key=DD03C26C6EE755DD', {
      method: 'GET'
    })
            .then(response => {
              return response.blob()
            })
            .then(response => {
              console.log(response)
              this.setState({
                data: response.data
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
            <input type='text' placeholder='请输入手机号' />
            <input type='text' placeholder='请输入验证码' />
            <div id='register-code' onClick={this.conversion}>
              <img src={this.state.date} alt='' />
            </div>
            <input type='text' placeholder='请输入动态码' />
            <div id='register-dynamicState'>发送动态码</div>
            <input type='password' placeholder='设置新密码6-16位,数字,字母' />
            <input type='password' placeholder='请再次输入登录密码' />
            <button id='register-btn'>立即注册</button>
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
