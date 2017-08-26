/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import '../../assets/styles/nav.styl'
import img3down from '../../assets/Allimg/otherImg/倒三角灰色.png'
import img3up from '../../assets/Allimg/otherImg/正黄色三角.png'
class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sanjiao: 1,
      sanjiaoapp: 1,
      dis: 'none',
      disapp: 'none',
      data: [],
      cityInnerhtml: '大连'
    }
  }

  componentDidMount() {
    fetch('api/city?__t=1503626376224', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data.cities
        })
      })
  }

  mouseover = () => {
    this.setState({
      sanjiao: 2,
      dis: 'block'
    })
  }
  mouseout = () => {
    this.setState({
      sanjiao: 1,
      dis: 'none'
    })
  }
  mouseoverapp = () => {
    this.setState({
      sanjiaoapp: 2,
      disapp: 'block'
    })
  }
  mouseoutapp = () => {
    this.setState({
      sanjiaoapp: 1,
      disapp: 'none'
    })
  }
  spanclick = (e) => {
    this.setState({
      cityInnerhtml: e.target.innerHTML
    })
  }

  render() {
    var cityspan = this.state.data.map((item, index) => {
      return (
        <span key={index.toString()} onClick={this.spanclick} >{item.name}</span>
      )
    })
    var citysanjiao = null
    var appsanjiao = null
    if (this.state.sanjiao === 2) {
      citysanjiao = img3up
    }
    if (this.state.sanjiao === 1) {
      citysanjiao = img3down
    }
    if (this.state.sanjiaoapp === 2) {
      appsanjiao = img3up
    }
    if (this.state.sanjiaoapp === 1) {
      appsanjiao = img3down
    }
    return (
      <div id='web-nav'>
        <div className='container'>
          <a href='/'>
            <div id='web-logo'>.</div>
          </a>
          <div id='city' onMouseOver={this.mouseover} onMouseOut={this.mouseout}>
            {this.state.cityInnerhtml}
            <img src={citysanjiao} alt='' />
            <div id="allCity" className="bigborder" style={{display: this.state.dis}}>
              <div id="myspan">
                {cityspan}
              </div>
            </div>
          </div>
          <div id="page-choose">
            <a href="/"><span id="home">首页</span></a>
            <a href="film.html"><span id="film">电影</span></a>
            <span id="cinema">影院</span>
          </div>
          <div id="nav-right">
            <div id="appdownload" onMouseOver={this.mouseoverapp} onMouseOut={this.mouseoutapp}>
              App下载
              <img src={appsanjiao} alt='' />
              <div id="appdownload-2wm" className="bigborder" style={{display: this.state.disapp}}>
                <img src={require('../../assets/Allimg/otherImg/load2wm.png')} alt="" />
              </div>
            </div>
            <div id="nav-loginAndsign">
              <a href="login.html"><div id="nav-login">登录</div></a>
              <a href="register.html"> <div id="nav-sign">注册</div></a>
            </div>
            <div className="clearboth">.</div>
          </div>
          <div className="clearboth">.</div>
        </div>
      </div>
    )
  }
}
export default Nav
