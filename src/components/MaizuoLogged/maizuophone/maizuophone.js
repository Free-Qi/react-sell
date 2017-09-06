/**
 * Created by dllo on 17/9/5.
 */
import React, {Component} from 'react'
import '../../../assets/logged/maizuophone.styl'

class MaizuoPhone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      securityMobile: '',
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
            loginType: response.data.user.name,
            securityMobile: response.data.user.setting.securityMobile
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
          <div id="logged-balance">余额:0</div>
          <p id="logged-line">&nbsp;</p>
          <p className="logged-title"><a href="logged.html">我的订单</a></p>
          <p className="logged-title"><a href="maizuocare.html">我的卖座卡</a></p>
          <p className="logged-title"><a href="maizuocash.html">我的现金券</a></p>
          <p className="logged-title"><a href="maizuophone.html">绑定手机</a></p>
          <p className="logged-title"><a href="maizuologin.html">登录密码</a></p>
          <p className="logged-title"><a href="maizuopass.html">安全密码</a></p>
        </div>
        <div id="maizuocare-content">
          <h2>绑定手机</h2>
          <p id="maizuocare-line">&nbsp;</p>
          <div id="maizuophone-content">
            <img src={require('../../../assets/images/MovieTheatre/phone.png')} alt="" />
          </div>
          <div id="maizuophone-phone">
            <p>绑定的手机号:{this.state.securityMobile}</p>
            <p>如需更改手机号码，请拨打客服电话：400-1808-400</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MaizuoPhone