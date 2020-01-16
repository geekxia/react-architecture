import React from 'react'

import Child1 from './component/Child1'
import Child2 from './component/Child2'
import './style.scss'

class TestState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '1916'
    }
  }

  render() {
    return (
      <div className='state_box'>
        <div>
          <Child1 username={this.state.username} />
        </div>
        <div>
          <Child2 username={this.state.username} />
        </div>
      </div>
    )
  }
}

export default TestState
