import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import {addProduct,deleteProduct} from "~/reducer/favourite"
import {useDispatch} from "react-redux"
import styles from "./product.module.scss"
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const cx = classNames.bind(styles)

function Product({data}) {
    const [check, setCheck] = useState(true)
    const dispatch = useDispatch()
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
  
    return (
        <div className={cx("wrapper")}>

            <div>
                <Link to={`/product/${data._id}`}>
                    <LazyLoadImage
                        effect="blur"
                        className={cx("image")}
                        src={"https://shope-b3.thaihm.site/" + data.thumbnail}
                        alt={data._id}
                    />
                </Link>
            </div>
            <div className={cx("info")}>
                <p className={cx("name")}>{data.productName}</p>
                <p className={cx("price")}>
                    {data.price ? data.price.toLocaleString('en-US', {style:'currency',currency:'VND'})
                    :Number(10000000).toLocaleString('en-US', {style:'currency',currency:'VND'})}
                </p>
            </div>
            <div className={cx('action')}>
                <p><FontAwesomeIcon className={cx("icon-action")} icon={faCartShopping}/>Thêm </p>
                    { check ?
                        <p onClick={addFavorite} className={cx("link-product")}>
                            <FontAwesomeIcon className={cx("icon-action")} icon={faHeart}/>Thích
                        </p>
                        :
                        <p onClick={removeFavorite} className={cx("link-product")}>
                            <FontAwesomeIcon className={cx("icon-action")} icon={faHeart}/>Bỏ Thích
                        </p>
                    }
            </div>

        </div>

     );
}

export default Product;