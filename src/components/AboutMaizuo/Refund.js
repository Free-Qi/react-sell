/**
 * Created by dllo on 17/8/29.
 */
import React, {Component} from 'react'
import '../../assets/about/refund.styl'

class Refund extends Component {
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
        <div id="refund-right-content">
          <h1>退票服务</h1>
          <p className="refund-title">一、卖座网仅提供因一下原因造成的用户退票:</p>
          <p className="refund-content">1. 影院为卖座网支持退票服务的影院；</p>
          <p className="refund-content">2. 所退影票不属于特殊场次的影票（特殊场次会在购票时提示）；</p>
          <p className="refund-content">3. 单个用户ID票的手机号码每个月（自然月）申请退票的订单数不超过5笔；</p>
          <p className="refund-content">4. 申请退票的影票未被取票；</p>
          <p className="refund-content">5. 因影院售票系统原因造成的用户已完成付款但订单无法生成的（即订单状态为"不成功"的）；
          </p>
          <p className="refund-content">6. 因影院原因造成的影片排片信息、场次更换而使得用户无法正常观影的；</p>
          <p className="refund-content">7. 因不可抗力或政府管制（如全国哀悼日，国家禁止娱乐活动的）造成用户无法正常观影的。</p>
          <p className="refund-title">二、用户同意以下卖座网的不予退款的条件及约定:</p>
          <p className="refund-content">1. 订购成功，以收到短信，订单状态为"成功"为准，用户一旦购买成功，是订座票这种情况的，
            卖座网不接受任何退款或换票；</p>
          <p className="refund-content">2. 卖座网或卖座网与合作方赠送的站内余额不作为退款范畴内；</p>
          <p className="refund-content">3. 卖座卡充值等不作为退款范畴内；</p>
          <p className="refund-content">4. 恶意用户及黄牛不支持退票，退票服务是为卖座网正常购票用户提供的服务，
            卖座网严禁用户恶意使用信用卡套现的行为，一经卖座网发现，卖座网有权冻结该用户账户，同时有权通报给该信用卡发卡单位；</p>
          <p className="refund-content">5. 卖座网保留部分消费卡、银行卡支付，向用户索取支付手续费或第三方合作服务费的权利；</p>
          <p className="refund-content">6. 用户遵守卖座网对退款的相关规定，并允许卖座网保留对规定更新或更改的权利。
            以上退款原则涵盖于卖座网自由渠道以及合作渠道以及第三方代理机构，卖座网保留解释权。</p>
          <p className="refund-title">三、申请退票方式</p>
          <p className="refund-content">1. 只接受用户电话退票申请，不接受其他退票申请方式；</p>
          <p className="refund-content">2. 只限购票用户本人来电申请，卖座网将核对申请用户信息；</p>
          <p className="refund-content">3. 拨打客服热线：400-1808-400，客服为您进行退票操作。</p>
        </div>
      </div>
    )
  }
}

export default Refund