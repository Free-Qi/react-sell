import React, {Component} from 'react'
import '../../assets/styles/Film.styl'
import FilmHotActive from './FilmHotActive'
// import RigthActive from '../rightActive/RightActive'
class Film extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      show: 'hot',
      pagenum: 1,
      page: 1
    }
  }
  // componentDidMount () {
  //   fetch('api/film?__t=1503653957136&page=1&count=5&sortType=1&type=1', {
  //     method: 'GET'
  //   })
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(response => {
  //     //  console.log(response.data)
  //       this.setState({
  //         data: response.data.films
  //       })
  //     })
  // }
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
   // this.hotClick()
    let myUrl = 'api/film?__t=1503715245520&page=1&count=6&sortType=1&type=1'
    this.getUrl(myUrl)
    var abc = document.getElementById('abc')
    abc.className = 'spanred'
  }
  hotClick = (e) => {
    this.setState({
      show: 'hot'
    })
    var h3Arr = document.querySelectorAll('.film_header h3 span')
    h3Arr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'spanred'
    let myUrl = 'api/film?__t=1503715245520&page=1&count=6&sortType=1&type=1'
    this.getUrl(myUrl)
  }
  willClick = (e) => {
    this.setState({
      show: 'will'
    })
    var h3Arr = document.querySelectorAll('.film_header h3 span')
    h3Arr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'spanred'
    let myUrl = 'api/film?__t=1503715245520&page=1&count=6&sortType=1&type=2'
    this.getUrl(myUrl)
  }
  pageBtn = (e) => {
    if (e.target.innerHTML >= 3 && e.target.innerHTML <= 50) {
      var pageLiA = Number(e.target.innerHTML) - 2
      document.getElementById('pageLiA').innerHTML = pageLiA
      var pageLiB = Number(e.target.innerHTML) - 1
      document.getElementById('pageLiB').innerHTML = pageLiB
      var pageLiC = Number(e.target.innerHTML)
      document.getElementById('pageLiC').innerHTML = pageLiC
      var pageLiD = Number(e.target.innerHTML) + 1
      document.getElementById('pageLiD').innerHTML = pageLiD
      var pageLiE = Number(e.target.innerHTML) + 2
      document.getElementById('pageLiE').innerHTML = pageLiE
      this.setState({
        pagenum: Number(e.target.innerHTML)
      })
    }
    document.getElementById('pageLiC').className = 'lired'
    // e.target.className = 'lired'
    // console.log(e.target.innerHTML)
    if (this.state.show === 'hot') {
      let myUrl = 'api/film?__t=1503715245520&page=' + e.target.innerHTML + '&count=6&sortType=1&type=1'
      this.getUrl(myUrl)
    }
    if (this.state.show === 'will') {
      let myUrl2 = 'api/film?__t=1503715245520&page=' + e.target.innerHTML + '&count=6&sortType=1&type=2'
      this.getUrl(myUrl2)
    }
  }
  preClick = (e) => {
    var pageLiA = Number(this.state.pagenum) - 2
    document.getElementById('pageLiA').innerHTML = pageLiA
    var pageLiB = Number(this.state.pagenum) - 1
    document.getElementById('pageLiB').innerHTML = pageLiB
    var pageLiC = Number(this.state.pagenum)
    document.getElementById('pageLiC').innerHTML = pageLiC
    var pageLiD = Number(this.state.pagenum) + 1
    document.getElementById('pageLiD').innerHTML = pageLiD
    var pageLiE = Number(this.state.pagenum) + 2
    document.getElementById('pageLiE').innerHTML = pageLiE
    this.setState({
      pagenum: this.state.pagenum - 1
    }, () => {
      if (this.state.show === 'hot') {
        let myUrl = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=1&type=1'
        this.getUrl(myUrl)
        if (this.state.pagenum <= 0) {
          this.setState({
            pagenum: 1
          })
        }
      }
      if (this.state.show === 'will') {
        let myUrl2 = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=1&type=2'
        this.getUrl(myUrl2)
        if (this.state.pagenum <= 0) {
          this.setState({
            pagenum: 1
          })
        }
      }
    })
  }
  nextClick = (e) => {
    var pageLiA = Number(this.state.pagenum) - 2
    document.getElementById('pageLiA').innerHTML = pageLiA
    var pageLiB = Number(this.state.pagenum) - 1
    document.getElementById('pageLiB').innerHTML = pageLiB
    var pageLiC = Number(this.state.pagenum)
    document.getElementById('pageLiC').innerHTML = pageLiC
    var pageLiD = Number(this.state.pagenum) + 1
    document.getElementById('pageLiD').innerHTML = pageLiD
    var pageLiE = Number(this.state.pagenum) + 2
    document.getElementById('pageLiE').innerHTML = pageLiE
    if (this.state.show === 'hot') {
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
    if (this.state.show === 'will') {
      let myUrl = 'api/film?__t=1503715245520&page=' + (this.state.pagenum + 1) + '&count=6&sortType=1&type=2'
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
                let myUrl = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=1&type=2'
                this.getUrl(myUrl)
              })
            }
          })
    }
  }
  render () {
    const dataArr = this.state.data.map(function (item, index) {
      return (
        <li key={index.toString()} className='film_li'>
          <div className='film_img'>
            <img src={item.poster.origin} />
          </div>
          <div className='film_text'>
            <h4>{item.name}</h4>
            <p>{item.grade}</p>
            <span>[{item.intro}]</span>
            <ul>
              <li>
                <label>导演: </label>
                <span>{item.director}</span>
              </li>
              <li>
                <label>主演: </label>
                <span> {item.actors.map(function (item1) {
                  return <span>{item1['name']} / </span>
                })}</span>
              </li>
              <li>
                <label>类型: </label>
                <span>{item.category}</span>
              </li>
              <li>
                <label>上映: </label>
                <span>{new Date(parseInt(item.premiereAt)).toLocaleString().slice(0, 10)}</span>
              </li>
            </ul>
            <div className='film_tags'>
              <span>{item.item.name}</span>
              <span>{item.nation}/{item.language}</span>
              <span>{item.runtime}分钟</span>
            </div>
          </div>
          <button className='film_btn'>
            影片详情
          </button>
        </li>
      //  <p key={index.toString()}>{item['name']}</p>
      )
    })
   // console.log(this.state.data.films)
    return (
      <div className='film'>
        <div className='film_left'>
          <div className='film_header'>
            <h3>
              <span id='abc' onClick={this.hotClick}>正在热映</span>
              /
              <span onClick={this.willClick}>即将上映</span>
            </h3>
            <div className='film_order'>
              <ul>
                <li>热映场次</li>
                <li>上映日期</li>
                <li>评分↓</li>
              </ul>
            </div>
          </div>
          <div className='film_body'>
            <ul>
              {dataArr}
            </ul>
          </div>
          <div className='film_page'>
            <i className='film_page_pre' onClick={this.preClick}>上一页</i>
            <div>
              <ul>
                <li id='pageLiA' onClick={this.pageBtn}>1</li>
                <li id='pageLiB' onClick={this.pageBtn}>2</li>
                <li id='pageLiC' onClick={this.pageBtn}>3</li>
                <li id='pageLiD' onClick={this.pageBtn}>4</li>
                <li id='pageLiE' onClick={this.pageBtn}>5</li>
              </ul>
            </div>
            <i className='film_page_next' onClick={this.nextClick}>下一页</i>
          </div>
        </div>
        <div className='film_right'>
          <FilmHotActive />
        </div>
      </div>
    )
  }
}

export default Film
