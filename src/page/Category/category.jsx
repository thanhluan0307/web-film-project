import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";


import styles from "./category.module.scss"
import axios from "~/axios";
import HomeStore from "~/components/HomeStore/homeStore";
import Product from "~/components/Product/product";
import SlideShow from "~/components/SlideShow/slideauto"

const cx =classNames.bind(styles)

function Category() {
    const {categoryID} = useParams()
    const [category,setCategory] = useState([])
    const [branchs,setBranchs] = useState([])
    console.log(branchs)
    useEffect(() => {
          axios.get('/product/get-all-products')
               .then (res => {
                    let data = res.data.products
                    let productByCategory = data.filter(item => {
                         return item.categoryId.categoryName === categoryID
                    })
                    let branchs = productByCategory.map(item => {
                         return item.brand
                    })
                    setBranchs([...new Set(branchs)])
                    setCategory(productByCategory)
               })
    },[categoryID])
    return ( 
       <> 
          <SlideShow/>
          {branchs.map(item => {
               return (<><input name="branch" type="radio" /> <label for="html">{item}</label><br/></>)
          })}
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