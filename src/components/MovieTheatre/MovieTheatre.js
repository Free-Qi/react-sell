/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/movie-theatre.styl'

class MovieTheatre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
      left: 0,
      data: []
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
  onclick = () => {
  }
  componentDidMount () {
    fetch('api/cinema/4698/film?__t=1504138258102', {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            data: response.data.films
          })
        })
  }
  render() {
    var arr = []
    for (let i = 0; i < this.state.data.length; i++) {
      arr.push(
        <div className="movie-theatre-slideshow">
          <img src={this.state.data[i].poster.thumbnail} alt="" />
        </div>
      )
    }
    return (
      <div>
        <div id="movie-theatre-nav">
          <div id="movie-theatre-img">1</div>
          <div id="movie-theatre-content">
            <h2>电影院</h2>
            <div className="movie-theatre-phone">电话:<span>111</span></div>
            <div className="movie-theatre-phone">地址:<span>222</span></div>
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
      </div>
    )
  }
}

export default MovieTheatre