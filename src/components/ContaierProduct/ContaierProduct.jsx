import classNames from "classnames/bind";
import {useState,useEffect} from 'react'

import axios from "~/axios";
import 'react-loading-skeleton/dist/skeleton.css'
import Product from "../Product/product";
import styles from "./ContaierProduct.module.scss"
import {memo} from "react"


const cx = classNames.bind(styles) 

function ContaierProduct() {
    const [productAll,setProductAll] = useState([])
    useEffect (()=> {
        axios.get('/product/get-all-products')
        .then(res =>{   
            let data =(res.data.products)    
            setProductAll(data)
        })
        .catch(error =>{
            console.log(error)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return  ( 
        <div className={cx("wrapper")}>
           <div className={cx("body")}>
               {productAll.map(item => {
                    return (
                        <Product key={item._id} data={item} isload={true}/>
                    )
               })}
           </div>
        </div>
     );
}

export default memo(ContaierProduct);