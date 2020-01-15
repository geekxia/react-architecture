import React from 'react'
import Child from './Child'

class TestProps extends React.Component {
  // 构造器函数，此函数在类实例化时被调用
  constructor(props) {
    // 调用父类的构造器
    super(props)
    // this.clickHandle = this.clickHandle.bind(this)
  }


  // 绑事件，onEventName={}
  // bind方式绑定事件，事件对象永远是最后一参数
  clickHandle1(arg1, arg2, e) {
    // e.preventDefault()
    // e.stopPropagation()
    console.log('over')
    console.log(this)
    console.log(arg1, arg2)
    console.log('e', e)
  }
  // 箭头函数绑定事件，事件对象需要显示地传递，顺序无所谓
  clickHandle2(arg1, e) {
    // console.log('over')
    // console.log(this)
    console.log('e', e)
    console.log(arg1)
  }

  hello(msg) {
    console.log('父组件', msg)
  }

  render() {
    return (
      <div>
        <h1>测试props</h1>
        <button onClick={this.clickHandle1.bind(this, '123', '456')}>点击</button>
        <button onClick={(e)=>this.clickHandle2('abc', e)}>点击</button>
        <hr/>

        {/*父组件向子组件传值，传自定义事件*/}
        <Child msg='hello child' hello={this.hello.bind(this)} />
      </div>
    )
  }
}

export default TestProps
