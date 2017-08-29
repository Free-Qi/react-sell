/**
 * Created by dllo on 17/8/28.
 */
import React, { Component } from 'react'
import '../../assets/about/business.styl'

class Business extends Component {
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
        <div id='business-right-content'>
          <h1>商务合作</h1>
          <div id='business-left-title'>
            <p className='business-title-teamwork'>
              商务、营销、广告合作
            </p>
            <p className='business-title-content'>电话:0755-26971933</p>
            <p className='business-title-content'>邮箱:Vae#maizuo.com(#请用@替代)</p>
            <div className='business-title-teamwork'>
              电影营销合作
            </div>
            <p className='business-title-content'>电话:0755-26009644</p>
            <p className='business-title-content'>邮箱:Pang#maizuo.com(#请用@替代)</p>
            <p className='business-title-teamwork'>新媒体 (微信/微博) 合作</p>
            <p className='business-title-content'>QQ:2696474864</p>
            <p className='business-title-content'>邮箱:yy#maizuo.com(#请用@替代)</p>
            <p className='business-title-teamwork'>线下资源合作</p>
            <p className='business-title-content'>QQ:983069039</p>
            <p className='business-title-content'>邮箱:mikexiang#maizuo.com(#请用@替代)</p>
          </div>
          <div id='business-right-title'>
            <p className='business-title-teamwork'>影院合作</p>
            <p className='business-title-content'>深圳站:</p>
            <p className='business-title-content'>电话:0755-26971933</p>
            <p className='business-title-content'>邮箱:Vae#maizuo.com(#请用@替代)</p>
            <p className='business-title-location'>广州站:</p>
            <p className='business-title-content'>电话:020-38200507</p>
            <p className='business-title-content'>邮箱:Jeb#maizuo.com(#请用@替代)</p>
            <p className='business-title-location'>佛山站:</p>
            <p className='business-title-content'>电话:0757--82500640</p>
            <p className='business-title-content'>邮箱:Safin#maizuo.com(#请用@替代)</p>
            <p className='business-title-location'>区域代理合作 (除广州、深圳、佛山之外的城市)</p>
            <p className='business-title-content'>电话:0755-26939217</p>
            <p className='business-title-content'>邮箱:Vae#maizuo.com(#请用@替代)</p>
          </div>
          <div id='business-img'>
            <img src={require('../../assets/images/footer-link/business.png')} alt='' />
          </div>
        </div>
      </div>
    )
  }
}

export default Business
