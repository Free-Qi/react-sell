/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/about/about.styl'

class AboutMaizuo extends Component {
  render () {
    return (
      <div id='maizuo-about'>
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
        <div id='about-right-content'>
          <h1>关于卖座</h1>
          <p className='about-maizuo-content'>
            卖座网隶属于深圳市华宇讯科技有限公司 ，
            总部位于深圳，是一家集电影资讯、在线购票、用户互动社交、
            电影衍生品销售等服务的智慧电影互联网平台，提供全国超3500家影院在线选座购票服务。
            已在广州、北京、上海、深圳、成都、长沙、南京、武汉、重庆开设分公司、办事处，
            2016年在全国共设立了20多个市场服务机构。
          </p>
          <div id='about-content-img'>
            <img src={require('../../assets/images/footer-link/about-img.png')} alt='' />
          </div>
          <p className='about-maizuo-contents'>卖座网于2008年自主研发星辰电子影票系统，
            该系统具有独有的新型、便捷电影票务模式， 投入市场以来，得到了用户、合作影院的一致好评，
            市场影响力与日剧增。
          </p>
          <p className='about-maizuo-contents'>
            正是由于在影院的强大影响力、独特便捷的购票模式和极具优势的独家价格 ，卖座网积极与多方合作，
            更从2008年开始，与腾讯携手合作，共同为亿万QQ会员用户提供优质的服务。
          </p>
          <p className='about-maizuo-contents'>
            2014年， 华谊兄弟以人民币2.66亿元投资卖座网，卖座网成华谊兄弟集团控股公司，
            是当前中国最大的电影O2O服务提供商 。
          </p>
        </div>
      </div>
    )
  }
}

export default AboutMaizuo
