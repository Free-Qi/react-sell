/**
 * Created by dllo on 17/9/5.
 */
import React, {Component} from 'react'
import '../../../assets/logged/logged.styl'
class Logged extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginType: ''
    }
  }
  getUrl3 = (myUrl) => {
    fetch(myUrl, {
      method: 'GET',
      credentials: 'include'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            status: response.status,
            loginType: response.data.user.name
          })
        })
  }
  componentDidMount () {
    let myUrl2 = 'api/me?__t=' + new Date().getTime()
    this.getUrl3(myUrl2)
  }
  render() {
    return (
      <div id="big">
        <div id="logged-nav">
          <img src={require('../../../assets/images/MovieTheatre/pc.png')} alt="" />
          <div id="logged-user">用户名:{this.state.loginType}</div>
          <div id="logged-balance">余额:</div>
          <p id="logged-line">&nbsp;</p>
          <p className="logged-title"><a href="logged.html">我的订单</a></p>
          <p className="logged-title"><a href="maizuocare.html">我的卖座卡</a></p>
          <p className="logged-title"><a href="maizuocash.html">我的现金券</a></p>
          <p className="logged-title"><a href="maizuophone.html">绑定手机</a></p>
          <p className="logged-title"><a href="maizuologin.html">登录密码</a></p>
          <p className="logged-title"><a href="maizuopass.html">安全密码</a></p>
        </div>
        <div id="logged-content">
          <h2>我的订单</h2>
          <p id="logged-line-right">&nbsp;</p>
          <div id="logged-order-title">
            <span>订单列表</span>
            <span>
              <a href="logged.html" onClick={this.clickon} id="orderon">当前订单</a>
              <span>&nbsp;</span>
              <span>/</span>
              <a href="logged.html" onClick={this.clicked} id="ordered">历史订单</a>
            </span>
          </div>
          <div id="logged-order-content">
            <ul>
              <li>订单号</li>
              <li>影片</li>
              <li>影院</li>
              <li>场次</li>
              <li>票数/张</li>
              <li>订单金额</li>
              <li>状态</li>
            </ul>
          </div>
          <div id="logged-content-order">无订单</div>
        </div>
      </div>
    )
  }
}

export default Logged