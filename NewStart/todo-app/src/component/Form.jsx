
import { useState } from "react"
const Form = ({todos, setTodos}) => {
   // const [data, setData]= useState("");
    const [data, setData] = useState({name:"", done:false});
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,data]);
        setData({name:"", done:false})

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setData({name:e.target.value,done: false})} type="text" value={data.name}/>
        <button  type="submit">Add</button>
      </form>
    </div>
  )
}

export default Form
