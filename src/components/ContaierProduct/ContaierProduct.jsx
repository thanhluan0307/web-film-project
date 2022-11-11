import classNames from "classnames/bind";
import {useState,useEffect} from 'react'

import axios from "~/axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Product from "../Product/product";
import styles from "./ContaierProduct.module.scss"
import {memo} from "react"

const cx = classNames.bind(styles) 

function ContaierProduct({filter}) {

    const [productFilter,setProductFilter] = useState([])
    const [load,setLoad] = useState(true)
    
    useEffect (()=> {
        axios.get('/product/get-all-products')
        .then(res =>{   
            const data =(res.data.products)  
            const dataFilter = data.filter(item =>{
                return item.categoryId.categoryName === filter
            })
            setProductFilter(dataFilter)
            setTimeout(() => {
                setLoad(false)
            },1000)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])
    return  ( 
        <div className={cx("wrapper")}>
           <h1 className={cx("title")}>{load ? <Skeleton/> :filter}</h1>
           <div className={cx("body")}>
               {productFilter.map(item => {
                    return (
                        <Product key={item._id} data={item}/>
                    )
               })}
           </div>
        </div>
     );
}

export default memo(ContaierProduct);