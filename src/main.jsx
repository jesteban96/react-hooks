import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { Main } from './09-useContext/Main'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
// import { MemorizeHook } from './06-memos/MemorizeHook'
// import { MultipleCustomHooks } from './03-expample/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layaut } from './05-useLayautEffect/Layaut'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </React.StrictMode>
)
