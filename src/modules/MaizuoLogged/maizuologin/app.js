/**
 * Created by dllo on 17/9/6.
 */
import React, {Component} from 'react'
import Nav from '../../../components/web-nav/nav'
import MaizuoLogin from '../../../components/MaizuoLogged/maizuologin/maizuologin'
import Footer from '../../../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MaizuoLogin />
        <Footer />
      </div>
    )
  }
}

export default App