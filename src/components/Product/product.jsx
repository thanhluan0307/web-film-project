import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from "./product.module.scss"
import { useState } from "react";
import { useEffect } from "react";


const cx = classNames.bind(styles) 

function Product({data,isload}) {
    const [load,setLoad] = useState(isload)

    useEffect(() => {
        const timeID = setTimeout(() => {
            setLoad(false)
        },500)
        return () => {
            clearTimeout(timeID)
        }
    },[])
    return ( 
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
                <p><FontAwesomeIcon className={cx("icon-action")} icon={faCartShopping}/>Thêm Vào Giỏ</p>
                <p>
                    <Link className={cx("link-product")} to={`/product/${data._id}`}>
                        <FontAwesomeIcon className={cx("icon-action")} icon={faEye}/>Xem chi tiết
                    </Link>
                </p>
            </div>
        </div>
     );
}

export default Product;