/**
 * Created by dllo on 17/8/25.
 */
import React, {Component} from 'react'
import '../../assets/styles/home.styl'
import '../../assets/styles/placeTop.styl'
import SomeCircle from './someCircle'
import HotAndWill from './hotAndWill'
import Lbt from './moveimg'
import PlaceTop from '../placeTop/placeTop'
import LbtTwo from './moveimgTwo'
import HotActive from './hotActive'
import Comment from './comment'

class Home extends Component {
  static propTypes = {
    inner: React.PropTypes.string
  }
  render () {
    return (
      <div id='home-body'>
        <PlaceTop />
        <Lbt />
        <SomeCircle />
        <HotAndWill inner={this.props.inner} />
        <LbtTwo />
        <HotActive />
        <Comment />
      </div>
    )
  }
}
export default Home
