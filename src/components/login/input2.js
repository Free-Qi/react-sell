/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
class Input2 extends Component {
  render () {
    return (
      <div id='input1'>
        <div className='bor'>
          <input type='text' className='input1' placeholder='输入手机号或邮箱号' />
        </div>
        <div className='bor'>
          <input type='password' className='input1' placeholder='输入密码' />
        </div>
      </div>
    )
  }
}
export default Input2
