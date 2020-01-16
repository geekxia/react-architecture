import React from 'react'
import moment from 'moment'

export default class TestLifecycle extends React.Component {
  constructor(props) {
    // props父组件传递的值，或者是从类继承过来的数据
    super(props)
    // 定义组件（实例）自有的状态数据，叫做 state
    this.state = {
      msg: 'hello state',
      time: ''
    }
  }

  // 一、实例化阶段(3个钩子)

  // 该钩子函数即将过时
  UNSAFE_componentWillMount() {
    console.log('--------------- life will mount')
  }
  // render() 执行
  componentDidMount() {
    console.log('--------------- life did mount')
    // 调接口api
    // 第三方插件的实例化
    // 开启定时
    this.timer = setInterval(()=>{
      let t = Date.now()
      this.setState({
        time: moment(t).format('HH:mm:ss')
      })
    }, 1000)
  }

  // 二、存在期阶段(4个新的 + render)

  // 当父组件传递过来的props发生改变时，触发该钩子
  // 该钩子函数即将过时
  UNSAFE_componentWillReceiveProps() {
    console.log('--------------- life will recieve props')
  }

  // 控制diff运算的结果，是否同意更新渲染到真实的DOM结构上
  shouldComponentUpdate() {
    console.log('--------------- life should update 这是个开关')
    return true
  }
  // 更新前
  UNSAFE_componentWillUpdate() {
    console.log('--------------- life will update')
  }
  // // render() 执行
  // // 更新完成
  componentDidUpdate() {
    console.log('--------------- life did update')
  }

  // 三、销毁阶段(1)
  componentWillUnmount() {
    console.log('--------------- life will unmount')
    // 清除定时器
    // 清除一些比较占内存的长连接、缓存数据
    // 手动销毁定时器
    clearInterval(this.timer)
  }


  // 用于改变state中msg
  changeMsg() {
    // this.setState({}) 改变组件自有的状态
    // 当状态发生变化时，DOM同步发生变化
    this.setState({msg: 'hello world'})
  }

  render() {
    console.log('------ render')
    return(
      <div>
        <h1>测试state和生命周期</h1>
        <h3>{this.state.msg}</h3>
        <h1>{this.state.time}</h1>
        <button onClick={this.changeMsg.bind(this)}>改变msg</button>
      </div>
    )
  }
}
