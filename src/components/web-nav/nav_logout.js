import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import '../../assets/styles/nav.styl'
class NavLogout extends Component {
  static propTypes = {
    username: React.PropTypes.string
  }
  render () {
    return (
      <div>
        <a href='logged.html'><div id='nav-login'>{this.props.username}</div></a>
        <a href='#'> <div id='nav-sign'>退出</div></a>
      </div>
    )
  }
}
export default NavLogout
