import { useState } from "react"

const Counter = () => {
    const [count, setCount]=useState(0) ;
    const [increment, setIncrement]= useState(1);

    function handleClick(){
        setCount(count+increment)
    }
    function notClick(){
        setCount(count-increment)  // it is by variable
    }
    function increseIncrement(){
        setIncrement(increment+1)
    }
    function decreaseIncrement(){
        setIncrement(increment-1)
    }
  return (
    <div>
     <h1> Counter value is : {count}</h1>
     <button onClick={handleClick}>click</button>
     <button onClick={notClick}>not click</button>


     <h1>We are incrementing by value: {increment}</h1>
     <button onClick={increseIncrement}>Increment </button>
     <button onClick={decreaseIncrement}>Decrement </button>
    </div>
  )
}

export default Counter
