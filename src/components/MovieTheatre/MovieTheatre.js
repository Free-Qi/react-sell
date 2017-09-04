/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/movie-theatre.styl'
import axios from 'axios'

class MovieTheatre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      left: 0,
      data: [],
      address: '',
      logoUrl: '',
      name: '',
      telephones: '',
      filmid: '',
      filmsrc: '',
      filmname: '',
      grade: '',
      intro: '',
      director: '',
      actors: [],
      category: ''
    }
  }
  click = () => {
    const obtn1 = document.getElementById('movie-theatre-data1')
    obtn1.style.backgroundColor = 'red'
    obtn1.style.color = 'white'

    const obtn2 = document.getElementById('movie-theatre-data2')
    obtn2.style.backgroundColor = 'white'
    obtn2.style.color = 'black'
  }
  clicks = () => {
    const obtn1 = document.getElementById('movie-theatre-data1')
    obtn1.style.backgroundColor = 'white'
    obtn1.style.color = 'black'

    const obtn2 = document.getElementById('movie-theatre-data2')
    obtn2.style.backgroundColor = 'red'
    obtn2.style.color = 'white'
  }
  getmyUrl = (myurl) => {
    fetch(myurl, {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            logoUrl: response.data.cinema.logoUrl,
            name: response.data.cinema.name,
            telephones: response.data.cinema.telephones,
            address: response.data.cinema.address
          })
        })
  }
  getUrl = (url) => {
    fetch(url, {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            data: response.data.films,
            filmid: response.data.films[0].id,
            filmsrc: response.data.films[0].poster.thumbnail,
            filmname: response.data.films[0].name,
            grade: response.data.films[0].grade,
            intro: response.data.films[0].intro,
            director: response.data.films[0].director,
            actors: response.data.films[0].actors[0].name,
            category: response.data.films[0].category
          })
        })
  }
  getUrltime = (urltime) => {
    axios.defaults.withCredentials = true
    axios(urltime, {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          // this.setState({
          //   logoUrl: response.data.cinema.logoUrl,
          //   name: response.data.cinema.name,
          //   telephones: response.data.cinema.telephones,
          //   address: response.data.cinema.address
          // })
        })
  }
  filmClick = (e) => {
    this.setState({
      filmsrc: e.target.src,
      filmname: e.target.getAttribute('title'),
      grade: e.target.getAttribute('name'),
      intro: e.target.getAttribute('id'),
      director: e.target.getAttribute('value'),
      actors: e.target.getAttribute('key'),
      category: e.target.getAttribute('icon'),
      filmid: e.target.getAttribute('target')
    })
    let urltime = 'api/schedule?__t=1504342288879&cinema=' + location.search.match(/\d+/g)[0] + '&film=' + this.state.filmid + '&date='
    this.getUrltime(urltime)
  }
  RightChick = () => {
    clearInterval(this.timer)
    if (this.state.left <= -700) {
      this.timer = setInterval(() => {
        this.setState({
          left: this.state.left + 10
        }, () => {
          if (this.state.left >= 0) {
            clearInterval(this.timer)
          }
        })
      }, 1)
    } else if (this.state.left >= 0) {
      this.timer = setInterval(() => {
        this.setState({
          left: this.state.left - 10
        }, () => {
          if (this.state.left <= -700) {
            clearInterval(this.timer)
          }
        })
      }, 1)
    }
  }
  LeftChick = () => {
    clearInterval(this.timer)
    if (this.state.left > -700) {
      this.timer = setInterval(() => {
        this.setState({
          left: this.state.left - 10
        }, () => {
          if (this.state.left <= -700) {
            clearInterval(this.timer)
          }
        })
      }, 1)
    } else {
      this.timer = setInterval(() => {
        this.setState({
          left: this.state.left + 10
        }, () => {
          if (this.state.left >= 0) {
            clearInterval(this.timer)
          }
        })
      }, 1)
    }
  }
  componentDidMount () {
    let myurl = 'api/cinema/' + location.search.match(/\d+/g)[0] + '?__t=1504333652173'
    this.getmyUrl(myurl)
    let url = 'api/cinema/' + location.search.match(/\d+/g)[0] + '/film?__t=1504335994065'
    this.getUrl(url)
    let urltime = 'api/schedule?__t=1504342288879&cinema=' + location.search.match(/\d+/g)[0] + '&film=' + this.state.filmid + '&date='
    this.getUrltime(urltime)
  }
  render() {
    var arr = this.state.data.map((item, index) => {
      return (
        <div className="movie-theatre-slideshow" key={index.toString()} >
          <img src={item.poster.thumbnail} alt="" onClick={this.filmClick} title={item.name} name={item.grade}
            id={item.intro} value={item.director} key={item.actors} icon={item.category} target={item.id} />
        </div>
      )
    })
    return (
      <div>
        <div id="movie-theatre-nav">
          <div id="movie-theatre-img">
            <img src={this.state.logoUrl} alt="" />
          </div>
          <div id="movie-theatre-content">
            <h2>{this.state.name}</h2>
            <div className="movie-theatre-phone">电话:<span>{this.state.telephones}</span></div>
            <div id="movie-theatre-address">地址:<span>{this.state.address}</span></div>
          </div>
        </div>
        <div id="movie-theatre-ticket">
          <div>
            <span><a href="">在线购票</a></span>
            <span>/</span>
            <span><a href="">通兑票</a></span>
          </div>
          <p className="movie-theatre-line">&nbsp;</p>
          <div id="movie-theatre-title">
            <p>影片:</p>
            <div id="movie-theatre-poster">
              <div id="movie-theatre-poster-move" style={{left: this.state.left}}>
                {arr}
              </div>
            </div>
            <div id="movie-theatre-page-left" onClick={this.LeftChick}><img src={require('../../assets/images/MovieTheatre/left.png')} alt="" /></div>
            <div id="movie-theatre-page-right" onClick={this.RightChick}><img src={require('../../assets/images/MovieTheatre/right.png')} alt="" /></div>
          </div>
          <p className="movie-theatre-line">&nbsp;</p>
        </div>
        <div id="movie-theatre-introduce">
          <div id="movie-theatre-data">
            <p>日期:</p>
            <div id="movie-theatre-data1" onClick={this.click}>星期一</div>
            <div id="movie-theatre-data2" onClick={this.clicks}>星期二</div>
          </div>
          <div id="movie-theatre-copy">
            <div id="movie-theatre-big">
              <div id="movie-theatre-picture">
                <img src={this.state.filmsrc} alt="" />
              </div>
              <div id="movie-theatre-show">
                <p id="movie-theatre-show-title">
                  <div id="movie-theatre-show-name">{this.state.filmname}</div>
                  <div id="movie-theatre-show-score">{this.state.grade}</div>
                  <div id="movie-theatre-show-alias">
                    [
                    <span>{this.state.intro}</span>
                    ]
                  </div>
                </p>
                <p className="movie-theatre-line1">&nbsp;</p>
                <ul>
                  <li>放映时间</li>
                  <li>散场时间</li>
                  <li>语言/版本</li>
                  <li>放映厅</li>
                  <li>作为情况</li>
                  <li>票价</li>
                </ul>
                <p className="movie-theatre-line1">&nbsp;</p>
              </div>
              <div id="movie-theatre-actor">
                <p>导演:{this.state.director}</p>
                <p>主演:{this.state.actors}</p>
                <p>类型:{this.state.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieTheatre