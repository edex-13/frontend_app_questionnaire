import React from 'react'
import ReactDom from 'react-dom'

import { App } from './routes'
console.log('index.js')
ReactDom.render(
  <App />,
  document.getElementById('root')
)
