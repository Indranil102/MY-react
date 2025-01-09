
import './App.css'
 import { useState } from 'react';
function App() {
 
    
  const [counter, setCounter]=useState(0);
  
  const addCounter= ()=>{
    if(counter<10)
    setCounter(counter+1)
    
    
  }
      
      const minusCounter =()=>{
        if(counter!==0)
        setCounter(counter-1)
      else{
        console.log('error')
      }
      }
 

   
  return (
    <>
      <h1>HOOKS</h1>

      <p> Counter {counter} </p>
      <button onClick={addCounter}>Add</button>
      <button onClick={minusCounter}>Sub</button>
      
          </>
  )
}

export default App
