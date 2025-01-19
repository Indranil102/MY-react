

const FruitComponent = ({name, price, soldout}) => {


  return (
    <>
    
      {/* {name} {price} */}
      {/* {price>5 ? (<li>{name} {price}</li>) : null} */}

      <li>
      {name} {price} {soldout? "soldout": ""}
      </li>
    
    </>
  )
}

export default FruitComponent
