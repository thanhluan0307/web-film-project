import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { addProduct, deleteProduct } from "~/reducer/favourite";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

import useLocalStorage from "~/customHook/useLocalStorage";
import styles from "./product.module.scss"
const cx = classNames.bind(styles)

function Product({data,index}) {
  
  const [check,setCheck] = useLocalStorage('checkLike',[])
  const dispatch = useDispatch()
  const handleClick = () => {
    const action = addProduct(data)
    dispatch(action)
    console.log(index)
    setCheck(pre => {
        const arr = [...pre,index] 
        return arr
    })
  }
  const removePro = () => {
    const action = deleteProduct(data)
    dispatch(action)
    const arr = [...check]
    const sd = arr.indexOf(index)
    console.log(sd)
    arr.splice(sd,1)
    setCheck(arr)
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
                { !check.includes(index) ?
                    <p className={cx("link-product")} onClick={handleClick}>
                        {/* <Link to={`/product/${data._id}`} > */}
                            <FontAwesomeIcon className={cx("icon-action")} icon={faHeart}/>thich
                        {/* </Link> */}
                    </p>     :
                    <p className={cx("link-product")} onClick={removePro}>
                        {/* <Link to={`/product/${data._id}`} > */}
                            <FontAwesomeIcon className={cx("icon-action")} icon={faHeartCrack}/>X
                        {/* </Link> */}
                    </p>      
                }  
            </div>

        </div>

     );
}

export default Product;