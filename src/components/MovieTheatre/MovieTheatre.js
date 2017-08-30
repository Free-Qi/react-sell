/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/movie-theatre.styl'

class MovieTheatre extends Component {
  render() {
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
              <div id="movie-theatre-poster-move">
                1
              </div>
            </div>
            <div id="movie-theatre-page-left"><img src={require('../../assets/images/MovieTheatre/left.png')} alt="" /></div>
            <div id="movie-theatre-page-right"><img src={require('../../assets/images/MovieTheatre/right.png')} alt="" /></div>
          </div>
          <p className="movie-theatre-line">&nbsp;</p>
        </div>
        <div id="movie-theatre-introduce">
          <div id="movie-theatre-data">
            <p>日期:</p>
            <div id="movie-theatre-data1">星期一</div>
            <div id="movie-theatre-data2">星期二</div>
          </div>
          <div id="movie-theatre-copy">
            <div id="movie-theatre-big">
              <div id="movie-theatre-picture">
                <img src="" alt="" />照片
              </div>
              <div id="movie-theatre-show">
                <p id="movie-theatre-show-title">
                  <div id="movie-theatre-show-name">名字</div>
                  <div id="movie-theatre-show-score">评分</div>
                  <div id="movie-theatre-show-alias">
                    [
                     <span>别名</span>
                    ]
                  </div>
                </p>
                <p className="movie-theatre-line1">&nbsp;</p>
                <p className="movie-theatre-line1">&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieTheatre