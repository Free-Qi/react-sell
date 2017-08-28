import React, {Component} from 'react'
import '../../assets/styles/home.styl'
import Hot from './hotAndWill-hot'
import Will from './hotAndWill-will'
class HotAndWill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 'hot',
      data: [],
      pagenum: 1
    }
  }

  hotClick = (e) => {
    this.setState({
      show: 'hot'
    })
    var h2Arr = document.querySelectorAll('#hotAndWill #hotAndWill-header #hotAndWill-header-left h2')
    h2Arr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'h2black'
  }
  willClick = (e) => {
    this.setState({
      show: 'will'
    })
    var h2Arr = document.querySelectorAll('#hotAndWill #hotAndWill-header #hotAndWill-header-left h2')
    h2Arr.forEach(function (item, index) {
      item.className = ''
    })
    e.target.className = 'h2black'
  }
  render() {
    var filmType = null
    if (this.state.show === 'hot') {
      filmType = <Hot />
    }
    if (this.state.show === 'will') {
      filmType = <Will />
    }
    return (
      <div id="hotAndWill">
        <div className="home-container">
          <div id="hotAndWill-header">
            <div id="hotAndWill-header-left">
              <h2 onClick={this.hotClick} className="h2black">正在热映</h2>
              <h2>&nbsp;&nbsp;/&nbsp;&nbsp;</h2>
              <h2 onClick={this.willClick}>即将上映</h2>
            </div>
            <div id="hotAndWill-header-right">
              <p>大连正在上映 <span style={{color: 'red'}}>33</span> 部电影&nbsp;&nbsp;&nbsp;&nbsp;<a href="film.html">更多>></a>
              </p>
            </div>
            <div className="clearboth">&nbsp;</div>
          </div>
          <div id="home-hotandwill-all">
            {filmType}
          </div>
        </div>
      </div>
    )
  }
}
export default HotAndWill