
import Fruits from "./Components/Fruits"
import ConditionalComponent from "./Components/ConditionalComponent"
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

        
        
    </>
  )
}

export default App
