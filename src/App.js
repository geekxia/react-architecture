import React from 'react'
// import Layout from '@/components/layout/Layout'
// import TestJsx from '@/views/test/TestJsx'
// import TestProps from '@/views/test/TestProps'
// import TestLifecycle from '@/views/test/TestLifecycle'
// import TestList from '@/views/test/TestList'
// import TestForm from '@/views/test/TestForm'
// import TestState from '@/views/test/TestState'
import TestCombine from '@/views/test/TestCombine'
import Child3 from '@/views/test/component/Child3'

// 无状态组件
function App() {
  return (
    <div>
      {/*组合，实现组件复用*/}
      <TestCombine>
        <Child3 />
        <h1>child-4</h1>
      </TestCombine>
      <hr/>
      {/*组合，实现组件复用*/}
      <TestCombine>
        <h1>child-5</h1>
      </TestCombine>
    </div>
  )
}

export default App
