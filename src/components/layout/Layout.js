import React from 'react'
// 使用sass解决react样式全局性的问题
// 类名，必须使用 className
import './style.scss'
import Logo from '../logo/Logo'
import router from '@/views'
import { NavLink, Route, Switch } from 'react-router-dom'
import { Icon } from 'antd'

export default class Layout extends React.Component {
  createNavs() {
    let res = []
    router.map(ele=>{
      res.push(
        <div key={ele.id} className="nav">
          <Icon type="home" />
          <NavLink to={ele.path} activeClassName="on">{ele.text}</NavLink>
        </div>
      )
    })
    return res
  }
  createRoutes() {
    let res = []
    router.map(ele=>{
      res.push(
        <Route key={ele.id} path={ele.path} component={ele.component} />
      )
    })
    return res
  }
  render() {
    return (
      <div className='layout'>
        <div className='aside'>
          <Logo />
          <div>
          { this.createNavs() }
          </div>
        </div>
        <div className='header'></div>
        <div className='main'>
          <div>
            <Switch>
            { this.createRoutes() }
            </Switch>

          </div>
        </div>
      </div>
    )
  }
}
