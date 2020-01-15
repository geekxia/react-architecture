import React from 'react'
// import Layout from '@/components/layout/Layout'
// import TestJsx from '@/views/test/TestJsx'
// import TestProps from '@/views/test/TestProps'
import TestLifecycle from '@/views/test/TestLifecycle'

// 第一个react组件
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '1111'
    }
  }
  click() {
    this.setState({msg: '2222'})
  }
  // render定义了组件的DOM结构，使用JSX语法
  render() {
    return (
      <div>
        <button onClick={this.click.bind(this)}>改变props传值</button>
        <TestLifecycle msg={this.state.msg} />
      </div>
    )
  }
}

export default App
