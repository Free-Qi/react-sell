/**
 * Created by dllo on 17/8/23.
 */
import React, {Component} from 'react'
import '../../assets/styles/App.styl'

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
        <h1>App</h1>
        <a href='about.html'>关于我们</a>
        {dataArr}
      </div>
    )
  }
}
export default App
