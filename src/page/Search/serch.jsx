import { useSelector } from "react-redux";
import HomeStore from "~/components/HomeStore/homeStore";
import Product from "~/components/Product/product";
import classNames from "classnames/bind";
import SlideShow from "~/components/SlideShow/slideauto"

import styles from "./search.module.scss"

const cx = classNames.bind(styles)
function Search() {
   
    const data = useSelector(state => state.dateSearch) 
    return ( 
        <>
            <SlideShow/>
            <div className={cx('res')}>
                <h1>Tìm Kiếm</h1>
                <p>Có {data.length} sản phẩm tìm kiếm</p>
            </div>
            <div  className={cx('wrapper')}>
                {data.map(item => {
                    return (
                        <Product key={item._id} data={item} isload={true}/>
                    )
                })} 
            </div>
            <HomeStore/>
        </>
     );
}

export default Search;