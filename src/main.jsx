import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../public/css/bootstrap.min.css'
import '../public/css/site.css'
import { Provider } from 'react-redux';
import { store } from "./stores/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
