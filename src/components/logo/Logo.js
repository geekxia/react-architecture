import React from 'react'
// 相对路径
import './style.scss'
// 绝对路径
import logoPng from '@/assets/image/logo.png'
console.log('logo png', logoPng)

// 在react中，默认情况下，只有被Route组件所承载的React组件，其this.props里才有history/match等路由API
// 如果我们希望非Route承载的React组件中有history/match这些路由API，我们要安装`react-router`，使用它的一个高阶函数 withRouter 对当前组件进行修饰即可。
import { withRouter } from 'react-router'

class Logo extends React.Component {
  componentDidMount() {
    console.log('this.props------', this.props)
  }
  skip() {
    this.props.history.replace('/jsx')
  }
  render() {
    return (
      <div className='com-logo'>
        { /* 注释 */}
        <img onClick={this.skip.bind(this)} src={logoPng} alt="1917"/>
      </div>
    )
  }
}

// export default Logo
export default withRouter(Logo)
