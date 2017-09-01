/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/styles/twopageFilm.styl'
import RightActive from '../rightActive/RightActive'
import TwopageFilmCinema from './twopage-film-cinema'
class TwopageFilm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      left: 0,
      height: 18,
      dis: 'inline-block',
      idis: 'none',
      filename: '',
      type: '',
      nation: '',
      language: '',
      runtime: '',
      grade: '',
      intro: '',
      smallsrc: '',
      bigsrc: '',
      premiereAt: '',
      category: '',
      director: '',
      synopsis: '',
      actors: [],
      photos: []
    }
  }

  static propTypes = {
    cityID: React.PropTypes.number,
    cityName: React.PropTypes.string

  }
  moreClick = () => {
    this.setState({
      height: 80,
      dis: 'none',
      idis: 'inline-block'
    })
  }
  iClick = () => {
    this.setState({
      height: 18,
      dis: 'inline-block',
      idis: 'none'
    })
  }
  getUrl = (myUrl) => {
    fetch(myUrl, {
      method: 'GET'
    })
    .then(response => {
      return response.json()
    })
      .then(response => {
        this.setState({
          filename: response.data.film.name,
          type: response.data.film.item.name,
          nation: response.data.film.nation,
          language: response.data.film.language,
          runtime: response.data.film.runtime,
          grade: response.data.film.grade,
          intro: response.data.film.intro,
          smallsrc: response.data.film.poster.origin,
          bigsrc: response.data.film.poster.cover,
          premiereAt: new Date(response.data.film.premiereAt).toLocaleDateString(),
          category: response.data.film.category,
          director: response.data.film.director,
          synopsis: response.data.film.synopsis,
          actors: response.data.film.actors,
          photos: response.data.film.photos
        })
      }
      )
  }
  goleft = () => {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.setState({
        left: this.state.left + 10
      }, () => {
        if (this.state.left >= 1200) {
          clearInterval(this.timer)
          this.setState({
            left: 0
          })
        }
      })
    }, 1)
  }
  goright = () => {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.setState({
        left: this.state.left - 10
      }, () => {
        if (this.state.left <= -1200) {
          clearInterval(this.timer)
          this.setState({
            left: 0
          })
        }
      })
    }, 1)
  }

  componentDidMount() {
    let myUrl = '/api/film/' + location.search.match(/\d+/g)[0] + '?__t=1503994732857'
    this.getUrl(myUrl)
  }
  render() {
    let actorsArr = this.state.actors.map((item, index) => {
      return (
        <div className="actor" key={index}>
          <div className="actor-img">
            <img src={item.avatarAddress} alt="" />
          </div>
          <span className="needspan">{item.name}</span>
          <span className="needspan">饰</span>
          <span className="needspan">{item.role}</span>
        </div>
      )
    })
    let photosArr = this.state.photos.map((item, index) => {
      return (
        <div className="moveimg-one" key={index}>
          <img src={item.pictureAddress} alt="" />
        </div>
      )
    })
    return (
      <div id="twopagefilm-body">
        <div id="twopagefilm-bigimg">
          <img src={this.state.bigsrc} alt="" />
        </div>
        <div className="twopage-container">
          <div id="twopage-talk">
            <div id="twopage-talk-img">
              <img src={this.state.smallsrc} alt="" />
            </div>
            <div id="twopage-talk-right">
              <div id="twopage-talk-right-top">
                <span>&nbsp;&nbsp;{this.state.type}&nbsp;&nbsp;</span>
                <span>{this.state.nation}/{this.state.language}</span>
                <span>{this.state.runtime}分钟</span>
              </div>
              <div id="twopage-talk-right-title">
                <span className="filmName">{this.state.filename}</span>
                <span className="scroll">{this.state.grade}</span>
                <span className="intro">[&nbsp;{this.state.intro}&nbsp;]</span>
              </div>
              <div id="twopage-talk-right-body">
                <div id="twopage-talk-right-body-one">
                  <span className="label">上映时间:</span>
                  <span className="needspan">{this.state.premiereAt}</span>
                  <span className="label">类型:</span>
                  <span className="needspan">{this.state.category}</span>
                  <span className="label">导演:</span>
                  <span className="needspan">{this.state.director}</span>
                </div>
                <div id="twopage-talk-right-body-two" style={{height: this.state.height}}>
                  <span className="label">剧情:</span>
                  <span className="needspan">{this.state.synopsis}<i className="upi" style={{display: this.state.idis}} onClick={this.iClick}>收起</i></span>
                </div>
                <div id="more" onClick={this.moreClick} style={{display: this.state.dis}}>更多</div>
                <div id="twopage-talk-right-body-three">
                  <span className="label">主演:</span>
                  {actorsArr}
                </div>
              </div>
            </div>
          </div>
          <div className="place">.</div>
          <div id="moveimg-view">
            <div id="moveimg-move" style={{left: this.state.left}}>{photosArr}{photosArr}{photosArr}{photosArr}</div>
            <div id="goleft" onClick={this.goleft}>
              <img src={require('../../assets/Allimg/otherImg/左箭头.png')} alt="" />
            </div>
            <div id="goright" onClick={this.goright}>
              <img src={require('../../assets/Allimg/otherImg/右箭头.png')} alt="" />
            </div>
          </div>
          <div id="twopagefilm-bottom">
            <div id="left-cinema">
              <TwopageFilmCinema cityID={this.props.cityID} cityName={this.props.cityName} />
            </div>
            <div className="right-active">
              <RightActive />
            </div>
            <div className="clearboth">&nbsp;</div>
          </div>
          <div className="clearboth">&nbsp;</div>
        </div>
      </div>
    )
  }
}
export default TwopageFilm