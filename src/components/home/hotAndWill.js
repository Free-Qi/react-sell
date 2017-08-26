/**
 * Created by dllo on 17/8/26.
 */
import React, {Component} from 'react'
import '../../assets/styles/home.styl'
class HotAndWill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 'hot',
      data: [],
      pagenum: 1
    }
  }

  clickleft = () => {
    this.setState({
      pagenum: this.state.pagenum - 1
    }, () => {
      let myUrl = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=1&type=1'
      this.getUrl(myUrl)
      if (this.state.pagenum <= 0) {
        this.setState({
          pagenum: 1
        })
      }
    })
  }
  clickright = () => {
    let myUrl = 'api/film?__t=1503715245520&page=' + (this.state.pagenum + 1) + '&count=6&sortType=1&type=1'
    fetch(myUrl, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (response.data.films.length !== 0) {
          this.setState({
            pagenum: this.state.pagenum + 1
          }, () => {
            let myUrl = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=1&type=1'
            this.getUrl(myUrl)
          })
        }
      })
  }
  getUrl = (myUrl) => {
    fetch(myUrl, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response.data)
        this.setState({
          data: response.data.films
        })
      })
  }

  componentDidMount() {
    let myUrl = 'api/film?__t=1503715245520&page=1&count=6&sortType=1&type=1'
    this.getUrl(myUrl)
    var h2Arr = document.querySelectorAll('#hotAndWill #hotAndWill-header #hotAndWill-header-left h2')
    if (this.state.show === 'hot') {
      h2Arr.forEach(function (item, index) {
        item.className = ''
      })
      h2Arr[0].className = 'h2black'
    }
    if (this.state.show === 'will') {
      h2Arr.forEach(function (item, index) {
        item.className = ''
      })
      h2Arr[2].className = 'h2black'
    }
  }

  hotClick = (e) => {
    var h2Arr = document.querySelectorAll('#hotAndWill #hotAndWill-header #hotAndWill-header-left h2')
    h2Arr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'h2black'
  }
  willClick = (e) => {
    var h2Arr = document.querySelectorAll('#hotAndWill #hotAndWill-header #hotAndWill-header-left h2')
    h2Arr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'h2black'
  }

  render() {
    const filmArr = this.state.data.map(function (item, index) {
      return (
        <div className="home-hotfilm-one" key={index.toString()}>
          <div className="home-hotfilm-one-img">
            <img src={item.poster.origin} alt='' />
          </div>
          <div className="home-hotfilm-text">
            <span className="home-hotfilm-name">{item.name}</span>
            <span className="home-hotfilm-grade">{item.grade}</span>
          </div>
        </div>
      )
    })
    return (
      <div id="hotAndWill">
        <div className="home-container">
          <div id="hotAndWill-goleft" onClick={this.clickleft}>
            <img src={require('../../assets/Allimg/otherImg/左箭头.png')} alt="" />
          </div>
          <div id="hotAndWill-goright" onClick={this.clickright}>
            <img src={require('../../assets/Allimg/otherImg/右箭头.png')} alt="" />
          </div>
          <div id="hotAndWill-header">
            <div id="hotAndWill-header-left">
              <h2 onClick={this.hotClick}>正在热映</h2>
              <h2>/</h2>
              <h2 onClick={this.willClick}>即将上映</h2>
            </div>
            <div id="hotAndWill-header-right">
              <p>大连正在上映 <span style={{color: 'red'}}>33</span>部电影&nbsp;&nbsp;&nbsp;&nbsp;<a href="film.html">更多>></a>
              </p>
            </div>
            <div className="clearboth">&nbsp;</div>
          </div>
          <div id="home-hotfileAll">
            {filmArr}
          </div>
        </div>
      </div>
    )
  }
}
export default HotAndWill
