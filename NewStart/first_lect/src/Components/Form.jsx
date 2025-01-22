import { useState } from "react"

const Form = () => {
    const [name, setName]= useState("");

    function handleChange(e){
        //console.log(e.target.value)
        setName(e.target.value)
    }
  return (
    <div>
        form component 
        <form >
            <input onChange={(e)=>handleChange(e)} type="text" value={name} />
        </form>
      
    </div>
  )
}

export default Form
