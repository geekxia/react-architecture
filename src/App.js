import React from 'react'
import Layout from '@/components/layout/Layout'

// 第一个react组件
class App extends React.Component {
  // render定义了组件的DOM结构，使用JSX语法
  render() {
    return (
      <div>
        <Layout />
      </div>
    )
  }
}

export default App
