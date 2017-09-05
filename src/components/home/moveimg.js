/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/home.styl'

class Moveimg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      left: 0
    }
  }

  move = () => {
    if (this.state.left <= -document.documentElement.clientWidth * 4) {
      this.setState({
        left: 0
      })
    } else {
      this.setState({
        left: this.state.left - document.documentElement.clientWidth
      })
    }
  }
  componentDidMount() {
    fetch('api/billboard/home?__t=1503652095107&count=5', {
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
    this.timer = setInterval(this.move, 3500)
  }

  click1 = (e) => {
    clearInterval(this.timer)
    this.setState({
      left: 0
    })
    this.timer = setInterval(this.move, 3500)
  };
  click2 = (e) => {
    clearInterval(this.timer)
    this.setState({
      left: -document.documentElement.clientWidth
    })
    this.timer = setInterval(this.move, 3500)
  };
  click3 = (e) => {
    clearInterval(this.timer)
    this.setState({
      left: -document.documentElement.clientWidth * 2
    })

    this.timer = setInterval(this.move, 3000)
  };
  click4 = (e) => {
    clearInterval(this.timer)
    this.setState({
      left: -document.documentElement.clientWidth * 3
    })
    this.timer = setInterval(this.move, 3500)
  };
  click5 = (e) => {
    clearInterval(this.timer)
    this.setState({
      left: -document.documentElement.clientWidth * 4
    })
    this.timer = setInterval(this.move, 3500)
  };
  // click6 = (e) => {
  //   clearInterval(this.timer)
  //   this.setState({
  //     left: -document.documentElement.clientWidth * 5
  //   })
  //   this.timer = setInterval(this.move, 3500)
  // };
  render() {
    var moveimgArr = this.state.data.map((item, index) => {
      return (
        <div key={index.toString()} className="movelbt" style={{width: document.documentElement.clientWidth}}>
          <img src={item.imageUrl} alt="" />
        </div>
      )
    })
    var obj = {
      left: this.state.left,
      width: document.documentElement.clientWidth * 5,
      overflow: 'hidden'
    }
    return (
      <div id="lbt" style={{overflow: 'hidden'}}>
        <div id="moveBigimg" style={obj}>
          {moveimgArr}
        </div>
        <div id="lbt-clickall">
          <div onClick={this.click1}>&nbsp;</div>
          <div onClick={this.click2}>&nbsp;</div>
          <div onClick={this.click3}>&nbsp;</div>
          <div onClick={this.click4}>&nbsp;</div>
          <div onClick={this.click5}>&nbsp;</div>
        </div>
      </div>
    )
  }
}
export default Moveimg
