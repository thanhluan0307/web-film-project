import {useState,useEffect} from "react"

import axios from "~/axios";
import ContaierProduct from "~/components/ContaierProduct/ContaierProduct";



function Home() {
  const [data,setData] = useState([])
 
  useEffect(() => {
    axios.get('/category/get-all-categories')
    .then (res => {
        const categorieArray = res.data.categories
        const categories = categorieArray.map(item =>{
        return item.categoryName
      })
      setData(categories)
     
    })
    
  },[])
    return  ( 
        <>
          {data.map(categorie => {
            return (
              <ContaierProduct key={categorie} filter={categorie}/>
            )
          })}
        </>
     );
}

export default Home;