import React from 'react'
import './style.scss'

class TestList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      idx: 3,
      list: [
        { id:1, name: "第一篇文章", time: '2020'},
        { id:2, name: "第二篇文章", time: '2021'},
        { id:3, name: "第三篇文章", time: '2022'}
      ],
      style: {
        fontSize: '50px',
        fontWeight: 'bold'
      },
      color: 'red',
      count: 50
    }
  }

  // 列表渲染时，一定要加key（每个key是唯一的），其作用是用于Diff运算，这有助于性能优化
  renderList(arr) {
    let res = []
    arr.map(ele=>{
      ele.time = ele.time + '!!!!'
      res.push(
        <div key={ele.id}>
          <span>{ele.id}</span>
          <span>{ele.name}</span>
          <span>{ele.time}</span>
        </div>
      )
    })
    return res
  }

  changeClass() {
    if (this.state.color === 'red') {
      this.setState({color: 'blue'})
    } else {
      this.setState({color: 'red'})
    }
  }

  changeStyle() {
    // 深拷贝
    var style = Object.assign({}, this.state.style)
    var count = this.state.count
    count++
    style.fontSize = count+'px'
    this.setState({count: count, style: style})
  }

  render() {
    let { idx, list, show, style, color, count } = this.state

    return (
      <div>
        <h1>测试条件渲染</h1>
        { show && <h3>111111</h3> }
        { show ? <h3>2222222</h3> : <h3>33333333</h3> }

        { idx===1 && <div>aaaaa</div> }
        { idx===2 && <div>bbbbb</div> }
        { idx===3 && <div>ccccc</div> }
        { idx===4 && <div>ddddd</div> }
        <hr/>

        {
          list.map(ele => {
            return (
              <div key={ele.id}>
                <span>{ele.id}</span>
                <span>{ele.name}</span>
                <span>{ele.time}</span>
              </div>
            )
          })
        }
        <hr/>
        {
          list.map(ele => (
            <div key={ele.id}>
              <span>{ele.id}</span>
              <span>{ele.name}</span>
              <span>{ele.time}</span>
            </div>
          ))
        }
        <hr/>
        {
          this.renderList(list)
        }
        <hr/>
        {/*静态的样式，包括静态class和style*/}
        <h1 className='red' style={{'fontSize':'50px','fontWeight':'bold'}}>静态样式</h1>
        {/*动态的样式，包括动态class和style*/}

        <h1 className={color} style={style}>动态样式</h1>
        <h1 className={color} style={{fontWeight:'bold', fontSize: count+'px'}}>动态样式-计数器</h1>


        <button onClick={this.changeClass.bind(this)}>动态改变class</button>
        <button onClick={this.changeStyle.bind(this)}>动态改变style</button>
        <hr/>




      </div>
    )
  }
}

export default TestList
