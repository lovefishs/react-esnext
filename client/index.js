import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'

import Comments from 'components/Comments/Comments'

ReactDOM.render(
  <Comments />,
  document.getElementById('root')
)

;(function () {
  document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault()

    console.log('DOMContentLoaded')
  })
})()
