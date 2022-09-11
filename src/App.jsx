
import './App.css';
import React, { useState } from "react";


function App(){

  const [count,setCount] = useState(0);

  const increment = ()=> {
    setCount (count +1)
  }
  
  const minus = ()=> {
    setCount (count -1)
  }

  const reset = ()=> {
    setCount (0)
  }

    return (

      <div className='App'>
        
        <h1>Мой кликер</h1> 
        <button onClick = {minus} className="mybtn" >-</button>
        <span className="myspan">{count}</span>
        <button onClick = {increment} className="mybtn" >+</button>

        <div>
          <button onClick = {reset} className="mybtn" >Сброс</button>
        </div>

      </div>
    )
  }

export {App};