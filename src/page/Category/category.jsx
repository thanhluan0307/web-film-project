import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";


import styles from "./category.module.scss"
import axios from "~/axios";
import HomeStore from "~/components/HomeStore/homeStore";
import Product from "~/components/Product/product";

const cx =classNames.bind(styles)

function Category() {
    const {categoryID} = useParams()
    const [category,setCategory] = useState([])

    useEffect(() => {
          axios.get('/product/get-all-products')
               .then (res => {
                    let data = res.data.products
                    let productByCategory = data.filter(item => {
                         return item.categoryId.categoryName === categoryID
                    })
                    setCategory(productByCategory)
               })
    },[categoryID])
    return ( 
       <> 
           <div className={cx("wrapper")}>
               {category.map(item => {
                   return ( <Product key={item._id} data={item} isload={false}/>)
               })}
           </div>
          
            <HomeStore/>
       </>
     );
}

export default Category;