import React from 'react'
import Child3 from '@/views/test/component/Child3'


function Combine(props) {
  return (
    <div>
      <div>头部</div>
      {props.children}
      <div>底部</div>
    </div>
  )
}

// 无状态(state)组件，纯组合
class TestCombine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      {/*组合，实现组件复用*/}
      <Combine>
        <Child3 />
        <h1>child-4</h1>
      </Combine>
      <hr/>
      {/*组合，实现组件复用*/}
      <Combine>
        <h1>child-5</h1>
      </Combine>
      </div>
    )
  }
}


export default TestCombine
