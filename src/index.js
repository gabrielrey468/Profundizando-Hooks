import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';


//import { FormHook } from './components/02-useEffect/FormHook';
//import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { HookApp } from './HookApp'
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterHook } from './components/01-useState/CounterHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
//import { MemoHook } from './components/06-memos/MemoHook';
//import { CallbackHook } from './components/06-memos/CallbackHook';
//import { Padre } from './components/07-Tarea-memorize/Padre';
//import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';


const container = document.getElementById('root')
const root = createRoot(container); 
root.render( 
    <Router><MainApp /> </Router>)
  
