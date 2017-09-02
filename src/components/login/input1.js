/**
 * Created by dllo on 17/8/24.
 */
import React, {Component} from 'react'

class Input1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userPassword: '',
      isRemember: false,
      unameHelp: '',
      upwdHelp: '',
      status: 1
    }
  }
  changeUsername = (e) => {
    let uname = e.garget.value
    this.setState({
      userName: uname
    })
    console.log(this.state.userName)
  }
  changePassword(e) {
    let upwd = e.target.value
    this.setState({
      userPassword: upwd
    })
  }
  handleClick = () => {
    if (this.state.userName === '' || this.state.userName === null) {
      this.setState({
        unameHelp: '用户名不能为空'
      })
    } else if (this.state.userPassword === '' || this.state.userPassword === null) {
      this.setState({
        unameHelp: '',
        upwdHelp: '密码不能为空'
      })
    } else {
      this.setState({
        unameHelp: '',
        upwdHelp: ''
      })
    }
  }
  render () {
    return (
      <div id='input1'>
        <div className='bor'>
          <input type='text' className='input1' placeholder='输入手机号或邮箱号'
            onChange={this.changeUsername} />
          <span>{this.state.unameHelp}</span>
        </div>
        <div className='bor'>
          <input type='text' placeholder='输入验证码' className='input1' />
        </div>
        <div className='bor'>
          <input type='password' className='input1' placeholder='输入密码'
            onChange={this.changePassword} />
        </div>
      </div>
    )
  }
}
export default Input1
