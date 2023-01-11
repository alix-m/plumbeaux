import React from 'react'
import ReactDOM from "react-dom/client"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'


import App from './content/App'

const root = ReactDOM.createRoot(
    document.getElementById('app')
  );
  root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  )
  module.hot.accept();