import React from 'react'
// 使用sass解决react样式全局性的问题
// 类名，必须使用 className
import './style.scss'
import Logo from '../logo/Logo'

export default class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        <div className='aside'>
          <Logo />
        </div>
        <div className='header'></div>
        <div className='main'></div>
      </div>
    )
  }
}
