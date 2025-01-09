
import './App.css'
import Card from './Card'

function App() {

  let myObj={
    username:"Indu",
    age:21,
  }

  let newArr =[1,2,3,4];


  return (
    < >

    <h2 className=' bg-green-600 p-5 rounded-xl mt-3 '>tailwind</h2>

    <Card channel="chai" myObj={myObj} newAr={newArr}/>

    
     
    </>
  )
}

export default App
