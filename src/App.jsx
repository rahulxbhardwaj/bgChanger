import { useState } from 'react'
import './App.css'





export default function App() {

const [color, setColor] = useState("lightblue");
  const [heading, setHeading] = useState("white");
  const [random,setRandom] = useState("Nothing !");
  
  
function randomColor() {
  const colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
  setRandom(colorCode);
  return colorCode;
}
  
  function headingColor(){
    setHeading("white");
  }

  
  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{backgroundColor:color}}>
        
      <h1 className="text-7xl font-bold underline text-center text-white py-10"style={{color:heading}}>
      Select Color to Change Background
    </h1>
        <h1 className="text-3xl font-bold underline text-center py-10">
          If you Press the Black Button you can get 16 Million Color at Random Order
        </h1>

        <h1 className="text-3xl font-bold italic text-center py-10">
         Random Color Code : {random}
        </h1>

        <div className='fixed flex flex-wrapr justify-center items-center bottom-12 right-0 inset-x-0'>
        <div className='flex flexwrap justify-center items-center gap-2 shadow-lg bg-white py-2 rounded-xl'>
        <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg ml-3' style={{backgroundColor:"red"}} onClick={ () => {setColor("red")}}>Red</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style=      
            {{backgroundColor:"green"}} onClick={ () => {setColor("green");headingColor()}}>Green</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style= 
            {{backgroundColor:"blue"}}onClick={ () => {setColor("blue");headingColor()}}>Blue</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-3' style= 
            {{backgroundColor:"yellow" , color : "black"}}onClick={ () => {setColor("yellow");setHeading("black")}}>Yellow</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-3' style= 
          {{backgroundColor:"pink"}}onClick={ () => {setColor("pink");headingColor()}}>Pink</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-3' style= 
          {{backgroundColor:"grey"}}onClick={ () => {setColor("grey");headingColor()}}>Grey</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-3' style= 
          {{backgroundColor:"orange"}}onClick={ () => {setColor("orange");headingColor()}}>Orange</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-3' style= 
          {{backgroundColor:"purple"}}onClick={ () => {setColor("purple");headingColor()}}>Purple</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg mr-3' style= 
          {{backgroundColor:"black"}}onClick={ () => {setColor(randomColor());headingColor()}}>Random</button>
        </div>
          
        
        </div>
      </div>
   
      </>
  )
}
