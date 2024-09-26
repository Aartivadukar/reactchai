import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter] = useState(1);
  let counterlimit = 10;
  
  function addvalue(){
    if ( counter < counterlimit){
    console.log("value added",counter);
    counter = counter + 1 
    setcounter(counter)
    
    } else {
      alert("not add")
    }
   
   
    // console.log("value added",counter);
    // counter = counter + 1 
    // setcounter(counter)
    
  }
  function removevalue(){
    if(counter>0){
      setcounter(counter-1)
    }else{
      alert("not add - value")
    }
  }

  return (
    <>
      <div>
        <h1>aarti</h1>
        <h2>counter value: {counter}</h2>

        <button onClick={addvalue}>Add value</button>
        <br/>
        <button onClick={removevalue}>Decrease value</button>
       </div>
    </>
  )
}

export default App
