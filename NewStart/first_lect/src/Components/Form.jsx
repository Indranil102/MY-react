import { useState } from "react"

const Form = () => {
    const [name, setName]= useState({firstname:"", lastname:""});
  
function handleSubmit(e){
  e.preventDefault() // dont refresh the data during submit 

  console.log(name)

}

   
  return (
    <div>
        form component <br></br>
        {name.firstname} - {name.lastname}
        <form >
            <input onChange={(e)=>setName({...name,firstname: e.target.value})} type="text" value={name.firstname} />
            <input onChange={(e)=>setName({...name , lastname:e.target.value})} type="text" value={name.lastname}/>
            <br />

            <button onClick={(e)=>handleSubmit(e)}>submit</button>
        </form>
      
    </div>
  )
}

export default Form
