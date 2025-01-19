
import Fruits from "./Components/Fruits"
import ConditionalComponent from "./Components/ConditionalComponent"
import Message from "./Components/Message"
function App() {
  
  const  person ={
    name:"Indu ",
    message:"hi im there for you",
    seatNumber:[1,2,34,7],

  }

  console.log(person)
  return (
    <>
      <div>
        hlo world
        </div>
        <ConditionalComponent/>
      
        <Fruits/>
        <Message/>

        
        
    </>
  )
}

export default App
