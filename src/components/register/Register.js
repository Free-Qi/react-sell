/**
 * Created by dllo on 17/8/25.
 */
import React, { Component } from 'react'
import '../../assets/styles/register.styl'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      msg: []
    }
  }
  postUrl = (myUrl) => {
    fetch(myUrl, {
      method: 'POST'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response.data)
        this.setState({
          data: response.data['code']
        })
      })
  }
  postUrl2 = (url, formData) => {
    fetch(url, {
      method: 'POST',
      headers: {},
      body: formData
    }).then((response) => {
      return response.json()
    })
      .then(response => {
        console.log(response.data)
        this.setState({
          msg: response.data
        })
      })
  }
  postUrl3 = (url) => {
    fetch(url, {
      method: 'POST',
      headers: {},
      body: {
        captchaCode: 'pqpr',
        captchaKey: '86BFF934E7E197AE',
        code: '1234',
        name: '13392837465',
        password: 'e10adc3949ba59abbe56e057f20f883e'

      }
    }).then((response) => {
      return response.json()
    })
      .then(response => {
        console.log(response.data)
        this.setState({
          msg: response.data
        })
      })
  }
  componentDidMount () {
    fetch('/api/auth/captcha?__t=1504327682052', {
      method: 'POST'
    })
            .then(response => {
              return response.json()
            })
            .then(response => {
              // console.log(response.data)
              this.setState({
                data: response.data['code']
              })
            })
  }
  changeCode = () => {
    let myUrl = '/api/auth/captcha?__t=1504327682052'
    this.postUrl(myUrl)
  }
  submit = () => {
    let myUrl = 'api/register?__t=1504338503121'
    let formData = new FormData()
    formData.append('captchaCode', 'pqpr')
    formData.append('captchaKey', '86BFF934E7E197AE')
    formData.append('code', '1234')
    formData.append('name', '13392837465')
    formData.append('password', 'e10adc3949ba59abbe56e057f20f883e')
    // this.postUrl2(myUrl, formData)
    this.postUrl3(myUrl)
    console.log('123')
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
            <div id='register-code' onClick={this.changeCode}>
              <img src={this.state.data.url} alt='' />
            </div>
            <input type='text' placeholder='请输入动态码' />
            <div id='register-dynamicState'>发送动态码</div>
            <input type='password' placeholder='设置新密码6-16位,数字,字母' />
            <input type='password' placeholder='请再次输入登录密码' />
            <button id='register-btn' onClick={this.submit}>立即注册</button>
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
