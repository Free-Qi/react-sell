import React, {Component} from 'react'
import '../../assets/styles/Film.styl'
import RigthActive from '../rightActive/RightActive'

class Film extends Component {
  render () {
    return (
      <div>
        <h1>这里是影片页面的body部分</h1>
        <RigthActive />
      </div>
    )
  }
}

export default Film
