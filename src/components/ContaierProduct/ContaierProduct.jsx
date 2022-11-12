<<<<<<< HEAD
import classNames from "classnames/bind";
import {useState,useEffect} from 'react'

import axios from "~/axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Product from "../Product/product";
import styles from "./ContaierProduct.module.scss"
import {memo} from "react"
import {useSelector} from 'react-redux'

const cx = classNames.bind(styles) 

function ContaierProduct({filter}) {

    const [productFilter,setProductFilter] = useState([])
    const [load,setLoad] = useState(true)
    const couter = useSelector(state => state.couterReducer)
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
            },500)
        })
        .catch(error =>{
            console.log(error)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[couter])
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
=======
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
>>>>>>> xuanbach
