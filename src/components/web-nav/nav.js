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
      data: []
      // cityInnerhtml: this.props.cityInnerhtml
    }
  }
  static propTypes = {
    getinner: React.PropTypes.func,
    inner: React.PropTypes.string
    // getTitle: React.PropTypes.func
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
  render() {
    var Aspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'A') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Bspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'B') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Cspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'C') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Dspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'D') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name} >{item.name}</span>
        )
      }
    })
    var Espan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'E') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Fspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'F') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Gspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'G') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Hspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'H') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Jspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'J') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Kspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'K') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Lspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'L') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Mspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'M') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Nspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'N') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name} >{item.name}</span>
        )
      }
    })
    var Pspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'P') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Qspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'Q') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name} >{item.name}</span>
        )
      }
    })
    var Rspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'R') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Sspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'S') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Tspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'T') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Wspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'W') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Xspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'X') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name} >{item.name}</span>
        )
      }
    })
    var Yspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'Y') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
    })
    var Zspan = this.state.data.map((item, index) => {
      if (item.pinyin.substr(0, 1) === 'Z') {
        return (
          <span key={index} onClick={this.props.getinner} title={item.id} name={item.name}>{item.name}</span>
        )
      }
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
            <span> {this.props.inner}</span>
            <img src={citysanjiao} alt='' />
            <div id="allCity" className="bigborder" style={{display: this.state.dis}} onMouseOver={this.mouseover} onMouseOut={this.mouseout}>
              <div id="myspan">
                <i className="colorred">A</i><div>{Aspan}</div>
                <i className="colorred">B</i><div>{Bspan}</div>
                <i className="colorred">C</i><div>{Cspan}</div>
                <i className="colorred">D</i><div>{Dspan}</div>
                <i className="colorred">E</i><div>{Espan}</div>
                <i className="colorred">F</i><div>{Fspan}</div>
                <i className="colorred">G</i><div>{Gspan}</div>
                <i className="colorred">H</i><div>{Hspan}</div>
                <i className="colorred">J</i><div>{Jspan}</div>
                <i className="colorred">K</i><div>{Kspan}</div>
                <i className="colorred">L</i><div>{Lspan}</div>
                <i className="colorred">M</i><div>{Mspan}</div>
                <i className="colorred">N</i><div>{Nspan}</div>
                <i className="colorred">P</i><div>{Pspan}</div>
                <i className="colorred">Q</i><div>{Qspan}</div>
                <i className="colorred">R</i><div>{Rspan}</div>
                <i className="colorred">S</i><div>{Sspan}</div>
                <i className="colorred">T</i><div>{Tspan}</div>
                <i className="colorred">W</i><div>{Wspan}</div>
                <i className="colorred">X</i><div>{Xspan}</div>
                <i className="colorred">Y</i><div>{Yspan}</div>
                <i className="colorred">Z</i><div>{Zspan}</div>
              </div>
            </div>
          </div>
          <div id="page-choose">
            <a href="/"><span id="home">首页</span></a>
            <a href="film.html"><span id="film">电影</span></a>
            <a href="cinema.html"><span id="cinema">影院</span></a>
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
