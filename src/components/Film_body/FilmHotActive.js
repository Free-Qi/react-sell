import React, {Component} from 'react'
import '../../assets/styles/FilmHotActive.styl'
class FilmHotActive extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    fetch('api/billboard/active?__t=1503881707241&type=1', {
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
  }

  render () {
    var threeArr = this.state.data.map((item, index) => {
      return (
        <div className='hotActive-left-body-one'>
          <a href={item.url}>
            <div className='hotActive-left-body-one-img'>
              <img src={item.imageUrl} alt='' />
            </div>
            <div className='hotActive-left-body-one-text'>
              {item.name}
            </div>
          </a>
        </div>
      )
    })
    return (
      <div id='hotActive'>
        <div className='home-container'>
          <div id='hotActive-left'>
            <div id='hotActive-left-header'>
              <h2>热门活动</h2>
            </div>
            <div id='hotActive-left-body'>
              {threeArr}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FilmHotActive
