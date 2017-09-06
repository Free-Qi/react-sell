/**
 * Created by dllo on 17/9/5.
 */
import React, {Component} from 'react'
import Nav from '../../../components/web-nav/nav'
import MaizuoPhone from '../../../components/MaizuoLogged/maizuophone/maizuophone'
import Footer from '../../../components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MaizuoPhone />
        <Footer />
      </div>
    )
  }
}

export default App