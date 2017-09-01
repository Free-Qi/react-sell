/**
 * Created by dllo on 17/9/1.
 */
import React, {Component} from 'react'
import '../../assets/styles/movie-theatre2.styl'

class MovieTheatreTwo extends Component {
  render() {
    return (
      <div>
        <div id="movie-theatre-introduce">
          <div id="movie-theatre-data">
            <p>日期:</p>
            <div id="movie-theatre-data1" onClick={this.click}>星期一</div>
            <div id="movie-theatre-data2" onClick={this.clicks}>星期二</div>
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
                <p>导演:</p>
                <p>主演:</p>
                <p>类型:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieTheatreTwo
