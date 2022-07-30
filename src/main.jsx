import React from 'react'
import ReactDOM from 'react-dom/client'
import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>
)
