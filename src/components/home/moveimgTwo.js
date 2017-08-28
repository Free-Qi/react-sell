/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/styles/home.styl'
class MoveimgTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      left: 0
    }
  }
  moveimg = () => {
    if (this.state.left <= -1200) {
      this.setState({
        left: 0
      })
    } else {
      this.setState({
        left: this.state.left - 1200
      })
    }
  }
  componentDidMount() {
    fetch('api/billboard/active/home?__t=1503876767517', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data.billboards
        })
      })
    this.timer = setInterval(this.moveimg, 3500)
  }
  render() {
    var moveimgArr2 = this.state.data.map(function (item, index) {
      return (
        <img src={item.imageUrl} alt="" key={index} />
      )
    })
    console.log(this.state.left)
    return (
      <div id="moveBigimg2">
        <div className="home-container">
          <div id="moveBigimg2-fix">
            <div id="moveBigimg2-move" style={{left: this.state.left}}>{moveimgArr2}{moveimgArr2}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoveimgTwo