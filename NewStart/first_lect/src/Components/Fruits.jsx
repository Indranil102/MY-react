import FruitComponent from "./FruitComponent";


const Fruits = () => {

    //const fruits=['apple','mango','banana','orange']

    const fruits=[{
        name:'apple',
        price:10,
        soldout:false,

    },
    {
        name:'banana',
        price:20,
        soldout:true,
    },
    {
        name:'Pinapple',
        price:30,
        soldout:true,
    },
    {
      name:'Orange',
      price:4,
      soldout:false,
  },
];

  return (
    <div>
       <ul>
        {fruits.map(fruit=>
        ///<li key={fruit.name}>
           // {fruit.name} ${fruit.price}
        //</li>

        <FruitComponent key={fruit.name} name={fruit.name} price={fruit.price} soldout={fruit.soldout}/>

        )}
       </ul>
    </div>
  )
}

export default Fruits
