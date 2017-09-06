/**
 * Created by dllo on 17/9/5.
 */
import React, {Component} from 'react'
import '../../../assets/logged/mymaizuo.styl'
import a from '../../../assets/logged/reduce.png'
import b from '../../../assets/logged/add.png'

class MaizuoCare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stauts: 1,
      loginType: ''
    }
  }
  click = () => {
    this.setState({
      stauts: this.state.stauts + 1
    }, () => {
    })
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
            loginType: response.data.user.name
          })
        })
  }
  componentDidMount () {
    let myUrl2 = 'api/me?__t=' + new Date().getTime()
    this.getUrl3(myUrl2)
  }
  render() {
    let myimg = null
    if (this.state.stauts % 2 === 1) {
      myimg = <img src={b} alt="" id="maizuocare-img" />
    } else {
      myimg = <img src={a} alt="" id="maizuocare-img" />
    }
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
        <div id="maizuocare-content">
          <h2>我的卖座卡</h2>
          <p id="maizuocare-line">&nbsp;</p>
          <div id="maizuocare-main-content" onClick={this.click}>
            {myimg}
            添加新的卖座卡
          </div>
          <div id="maizuocare-content-phone">
            <div>
              <p>卖座卡</p>
              <p>电子卖座卡</p>
              <div id="maizuocare-line3">&nbsp;</div>
              <input type="text" />
              <input type="text" />
              <button type="button">查询</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MaizuoCare
