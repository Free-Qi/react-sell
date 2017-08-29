/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/styles/home.styl'
class HotActive extends Component {
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
          <div id='hotActive-right'>
            <div id='hotActive-left-header'>
              <h2>买座卡购买</h2>
            </div>
            <div id='hotActive-right-body'>
              <a href=''>
                <div id='hotActive-right-body-img'>
                  <img src={require('../../assets/Allimg/otherImg/卖座卡.jpg')} alt='' />
                </div>
                <div id='hotActive-right-body-text'>卖座卡</div>
              </a>
            </div>
          </div>
          <div className='clearboth'>&nbsp;</div>
        </div>
      </div>
    )
  }
}
export default HotActive
