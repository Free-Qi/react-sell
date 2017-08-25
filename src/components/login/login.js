/**
 * Created by dllo on 17/8/22.
 */
import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import Input1 from './input1'
import Input2 from './input2'

class Mlogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mathod: 2
    }
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

  render() {
    var mydiv = null
    if (this.state.mathod === 1) {
      mydiv = <Input1 />
    }
    if (this.state.mathod === 2) {
      mydiv = <Input2 />
    }
    return (
      <div id='m-login'>
        <div id='login-right'>
          <div id='login-right-top'>
            <span onClick={this.click1}>快捷登录</span>
            <span className='active' onClick={this.click2}>账号登录</span>
          </div>
          <div>{mydiv}</div>
          <button id='loginbtn'>登录</button>
        </div>
      </div>
    )
  }
}
export default Mlogin
