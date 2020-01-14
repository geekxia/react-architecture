import React from 'react'
// 相对路径
import './style.scss'
// 绝对路径
import logoPng from '@/assets/image/logo.png'
console.log('logo png', logoPng)

export default class Logo extends React.Component {
  render() {
    return (
      <div className='com-logo'>
        { /* 注释 */}
        <img src={logoPng} alt="1917"/>
      </div>
    )
  }
}
