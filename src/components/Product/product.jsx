import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {addProduct,deleteProduct} from "~/reducer/favourite"
import {useDispatch} from "react-redux"
import styles from "./product.module.scss"
import { useState } from "react";
import { useEffect } from "react";
import {counterTotalProduct}  from '~/reducer/totalProductSlice'
import Alert from '~/components/Alert/alert'

const cx = classNames.bind(styles) 
function Product({data,isload}) {
    const [load,setLoad] = useState(isload)
    const [check,setCheck] = useState(true)
    
    const dispatch = useDispatch()
    useEffect(() => {
        const timeID = setTimeout(() => {
            setLoad(false)
        },500)
        return () => {
            clearTimeout(timeID)
        }
    },[])
    const addFavorite = () => {
        const action = addProduct(data)
        setCheck(false)
        dispatch(action)
    }
    const removeFavorite = () => {
        const action = deleteProduct(data)
        setCheck(true)
        dispatch(action)
    }

    const HandleAddProduct = () => {
        toggle()
        let Storage = localStorage.getItem('myStore')
        if (Storage) {
            Storage = JSON.parse(Storage)
            let infoProduct=data
            infoProduct.amount=1
            let kt = false
            for (let item of Storage) {
                if (item.productName === data.productName) {
                    kt = true
                    item.amount += 1
                    localStorage.setItem('myStore', JSON.stringify(Storage))
                    break
                }
            }
            if (kt === false) {
                Storage.push(data)
                localStorage.setItem('myStore', JSON.stringify(Storage))
                dispatch(counterTotalProduct())
            }
        }
        else {
            let infoProduct=data
            infoProduct.amount=1
            Storage = []
            Storage.push(infoProduct)
            localStorage.setItem('myStore', JSON.stringify(Storage))
            dispatch(counterTotalProduct())
        }
    }
    

    const  [isOpen,setIsOpen] = useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return ( 
        <>
        <Alert 
            style={{top:0}}
            title={'Thêm sản phẩm thành công - '}
            url={'/myStore'}
            title2={'Tới cửa hàng ngay'}
            isOpen={isOpen}
            hide={toggle} 
        />
        <div className={cx("wrapper")}>
            <div>
                {load ? <Skeleton className={cx('loadImage')}/> :(<Link
                    to={`/product/${data._id}`}><img className={cx("image")}
                    src={"https://shope-b3.thaihm.site/" + data.thumbnail}
                    alt="" />
                </Link>)}
            </div>
            <div className={cx("info")}>
                <p className={cx("name")}>{ load ? <Skeleton className={cx("loadText")}/> : data.productName  }</p>
                <p className={cx("price")}>
                    {load ? <Skeleton className={cx("loadText")}/> : data.price?.toLocaleString('en-US', {style:'currency',currency:'VND'})}
                </p>
            </div>
            <div className={cx('action')}>
                <p onClick={HandleAddProduct}><FontAwesomeIcon className={cx("icon-action")} icon={faCartShopping}/>Thêm </p>
                <p>
                    { check ? 
                        <span onClick={addFavorite} className={cx("link-product")} to={`/product/${data._id}`}>
                            <FontAwesomeIcon className={cx("icon-action")} icon={faHeart}/>Thích
                        </span> 
                        :
                        <span onClick={removeFavorite} className={cx("link-product")} to={`/product/${data._id}`}>
                            <FontAwesomeIcon className={cx("icon-action")} icon={faHeart}/>Bỏ Thích
                        </span> 
                    }
                </p>
            </div>
           
        </div>
        </>
     );
}

export default Product;