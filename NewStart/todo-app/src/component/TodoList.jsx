
import TodoItem from './TodoItem'
const TodoList = ({todos, setTodos}) => {
  return (
    <div>

       {todos.map((item)=>(
        <TodoItem key={item.name} item={item} todo={todos} setTodos={setTodos}/>

      ))}
    </div>
  )
}

export default TodoList
