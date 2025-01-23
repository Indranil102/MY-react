import { useState } from "react"

const Form = () => {
    const [name, setName]= useState({firstname:"", lastname:""});
    

   
  return (
    <div>
        form component <br></br>
        {name.firstname} - {name.lastname}
        <form >
            <input onChange={(e)=>setName({...name,firstname: e.target.value})} type="text" value={name.firstname} />
            <input onChange={(e)=>setName({...name , lastname:e.target.value})} type="text" value={name.lastname}/>
        </form>
      
    </div>
  )
}

export default Form
