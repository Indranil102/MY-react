import FoodItem from "./FoodItem"


const FoodList = ({foodData, setFoodId}) => {
  return (
    <div>
      {
        foodData.map((food)=>(
          <FoodItem setFoodId={setFoodId} food={food} key={food.id}/>
        ))
      }
    </div>
  )
}

export default FoodList
