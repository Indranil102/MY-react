
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor]= useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2'>
        <div onClick={()=>setColor('red')} className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg'><button className='outline-none px-4 py-1 rounded-ful text-white shadow-sm' style={{backgroundColor:'red'}}> red
          </button>
          <button onClick={()=>setColor('green')}
           className='outline-none px-4 py-1 rounded-ful text-white shadow-sm' style={{backgroundColor:'green'}}> red
          </button>
          <button onClick={()=>setColor('blue')}className='outline-none px-4 py-1 rounded-ful text-white shadow-sm' style={{backgroundColor:'blue'}}> red
          </button>
          <button onClick={()=>setColor('pink')}
          className='outline-none px-4 py-1 rounded-ful text-white shadow-sm' style={{backgroundColor:'pink'}}> red
          </button>
          <button onClick={()=>setColor('black')}
           className='outline-none px-4 py-1 rounded-ful text-white shadow-sm' style={{backgroundColor:'black'}}> red
          </button>
          </div>
      </div>
     </div>
    </>
  )
}

export default App
