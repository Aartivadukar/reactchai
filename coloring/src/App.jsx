import { useState } from "react"


function App() {
  const [color , setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor : color}}>
     <br></br>
        <div className="flexed flex flex-wrap justify-center bottom-10 inset-x- 15 px-12">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"black"}}>black</button>
        <button onClick={()=>setColor ("blue")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"blue"}}>blue</button>

        </div>
        </div>
      </div>
   

  )
}

export default App
