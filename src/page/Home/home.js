import { useEffect,useState } from "react";

import axios from "~/axios";
import ContaierProduct from "~/components/ContaierProduct/ContaierProduct";
import Slide from '~/components/SlideShow/slideauto'

function Home() {
  const [category,setCategory] = useState([])

  useEffect(() => {
    axios.get('/category/get-all-categories')
      .then(res => {
        const data = res.data.categories
        const categories = data.map(item => {
          return item._id
        })
       setCategory(categories)
      })
  },[])
  
    return ( 
        <>
          <Slide/>
          <ContaierProduct  categorie={category} filter="Điện Thoại"/>
          <ContaierProduct  categorie={category} filter="Laptop"/>
          <ContaierProduct  categorie={category} filter="Keyboard"/>
          <ContaierProduct  categorie={category} filter="Chuột"/>
        </>
     );
}

export default Home;