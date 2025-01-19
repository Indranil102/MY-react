import FruitComponent from "./FruitComponent";


const Fruits = () => {

    //const fruits=['apple','mango','banana','orange']

    const fruits=[{
        name:'apple',
        price:10,
    },
    {
        name:'banana',
        price:20,
    },
    {
        name:'Pinapple',
        price:30,
    },
];

  return (
    <div>
       <ul>
        {fruits.map(fruit=>
        ///<li key={fruit.name}>
           // {fruit.name} ${fruit.price}
        //</li>

        <FruitComponent key={fruit.name} name={fruit.name} price={fruit.price}/>

        )}
       </ul>
    </div>
  )
}

export default Fruits
