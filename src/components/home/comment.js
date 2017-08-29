/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/styles/home.styl'
class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      top: 0
    }
  }

  move = () => {
    if (this.state.top <= -3120) {
      this.setState({
        top: 0
      })
    } else {
      this.setState({
        top: this.state.top - 365
      })
    }
  }

  componentDidMount() {
    fetch('api/comment?__t=1503889597033', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data.comments
        })
      })
    this.timer = setInterval(this.move, 4000)
  }

  render() {
    var commentArr = this.state.data.map(function (item, index) {
      var myDate = Date.parse(new Date())
      var truetime = myDate - item.createAt
      var day = Math.floor(truetime / 86400000)
      var hour = null
      if (day >= 1) {
        hour = day + '天前'
      }
      if (day < 1) {
        hour = Math.floor(day / 24) + '小时前'
      }
      return (
        <div className="comment-left-move-one" key={index}>
          <div className="comment-one-img">
            <img src={item.user.avatorUrl} alt="" />
          </div>
          <div className="comment-one-text">
            <span>{item.user.name}</span>
            <span>{hour}</span>
            <span>评论了电影</span>
            <span className="spanred">{item.film.name}</span><br />
            <p>{item.text}</p>
          </div>
        </div>
      )
    })
    return (
      <div id="home-comment">
        <div className="home-container">
          <div id="comment-left">
            <div id="comment-left-header">
              <h2>精彩评论</h2>
            </div>
            <div id="comment-left-fix">
              <div id="comment-left-move" style={{top: this.state.top}}>{commentArr}</div>
            </div>
          </div>
          <div id="comment-right">
            <div id="comment-right-header">
              <h2>手机购票</h2>
            </div>
            <div id="comment-right-body">
              <div className="comment-right-body-one">
                <div className="comment-right-body-one-img">
                  <img src={require('../../assets/Allimg/otherImg/官方二维码.png')} alt="" />
                </div>
                <div className="comment-right-body-one-text">
                  <div>
                    <span>扫码下载</span>
                    <p>卖座电影APP</p>
                  </div>
                </div>
              </div>
              <div className="comment-right-body-one">
                <div className="comment-right-body-one-img">
                  <img src={require('../../assets/Allimg/otherImg/微信二维码.png')} alt="" />
                </div>
                <div className="comment-right-body-one-text">
                  <div>
                    <p>扫码关注</p>
                    <p>卖座官方微信</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearboth">&nbsp;</div>
        </div>
      </div>
    )
  }
}
export default Comment