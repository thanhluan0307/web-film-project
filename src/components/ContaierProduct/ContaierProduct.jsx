import classNames from "classnames/bind";
import {useState,useEffect} from 'react'

import axios from "~/axios";
import Product from "../Product/product";
import styles from "./ContaierProduct.module.scss"
const cx = classNames.bind(styles) 

function ContaierProduct({filter}) {

    const [product,setProduct] = useState([])

    useEffect (()=> {
        axios.get('/product/get-all-products')
        .then(res =>{
            setProduct(res.data.products)
                        
        })
        .catch(error =>{
            console.log(error)
        })
    },[])
  
    return ( 
        <div className={cx("wrapper")}>
           <h1 className={cx("title")}>{filter}</h1>
           <div className={cx("body")}>
               {/* eslint-disable-next-line array-callback-return */}
               {product.map(item => {
                console.log(item.categoryId.categoryName)
                if(item.categoryId.categoryName === filter) {
                    return (
                        <Product key={item._id} data={item}/>
                    )
                }
               })}
           </div>
        </div>
     );
}

export default ContaierProduct;