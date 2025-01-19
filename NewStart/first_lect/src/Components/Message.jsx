

const Message = () => {
    function handleClick(){
        console.log("button click")
    }
  return (
    <div>
      <button onClick={handleClick}>Click on </button>
    </div>
  )
}

export default Message
