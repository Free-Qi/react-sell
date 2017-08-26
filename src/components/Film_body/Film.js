import React, {Component} from 'react'
import '../../assets/styles/Film.styl'

class Film extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('api/film?__t=1503653957136&page=1&count=5&sortType=1&type=1', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
      //  console.log(response.data)
        this.setState({
          data: response.data.films
        })
      })
  }
  render () {
    const arr = this.state.data
    setTimeout(function () {
      console.log(arr[0].name)
    }, 3000)
    const dataArr = this.state.data.map(function (item, index) {
      return (
        <li key={index.toString()} className='film_li'>
          <div className='film_img'>
            <img src={item.poster.origin} />
          </div>
          <div className='film_text'>
            <h4>{item.name}</h4>
            <p>{item.grade}</p>
            <span>[{item.intro}]</span>
            <ul>
              <li>
                <label>导演: </label>
                <span>{item.director}</span>
              </li>
              <li>
                <label>主演: </label>
                <span> {item.actors.map(function (item1) {
                  return <span>{item1['name']} / </span>
                })}</span>
              </li>
              <li>
                <label>类型: </label>
                <span>{item.category}</span>
              </li>
              <li>
                <label>上映: </label>
                <span>{new Date(parseInt(item.premiereAt)).toLocaleString().slice(0, 10)}</span>
              </li>
            </ul>
            <div className='film_tags'>
              <span>{item.item.name}</span>
              <span>{item.nation}/{item.language}</span>
              <span>{item.runtime}分钟</span>
            </div>
          </div>
          <button className='film_btn'>
            影片详情
          </button>
        </li>
      //  <p key={index.toString()}>{item['name']}</p>
      )
    })
   // console.log(this.state.data.films)
    return (
      <div className='film'>
        <div className='film_left'>
          <div className='film_header'>
            <h3>
              <span className='film_hot'>正在热映</span>
              /
              <span className='film_coming'>即将上映</span>
            </h3>
            <div className='film_order'>
              <ul>
                <li>热映场次</li>
                <li>上映日期</li>
                <li>评分↓</li>
              </ul>
            </div>
          </div>
          <div className='film_body'>
            <ul>
              {dataArr}
            </ul>
          </div>
          <div className='film_page'>
            <i className='film_page_pre'>上一页</i>
            <div>
              <ul>
                <li>1</li>
              </ul>
            </div>
            <i className='film_page_next'>下一页</i>
          </div>
        </div>
        <div className='film_right'>
          热门活动
        </div>
      </div>
    )
  }
}

export default Film