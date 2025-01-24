
const TodoItem = ({item, todos, setTodos}) => {
  function handleDelete(item){
    console.log("i am delet", item);
    setTodos(todos.filter((todo) => todo !== item));
   
  }

  function handleClick(name){
    console.log(name)
   const newArray= todos.map((todo)=>todo.name===name ? {...todo,done:!todo.done})
    setTodos(newArray)

  }
  return (
    <div style={{display:"flex"}}>
     <span onClick={()=>handleClick(item.name)}> <h2>{item.name}</h2></span>
      <span>
        <button onClick={()=>handleDelete(item)}>X</button>
      </span>
    </div>
  )
}

export default TodoItem
