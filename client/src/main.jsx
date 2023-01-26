import React from 'react'
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TransactionProvider } from '../context/Transaction-Context'
ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </TransactionProvider>,
)
