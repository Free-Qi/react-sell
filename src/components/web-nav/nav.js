/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import img3up from '../../assets/Allimg/otherImg/倒三角灰色.png'
class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sanjiao: 1,
      dis: 'none'
    }
  }
  mouseover=() => {
    this.setState({
      sanjiao: 2,
      dis: 'block'
    })
  }
  mouseout=() => {
    this.setState({
      sanjiao: 1,
      dis: 'none'
    })
  }
  render() {
    return (
      <div id='web-nav'>
        <div className='container'>
          <a href=''><div id='web-logo'>.</div></a>
          <div id='city' onMouseOver={this.mouseover} onMouseOut={this.mouseout}>
            杭州
            <img src={img3up} alt='' />
            <div id="allCity" className="bigborder" style={{display: this.state.dis}}>.</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Nav
