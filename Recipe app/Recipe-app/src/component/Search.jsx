import { useEffect, useState } from "react"
import styles from './search.module.css'
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="53f5f386ab0646768c36e2247ec900eb"
const Search = ({foodData, setFoodData}) => {
    const [query, setQuery]= useState("pizza");
    
    useEffect(()=>{
       async function fetchFood(){
         const res= await  fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)    

         const data= await res.json()
         console.log(data.results);
         setFoodData(data.results);
          }

          fetchFood()
    },[query])

      
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </div>
  )
}

export default Search
