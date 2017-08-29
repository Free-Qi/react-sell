/**
 * Created by dllo on 17/8/28.
 */
import React, { Component } from 'react'
import '../../assets/about/contact.styl'

class Contact extends Component {
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
        <div id='contact-right-content'>
          <h1>联系我们</h1>
          <p className='contact-method'><span>深圳市华宇讯科技有限公司</span></p>
          <p className='contact-method'><span>地址：深圳市南山区高新科技园中区科苑路15号科兴科学园B栋3单元1601</span></p>
          <p className='contact-method'><span>电话：0755-26971933</span></p>
          <p className='contact-method'><span>邮编：518055</span></p>
          <div id='contact-img'>
            <img src={require('../../assets/images/footer-link/contact.png')} alt='' />
          </div>
          <p className='contact-title'>客服热线</p>
          <p className='contact-content'>若您在网络购票中出现任何问题，敬请垂询:</p>
          <p className='contact-clientele'>个人客户</p>
          <p className='contact-content'>电话:400-1808-400</p>
          <p className='contact-content'>客服QQ:4001808400</p>
          <p className='contact-content'>工作时间：周日至周四 ：09:00-22:00 ，周五至周六：09:00-22:30</p>
          <p className='contact-clientele'>团体客户</p>
          <p className='contact-content'>电话:0755-26009644</p>
          <p className='contact-content'>客服邮箱：kf#maizuo.com(#请用@替代)</p>
          <p className='contact-content'>服务时间:周一至周五 9:30至17:30</p>
          <p className='contact-title'>福利及营销奖品 团体采购</p>
          <p className='contact-content'>若您的公司或机构希望批量采购电影票电子兑换券，正版电影周边，或储值卡产品，欢迎联系：</p>
          <p className='contact-content'>电话：0755-26971933-8092</p>
          <p className='contact-content'>邮箱：Lais#maizuo.com(#请用@替代)</p>
        </div>
      </div>
    )
  }
}

export default Contact
