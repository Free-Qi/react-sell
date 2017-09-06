/**
 * Created by dllo on 17/9/6.
 */
import React, {Component} from 'react'
import '../../../assets/logged/maizuologin.styl'

class MaizuoPass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginType: '',
      securityMobile: ''
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
          <p id="logged-line">&nbsp;</p><p className="logged-title"><a href="logged.html">我的订单</a></p>
          <p className="logged-title"><a href="maizuocare.html">我的卖座卡</a></p>
          <p className="logged-title"><a href="maizuocash.html">我的现金券</a></p>
          <p className="logged-title"><a href="maizuophone.html">绑定手机</a></p>
          <p className="logged-title"><a href="maizuologin.html">登录密码</a></p>
          <p className="logged-title"><a href="maizuopass.html">安全密码</a></p>
        </div>
        <div id="maizuocare-content">
          <h2>设置安全密码</h2>
          <p id="maizuocare-line">&nbsp;</p>
          <div id="maizuologin-content">
            <img src={require('../../../assets/images/MovieTheatre/phone.png')} alt="" />
            <p>已绑定手机号:{this.state.securityMobile}</p>
          </div>
          <input type="text" className="maizuologin-input" />
          <input type="text" className="maizuologin-input" />
          <input type="text" className="maizuologin-input" />
          <button type="button">确认</button>
        </div>
      </div>
    )
  }
}

export default MaizuoPass
