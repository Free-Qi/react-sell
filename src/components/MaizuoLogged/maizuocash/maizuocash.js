/**
 * Created by dllo on 17/9/5.
 */
import React, {Component} from 'react'
import '../../../assets/logged/maizuocash.styl'

class MaizuoCash extends Component {
  render() {
    return (
      <div id="big">
        <div id="logged-nav">
          <img src={require('../../../assets/images/MovieTheatre/pc.png')} alt="" />
          <div id="logged-user">用户名:</div>
          <div id="logged-balance">余额:</div>
          <p id="logged-line">&nbsp;</p>
          <p className="logged-title"><a href="logged.html">我的订单</a></p>
          <p className="logged-title"><a href="maizuocare.html">我的卖座卡</a></p>
          <p className="logged-title"><a href="maizuocash.html">我的现金券</a></p>
          <p className="logged-title"><a href="">绑定手机</a></p>
          <p className="logged-title"><a href="">登录密码</a></p>
          <p className="logged-title"><a href="">安全密码</a></p>
        </div>
        <div id="maizuocare-content">
          <h2>我的卖座卡</h2>
          <p id="maizuocare-line">&nbsp;</p>
        </div>
      </div>
    )
  }
}

export default MaizuoCash