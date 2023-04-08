/*import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{})
  return (
    <div id="main">

    </div>
  )
}


export default App;*/
import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';

const counter=0;
const App = () => {
  
  const [state,dispatch] = useReducer(counterReducer,counter)
  return (
    <div id="main">
      <span id='counter'>{state}</span><br/>
      <button id='increment-btn' onClick={()=>dispatch("INCREMENT")}>Increment</button>
      <button id='decrement-btn' onClick={()=>dispatch("DECREMENT")}>Decrement</button>
    </div>
  )
}


export default App;

