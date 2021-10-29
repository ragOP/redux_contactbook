import React from 'react'
import ReactDOM from 'react-dom'

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)