import './App.css'
import { useState } from 'react';

function App() {

  let [counter,setCounter] = useState(15,)
  const addValue = ()=>{
    console.log("value added",Math.random());
    setCounter(counter+1);
    
  }

   const removeValue = ()=>{
    setCounter(counter-1);
    
  }
  return (
    <>
    <h1>Learning the importance of Hooks</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br></br>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
