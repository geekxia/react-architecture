import React, { Component } from 'react'
import HelloJsx from './HelloJsx'

// JSX是一个变量，是一个对象 => 最终被 React.createElement() 转化成浏览器能够运行的 React元素或React组件
// const hello = 'hello react'
// const bol = true

// 可以在JSX对象中使用变量
// 在JSX中，可以使用表达式
// 在JSX中，可以使用函数（返回值要求是JSX对象）
// 在JSX中，可以嵌套react元素（组件）
// const com = <div><h1>{bol ? "1111" : "00000"}</h1></div>


class TestJsx extends Component {

  componentDidMount() {
    console.log('this props', this.props)
  }

  click() {
    console.log('父组件')
  }

  skip() {
    let num = Math.random()
    // 路由跳转
    this.props.history.push('/combine/'+num)
  }

  toggle(flag) {
    let com = null
    if (flag) {
      com = <div>000000</div>
    } else {
      com = <div>111111</div>
    }
    return com
  }

  render() {
    const bol = true

    return (
      <div>
      {
        this.toggle(bol)
      }
      { /*父组件向子组件传值，传自定义事件*/ }
      <HelloJsx title='你好' click={this.click} />
      <button onClick={this.skip.bind(this)}>跳转至"组件复用"页面</button>
      </div>
    )
  }
}

export default TestJsx
