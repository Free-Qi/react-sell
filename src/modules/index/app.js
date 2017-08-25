/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import Footer from '../../components/Footer/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    fetch('api/billboard/home', {
      method: 'GET'
    })
            .then(response => {
              return response.json()
            })
            .then(response => {
              console.log(response.data)
              this.setState({
                data: response.data.billboards
              })
            })
  }

  render () {
    const dataArr = this.state.data.map(function (item, index) {
      return (
        <p key={index.toString()}>{item['name']}</p>
      )
    })
    return (
      <div>
        <h1>这里是首页</h1>
        <a href='about.html'>关于我们</a>
        {dataArr}
        <Footer />
      </div>
    )
  }
}
export default App
