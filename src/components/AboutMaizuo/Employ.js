/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/about/employ.styl'

class Employ extends Component {
  render() {
    return (
      <div id="about">
        <div id='about-nav-title'>
          <ul id='about-ul'>
            <li><a href='about.html'>关于卖座</a></li>
            <li><a href='contact.html'>联系我们</a></li>
            <li><a href='business.html'>商务合作</a></li>
            <li><a href='teamwork.html'>合作伙伴</a></li>
            <li><a href='sincere.html'>诚聘英才</a></li>
            <li><a href='employ.html'>使用帮助</a></li>
            <li><a href='refund.html'>退票服务</a></li>
            <li><a href='clause.html'>服务条款</a></li>
            <li><a href='community.html'>社区管理</a></li>
          </ul>
        </div>
        <div id="employ-right-content">
          <h1>使用帮助</h1>
          <p className="employ-title">一、什么是卖座卡</p>
          <p className="employ-content">卖座卡是卖座网的金牌产品，是作为员工福利、赠送客户和回馈会员的理想选择，方便实用，服务尊享。
            适用于卖座网平台上可预订及支付的项目，包含电影票、影院小食、电影周边。</p>
          <p className="employ-title">二、卖座卡可不可以延期?</p>
          <p className="employ-content">卖座卡背面是印有有效期的，只能在有效期内使用 ，根据购卡协议目前暂不支持延期。</p>
          <p className="employ-title">三、我购买了你们的通兑电子票,请问有效期是多久?</p>
          <p className="employ-content">有效期根据影城不同，有效期也不同，一般是60-90天，购票时都有写明有效期，购票成功后短信也有说明。</p>
          <p className="employ-title">四、我买了某影城的订座票，但是临时有事不能去看可以退吗？</p>
          <p className="employ-content">详情请见「退票服务」。</p>
          <p className="employ-title">五、想在你们官网购买5张卖座卡，请问可以开发票吗？</p>
          <p className="employ-content">可以的，麻烦您在收货地址后面写上发票抬头即可。</p>
          <p className="employ-title">六、我有一张卖座网面额为100元的电影卡，请问可以去哪些影城使用？</p>
          <p className="employ-content">在全国范围内，只要跟卖座网有合作的影城都可以使用。</p>
          <p className="employ-title">七、我购买了一张某影城的通兑票，请问可以在线订座吗？</p>
          <p className="employ-content">通兑票是需要凭短信取票码到影城前台兑换的，不支持网上订座。</p>
          <p className="employ-title">八、我购买了某家影城的通兑票，没有时间去看，请问可以退掉吗？</p>
          <p className="employ-content">如果您的通兑票在有效期内未使用兑换，可以通过卖座电影APP进行自助退款。</p>
          <p className="employ-title">九、公司刚发的卡，找不到了，请问怎么办？</p>
          <p className="employ-content">建议您第一时间联系卖座客服4001808400进行挂失，避免资金流失。</p>
        </div>
      </div>
    )
  }
}

export default Employ