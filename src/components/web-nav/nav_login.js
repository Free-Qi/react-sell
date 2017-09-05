import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import '../../assets/styles/nav.styl'
class NavLogin extends Component {
  render () {
    return (
      <div>
        <a href='login.html'><div id='nav-login'>登录</div></a>
        <a href='register.html'> <div id='nav-sign'>注册</div></a>
      </div>
    )
  }
}
export default NavLogin
