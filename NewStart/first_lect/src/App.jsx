import Hello from "./Components/Hello"


function App() {
  const seatNumber=[1,4,7];

  return (
    <>
      <div>
        hlo world
        </div>

        <Hello name={'Rob'} message={"hii there"} emoji={'em'} seatNumber={seatNumber}/>
        
    </>
  )
}

export default App
