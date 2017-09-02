/**
 * Created by dllo on 17/9/2.
 */
import React, {Component} from 'react'
import '../../assets/styles/cinema.styl'
import RightAcive from '../../components/rightActive/RightActive'
import axios from 'axios'
class CinemaAll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      myarr: [],
      liinner: '全部'
    }
  }
  getUrl = (myUrl) => {
    axios.defaults.withCredentials = true
    axios(myUrl, {
      method: 'GET'
    })
      .then(response => {
        this.setState({
          data: response.data.data.cinemas
        }, () => {
          this.removeS(this.state.data)
        })
      })
  }
  removeS = (arr) => {
    var emptyArr = [arr[0].district.name]
    for (var i = 0; i < arr.length; i++) {
      if (emptyArr.indexOf(arr[i].district.name) === -1) {
        emptyArr.push(arr[i].district.name)
      }
    }
    this.setState({
      myarr: emptyArr
    }, () => {
      console.log(this.state.myarr, 111)
    })
  }
  componentWillReceiveProps(nextProps) {
    let myUrl = '/api/cinema?__t=1504142111294'
    this.getUrl(myUrl)
  }
  componentDidMount() {
    let myUrl = '/api/cinema?__t=1504142111294'
    this.getUrl(myUrl)
  }
  liclick = (e) => {
    var liArr = document.querySelectorAll('#itemRigth li')
    liArr.forEach((item, index) => {
      item.className = ''
    })
    e.target.className = 'liblue'
    this.setState({
      liinner: e.target.innerHTML
    })
  }
  gologin = () => {
    location.href = 'login.html'
  }
  render() {
    var cinemaOneArr = this.state.data.map((item, index) => {
      if (this.state.liinner === '全部') {
        return (
          <div className="item-one" key={index.toString()}>
            <a href={'MovieTheatre.html?id=' + item.id}>
              <img src={item.logoUrl} alt="" />
            </a>
            <div className="item-one-text">
              <a href={'MovieTheatre.html?id=' + item.id}>
                <h3>{item.name}</h3>
              </a>
              <ul className="item-one-text-ul">
                <li>
                  <span>电话:</span>
                  <span>{item.telephones}</span>
                </li>
                <li>
                  <span>地址:</span>
                  <span>{item.address}</span>
                </li>
              </ul>
            </div>
            <button className="item-one-btn" onClick={this.gologin}>影院详情</button>
          </div>
        )
      }
      if (item.district.name === this.state.liinner) {
        return (
          <div className="item-one" key={index.toString()}>
            <a href={'MovieTheatre.html?id=' + item.id}>
              <img src={item.logoUrl} alt="" />
            </a>
            <div className="item-one-text">
              <a href={'MovieTheatre.html?id=' + item.id}>
                <h3>{item.name}</h3>
              </a>
              <ul className="item-one-text-ul">
                <li>
                  <span>电话:</span>
                  <span>{item.telephones}</span>
                </li>
                <li>
                  <span>地址:</span>
                  <span>{item.address}</span>
                </li>
              </ul>
            </div>
            <button className="item-one-btn" onClick={this.gologin}>影院详情</button>
          </div>
        )
      }
    })
    return (
      <div id="cinema-body">
        <div className="cinema-container">
          <div id="cinema-body-left">
            <div id="cinema-body-header">
              <h2>影院列表</h2>
              <div id="cinema-body-header-right">
                <input type="text" placeholder="请输入你想要去的电影院" />
              </div>
            </div>
            <div className="item">
              <span>区域:</span>
              <div id="itemRigth">
                <li className="liblue" onClick={this.liclick}>全部</li>
                {
                this.state.myarr.map((item, index) => {
                  return (
                    <li key={index.toString()} onClick={this.liclick}>{item}</li>
                  )
                })
              }</div>
            </div>
            <div id="scoll">{cinemaOneArr}</div>
          </div>
          <div id="cinema-body-right">
            <RightAcive />
          </div>
          <div className="clearboth">&nbsp;</div>
        </div>
      </div>
    )
  }
}
export default CinemaAll