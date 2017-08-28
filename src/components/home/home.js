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

class Home extends Component {
  render() {
    return (
      <div id='home-body'>
        <PlaceTop />
        <Lbt />
        <SomeCircle />
        <HotAndWill />
        <LbtTwo />
      </div>
    )
  }
}
export default Home
