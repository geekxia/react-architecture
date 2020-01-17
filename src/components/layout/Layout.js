import React from 'react'
// 使用sass解决react样式全局性的问题
// 类名，必须使用 className
import './style.scss'
import Logo from '../logo/Logo'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import routes from '@/router.js'
import { Icon } from 'antd'

export default class Layout extends React.Component {

  createRouter(type) {
    let res1 = []
    let res2 = []
    routes.map(ele=>{
      if (type == 1) {
        res1.push(
          <div key={ele.id}>
            <NavLink exact to={ele.path} activeClassName="on">
            <Icon type={ele.icon} />
            {ele.text}
            </NavLink>
          </div>
        )
      } else {
        res2.push(
          <Route key={ele.id} exact path={ele.path} component={ele.component} />
        )
      }
    })
    console.log(res2)
    return type == 1? res1 : res2
  }

  render() {
    return (
      <div className='layout'>
        <div className='aside'>
          <Logo />
          <div className='navs'>
          { this.createRouter(1) }
          </div>
        </div>
        <div className='header'>Header</div>
        <div className='main'>
          <div>
            {/*Switch必须是Route直接父组件，Route不能被其它JSX对象所包裹*/}
            <Switch>
            { this.createRouter(2) }
            </Switch>

            <Redirect from='/*' to='/jsx' />
          </div>
        </div>
      </div>
    )
  }
}
