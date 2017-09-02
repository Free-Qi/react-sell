/**
 * Created by dllo on 17/8/30.
 */
import React, {Component} from 'react'
import '../../assets/styles/twopageFilm.styl'
import axios from 'axios'

class TwopageFilmCinema extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      taday: '',
      temorow: '',
      myarr: [],
      tel: '',
      name: '',
      address: '',
      cinemaid: 0,
      mydata: [],
      myinner: '全部'
    }
  }
  static propTypes = {
    filmid: React.PropTypes.string
  }
  getschedules = (myUrl) => {
    axios.defaults.withCredentials = true
    axios(myUrl, {
      method: 'GET'
    })
      .then(response => {
        this.setState({
          mydata: response.data.data.schedules
        })
      })
  }
  getUrl = (myUrl) => {
    axios.defaults.withCredentials = true
    axios(myUrl, {
      method: 'GET'
    })
    .then(response => {
      this.setState({
        data: response.data.data.cinemas,
        taday: new Date(new Date()).toLocaleDateString(),
        temorow: new Date(new Date().getTime() + 86400000).toLocaleDateString(),
        tel: response.data.data.cinemas[0].telephones,
        name: response.data.data.cinemas[0].name,
        address: response.data.data.cinemas[0].address,
        cinemaid: response.data.data.cinemas[0].id
      }, () => {
        this.removeS(this.state.data)
      })
    })
  }
  componentWillReceiveProps(nextProps) {
    let myUrl = '/api/cinema?__t=1504142111294'
    this.getUrl(myUrl)
    let schedulesUrl = '/api/schedule?__t=1504252995666&cinema=' + this.state.cinemaid + '&film=' + nextProps.filmid + '&date='
    this.getschedules(schedulesUrl)
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
    })
  }
  componentDidMount() {
    let myUrl = '/api/cinema?__t=1504142111294'
    this.getUrl(myUrl)
  }
  dataclick = (e) => {
    var spanArr = document.querySelectorAll('#choose-date span')
    spanArr.forEach((item, index) => {
      item.className = 'needspan'
    })
    e.target.className = 'needblue'
  }
  placeclick =(e) => {
    var spanArr = document.querySelectorAll('#place span')
    spanArr.forEach((item, index) => {
      item.className = 'needspan'
    })
    e.target.className = 'needblue'
    this.setState({
      myinner: e.target.innerHTML
    })
  }
  cinemaclick = (e) => {
    var divArr = document.querySelectorAll('#page2cinema #cinema-right div')
    divArr.forEach((item, index) => {
      item.className = 'cinemaArr needspan'
    })
    e.target.className = 'cinemaArr needblue'
    this.setState({
      tel: e.target.getAttribute('id'),
      name: e.target.getAttribute('name'),
      address: e.target.getAttribute('title'),
      cinemaid: e.target.getAttribute('target')
    })
    let schedulesUrl = '/api/schedule?__t=1504252995666&cinema=' + this.state.cinemaid + '&film=' + this.props.filmid + '&date='
    this.getschedules(schedulesUrl)
  }
  render() {
    var cinemaArr = this.state.data.map((item, index) => {
      if (this.state.myinner === '全部') {
        return (
          <div className="cinemaArr needspan" onClick={this.cinemaclick} id={item.telephones} name={item.name} title={item.address} key={index.toString()} target={item.id}>{item.name}</div>
        )
      }
      if (item.district.name === this.state.myinner) {
        return (
          <div className="cinemaArr needspan" onClick={this.cinemaclick} id={item.telephones} name={item.name} title={item.address} key={index.toString()} target={item.id}>{item.name}</div>
        )
      }
    })
    var oneArr = this.state.mydata.map((item, index) => {
      var beginhours = new Date(item.showAt).getHours()
      var beginmin = null
      if (new Date(item.showAt).getMinutes() < 10) {
        beginmin = '0' + new Date(item.showAt).getMinutes()
      } else {
        beginmin = new Date(item.showAt).getMinutes()
      }
      var endhours = new Date(item.endAt).getHours()
      var endmin = 0
      if (endmin < 10) {
        endmin = '0' + new Date(item.endAt).getMinutes()
      } else {
        endmin = new Date(item.endAt).getMinutes()
      }
      return (
        <ul className="field-one" key={index.toString()}>
          <li className="begintime">{beginhours + ':' + beginmin}</li>
          <li className="field-one-text">预计{endhours + ':' + endmin}散场</li>
          <li className="field-one-text">{item.film.language + '/' + item.imagery}</li>
          <li className="field-one-text">{item.hall.name}</li>
          <li className="field-one-text">不会画图?</li>
          <li className="field-one-ori">{item.price.maizuo}</li>
          <button className="field-one-btn">选座购票</button>
        </ul>
      )
    })
    return (
      <div id="TwopageFilmCinema">
        <div id="TwopageFilmCinema-header">
          <h2>在线购票</h2>
        </div>
        <div id="choose-date">
          <i className="label">日期:</i>
          <span className="needblue" onClick={this.dataclick}>{this.state.taday}</span>
          <span className="needspan" onClick={this.dataclick}>{this.state.temorow}</span>
        </div>
        <div id="place">
          <i className="label">区域:</i>
          <span className="needblue" onClick={this.placeclick}>全部:</span>
          {
            this.state.myarr.map((item, index) => {
              return (
                <span key={index.toString()} className="needspan" onClick={this.placeclick}>{item}</span>
              )
            })
          }
        </div>
        <div id="page2cinema">
          <i className="label">影院:</i>
          <div id="cinema-right">
            {cinemaArr}
          </div>
        </div>
        <div id="mycinemas">
          <span className="cinema-name">{this.state.name}</span>
          <span className="needspan">{this.state.tel}</span>
          <span className="needspan">{this.state.address}</span>
        </div>
        <div id="field">
          <ul className="field-one">
            <li className="field-title-li">放映时间</li>
            <li className="field-title-li">散场时间</li>
            <li className="field-title-li">语言/版本</li>
            <li className="field-title-li">放映厅</li>
            <li className="field-title-li">座位情况</li>
            <li className="field-title-li">票价</li>
          </ul>
          {oneArr}
        </div>
      </div>
    )
  }
}
export default TwopageFilmCinema