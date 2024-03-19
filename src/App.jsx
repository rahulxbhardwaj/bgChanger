import { useState } from 'react'
import './App.css'

export default function App() {

  const [color, setColor] = useState("olive");
  
  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{backgroundColor:color}}>
        
      <h1 className="text-7xl font-bold underline text-center text-white py-10">
      Hello world!
    </h1>

        <div className='fixed flex flex-wrapr justify-center items-center bottom-12 right-0 inset-x-0'>
        <div className='flex flexwrap justify-center items-center gap-2 shadow-lg bg-white py-2 rounded-xl'>
        <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg ml-3' style={{backgroundColor:"red"}} onClick={ () => {setColor("red")}}>Red</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style=      
            {{backgroundColor:"green"}} onClick={ () => {setColor("green")}}>Green</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style= 
            {{backgroundColor:"blue"}}onClick={ () => {setColor("blue")}}>Blue</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-3' style= 
            {{backgroundColor:"yellow"}}onClick={ () => {setColor("yellow")}}>Yellow</button>
        </div>
          
        
        </div>
      </div>
   
      </>
  )
}
