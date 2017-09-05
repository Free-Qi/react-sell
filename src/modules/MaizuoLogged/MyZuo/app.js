/**
 * Created by dllo on 17/9/5.
 */
import React, {Component} from 'react'
import Nav from '../../../components/web-nav/nav'
import MyMaizuo from '../../../components/MaizuoLogged/mymaizuo/MyMaizuo'
import Footer from '../../../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MyMaizuo />
        <Footer />
      </div>
    )
  }
}

export default App