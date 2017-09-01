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
      myarr: []
    }
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
        temorow: new Date(new Date().getTime() + 86400000).toLocaleDateString()
      }, () => {
        this.removeS(this.state.data)
      })
    })
  }
  componentWillReceiveProps(nextProps) {
    let myUrl = '/api/cinema?__t=1504142111294'
    this.getUrl(myUrl)
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
  }
  render() {
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
                <span key={index} className="needspan" onClick={this.placeclick}>{item}</span>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default TwopageFilmCinema