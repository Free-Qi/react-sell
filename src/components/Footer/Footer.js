
import React, {Component} from 'react'
import '../../assets/styles/Footer.styl'

class Footer extends Component {
  render () {
    return (
      <div id='Footer'>
        <div className='Footer_park1'>
          <h2><img src={require('../../assets/images/Footer_img/footer_img1.png')} />电影订座 就上卖座</h2>
          <div className='contact'>
            <img src={require('../../assets/images/Footer_img/footer_img2.png')} />
            <span>电话: </span>
            <span className='tel'>400-1808-400</span>
            <span> 周日-周四：9:00-22:00  周五-周六：9:00-22:30 </span>
          </div>
          <div className='externalLinks'>
            <div><a href='http://crm2.qq.com/page/portalpage/wpa.php?uin=4001808400&aty=0&a=0&curl=&ty=1'><img src={require('../../assets/images/Footer_img/footer_img3.png')} /></a>
            </div>
            <div className='hover1'>
              <a><img src={require('../../assets/images/Footer_img/footer_img4.png')} /></a>
              <div className='Footer_hover1'>
                <img className='houver1_img' src={require('../../assets/images/Footer_img/footer_img4_hover.png')} />
                <img className='houver1_triangular' src={require('../../assets/images/Footer_img/Triangular.png')} />
                <p>扫码下载卖座电影APP</p>
              </div>
            </div>
            <div className='hover2'>
              <a>
                <img src={require('../../assets/images/Footer_img/footer_img5.png')} />
              </a>
              <div className='Footer_hover2'>
                <img className='houver1_img' src={require('../../assets/images/Footer_img/footer_img5_hover.png')} />
                <img className='houver1_triangular' src={require('../../assets/images/Footer_img/Triangular.png')} />
                <p>扫码下载卖座电影APP</p>
              </div>
            </div>
            <div>
              <a href='http://weibo.com/maizuo'>
                <img src={require('../../assets/images/Footer_img/footer_img6.png')} />
              </a>
            </div>
          </div>
        </div>
        <div className='Footer_park2'>
          4
        </div>
      </div>
    )
  }
}
export default Footer
