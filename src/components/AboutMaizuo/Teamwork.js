/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/about/teamwork.styl'

class Teamwork extends Component {
  render () {
    return (
      <div id='about'>
        <div id='about-nav-title'>
          <ul id='about-ul'>
            <li><a href='about.html'>关于卖座</a></li>
            <li><a href='contact.html'>联系我们</a></li>
            <li><a href='business.html'>商务合作</a></li>
            <li><a href='teamwork.html'>合作伙伴</a></li>
            <li><a href=''>诚聘英才</a></li>
            <li><a href=''>使用帮助</a></li>
            <li><a href=''>退票服务</a></li>
            <li><a href=''>服务条款</a></li>
            <li><a href=''>社区管理</a></li>
          </ul>
        </div>
        <div id='teamwork-right-content'>
          <h1>合作伙伴</h1>
          <div>
            <img src={require('../../assets/images/footer-link/tm1.png')} alt='' className='tm-img' />
            <img src={require('../../assets/images/footer-link/tm2.png')} alt='' className='tm-img' />
            <img src={require('../../assets/images/footer-link/tm3.png')} alt='' className='tm-img' />
            <img src={require('../../assets/images/footer-link/tm4.png')} alt='' className='tm-img' />
            <img src={require('../../assets/images/footer-link/tm5.png')} alt='' className='tm-img' />
            <img src={require('../../assets/images/footer-link/tm6.png')} alt='' className='tm-img' />
            <img src={require('../../assets/images/footer-link/tm7.png')} alt='' className='tm-img' />
          </div>
        </div>
      </div>
    )
  }
}

export default Teamwork
