
import { useEffect, useRef, useState } from 'react'

import { useCallback } from 'react';

function App() {

  const[length,setLength]= useState(8);
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [cartAllowed, setCartAllowed]=useState(false);
  const [password,setPassword ]=useState("")
  const passwordRef= useRef(null)
  const passGenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(cartAllowed) str +="!@#$%^&*()"

    for (let i=1;i<=length;i++){
      let char= Math.floor(Math.random() * str.length+1)

      pass+=str.charAt(char) 
    }

    setPassword(pass)
  } , [length,numberAllowed,cartAllowed,setPassword])

  const copyPassword= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,60)
    window.navigator.clipboard.writeText(password)},[password] )
  
 useEffect(()=>{passGenerator()},[length, numberAllowed,cartAllowed, passGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 h-60'>
  <h1 className='text-white text-center'>Generator</h1>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input 
      type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      ref={passwordRef}
    />
    <button onClick={copyPassword}
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
       <input type="range"
       min={6}
       max={100}
       value={length}
       className='cursor-pointer'
       onChange={(e)=>{setLength(e.target.value)}} />

       <label>Length:{length}</label>

    </div>

    <div className='flex items-center gap-x-1'>
    <input type="checkbox"
       defaultChecked={numberAllowed}
       id='numberInput'
       value={length}
       
       onChange={()=>{setNumberAllowed((prev)=>!prev)}} /> 
       <label>Number</label>
    </div>

    <div className='flex items-center gap-x-1'>
    <input type="checkbox"
       defaultChecked={cartAllowed}
       id='characterInput'
       
       
       onChange={()=>{setNumberAllowed((prev)=>!prev)}} /> 
       <label>Character</label>
    </div>


  </div>
</div>
          </>
  )
}

export default App
