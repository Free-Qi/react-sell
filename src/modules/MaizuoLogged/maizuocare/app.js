/**
 * Created by dllo on 17/9/5.
 */
import React, {Component} from 'react'
import Nav from '../../../components/web-nav/nav'
import MaizuoCare from '../../../components/MaizuoLogged/maizuocare/maizuocare'
import Footer from '../../../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MaizuoCare />
        <Footer />
      </div>
    )
  }
}

export default App