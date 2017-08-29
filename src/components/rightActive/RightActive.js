/**
 * Created by dllo on 17/8/26.
 */
import React, {Component} from 'react'
import '../../assets/styles/right-active.styl'

class RightActive extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    fetch('/api/billboard/active?__t=1503714594557&type=2', {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response.data)
          this.setState({
            data: response.data
          })
        })
  }

  render () {
    return (
      <div id='right-active-big'>
        <h2>热门活动</h2>
        <p id='right-active-line'>&nbsp;</p>
        <div className='right-active-img' onMouseOver={this.onmouse}>
          <img src={'https://static.maizuo.com/pc/v5/manager/9a7a24a3e5d53dc7ec6cc4c2fcb7b680.jpg'} alt='' />
          <div className='right-active-mank' id='mank-one'>
              &nbsp;
          </div>
        </div>
        <p className='right-active-content'>
          <a href='http://m.maizuo.com/act/active/1008'>一元看电影</a>
          <div className='right-active-mank' id='right-active-mank1'>&nbsp;</div>
        </p>
        <div className='right-active-area' id='right-active-area1'>.</div>
        <div className='right-active-area' id='right-active-area2'>.</div>
        <div className='right-active-img' onMouseOver={this.onmouse}>
          <img src={'https://static.maizuo.com/pc/v5/manager/f04d77342fe8c4b1925d15822237e154.jpg'} alt='' />
          <div className='right-active-mank' id='mank-two'>
              &nbsp;
          </div>
        </div>
        <p className='right-active-content'>
          <a href='https://mall.maizuo.com/#!/item/pCeYKZpYDUXI'>好吃不上火</a>
          <div className='right-active-mank' id='right-active-mank2'>&nbsp;</div>
        </p>
        <div className='right-active-area' id='right-active-area3'>.</div>
        <div className='right-active-area' id='right-active-area4'>.</div>
        <div className='right-active-img' onMouseOver={this.onmouse}>
          <img src={'https://static.maizuo.com/pc/v5/manager/faa4cade61ff18b87ac746dce5859ced.jpg'} alt='' />
          <div className='right-active-mank' id='mank-three'>
              &nbsp;
          </div>
        </div>
        <p className='right-active-content'>
          <a href='https://mall.maizuo.com/#!/item/PbHhScBMRysZ'>攀枝花凯特芒</a>
          <div className='right-active-mank' id='right-active-mank3'>&nbsp;</div>
        </p>
      </div>
    )
  }
}
export default RightActive
