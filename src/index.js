import '@babel/polyfill'
import * as React from 'react'
import { render } from 'react-dom'
import ToggleImage from './components/ToggleImage'

import(/* webpackChunkName: 'ToggleImage' */ './components/ToggleImage')
 .then(({ default: ToggleImage }) => 
 render(<ToggleImage />, 
 document.getElementById('root'))
)
