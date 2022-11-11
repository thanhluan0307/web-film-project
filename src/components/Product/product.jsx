import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./product.module.scss"


const cx = classNames.bind(styles) 

function Product({data}) {
    
    return ( 
        <div className={cx("wrapper")}>
            <img className={cx("image")} src={"https://shope-b3.thaihm.site/" + data.thumbnail } alt={data.productName} />
            <div className={cx("info")}>
                <p className={cx("name")}>{data.productName}</p>
                <p className={cx("price")}>{data.price?.toLocaleString('en-US', {style:'currency',currency:'VND'})}</p>
            </div>
            <div className={cx('action')}>
                <p><FontAwesomeIcon className={cx("icon-action")} icon={faCartShopping}/>Mua nhanh</p>
                <p><FontAwesomeIcon className={cx("icon-action")} icon={faEye}/>Xem chi tiết</p>
            </div>
        </div>
     );
}

export default Product;