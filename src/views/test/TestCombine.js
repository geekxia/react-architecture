import React from 'react'

// 无状态(state)组件，纯组合
class TestCombine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>测试组合</h1>
        {/*渲染子组件和JSX对象*/}
        {this.props.children}
      </div>
    )
  }
}


export default TestCombine
