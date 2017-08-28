import React, {Component} from 'react'
import '../../assets/styles/home.styl'
class Will extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pagenum: 1
    }
  }
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
  clickleft = () => {
    this.setState({
      pagenum: this.state.pagenum - 1
    }, () => {
      let myUrl = 'api/film?__t=1503715245520&page=' + this.state.pagenum + '&count=6&sortType=1&type=2'
      this.getUrl(myUrl)
      if (this.state.pagenum <= 0) {
        this.setState({
          pagenum: 1
        })
      }
    })
  }
  clickright = () => {
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
  componentDidMount() {
    let myUrl = 'api/film?__t=1503715245520&page=1&count=6&sortType=1&type=2'
    this.getUrl(myUrl)
  }

  render() {
    const filmArr = this.state.data.map(function (item, index) {
      return (
        <div className="home-hotfilm-one" key={index.toString()}>
          <div className="home-hotfilm-one-img">
            <img src={item.poster.origin} alt='' />
          </div>
          <div className="home-hotfilm-text">
            <span className="home-hotfilm-name">{item.name}</span>
            <span className="home-hotfilm-grade">{item.grade}</span>
          </div>
        </div>
      )
    })
    return (
      <div id="home-hotandwill-in">
        <div id="hotAndWill-goleft" onClick={this.clickleft}>
          <img src={require('../../assets/Allimg/otherImg/左箭头.png')} alt="" />
        </div>
        <div id="hotAndWill-goright" onClick={this.clickright}>
          <img src={require('../../assets/Allimg/otherImg/右箭头.png')} alt="" />
        </div>
        {filmArr}
      </div>
    )
  }
}
export default Will