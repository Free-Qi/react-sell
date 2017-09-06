/**
 * Created by dllo on 17/9/6.
 */
import React, {Component} from 'react'
import Nav from '../../../components/web-nav/nav'
import MaizuoPass from '../../../components/MaizuoLogged/maizuopass/maizuopass'
import Footer from '../../../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MaizuoPass />
        <Footer />
      </div>
    )
  }
}

export default App