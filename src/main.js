import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.js'

ReactDOM.render(<App />, document.getElementById('app'))

if(module.hot) {
  module.hot.accept('./App.js', function() {
    const NewApp = require('./App.js').default
    ReactDOM.render(<App />, document.getElementById('app'))
    // console.log('module.hot', module.hot)
    console.log('App发生了更新')
  })
}
