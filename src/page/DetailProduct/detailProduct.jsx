/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./DetailProduct.module.scss"
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHouse, 
    faLocationDot, 
    faMagnifyingGlass, 
    faMinus, faNoteSticky,
    faPhone, faPlus, 
    faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import axios from 'axios'
import { message } from 'antd'
import HomeStore from "~/components/HomeStore/homeStore";
import {counterTotalProduct,} from '~/reducer/totalProductSlice'
import { useDispatch } from "react-redux";
import Alert from '~/components/Alert/alert'

const cx = classNames.bind(styles)

function Person() {
    const disPatch=useDispatch()
    const { productID } = useParams()
    const [product, setProduct] = useState({})
    const [count,setCount] = useState(1)
    const [check,setCheck] = useState(false)
    var sum = count 
    function Minus (){
        if (sum >= 2 && sum <=20) {
            sum-=1
            setCount(sum)
        }
    }
    function Add (){
      if (sum >= 1 && sum <=19) {
        sum+=1
        setCount(sum)
      }
    }
    const HandleAddProduct=()=>{   
        let Storage=localStorage.getItem('myStore')
        if (Storage){
            Storage=JSON.parse(Storage)
            let infoProduct={
                name:' ốp Ihone 14-PRO-Max ',
                img:'https://bucket.nhanh.vn/store2/70105/ps/20221108/img_5832_1170x1170.jpg',
                size:'',
                color:'',
                price:9000,
                amount:count
            }
            let kt=false
            for (let item of Storage){
                if (item.name===infoProduct.name) {
                    kt=true
                    item.amount+=count
                    localStorage.setItem('myStore',JSON.stringify(Storage))
                    break
                }}
            if (kt===false) {
                Storage.push(infoProduct)
                localStorage.setItem('myStore',JSON.stringify(Storage))
                disPatch(counterTotalProduct())
            }
        }
        else {
            let infoProduct={
                name:' ốp Ihone 14-PRO-Max ',
                img:'https://bucket.nhanh.vn/store2/70105/ps/20221108/img_5832_1170x1170.jpg',
                size:'',
                color:'',
                price:9000,
                amount:count
            }
                Storage=[]
                Storage.push(infoProduct)
                localStorage.setItem('myStore',JSON.stringify(Storage))
                disPatch(counterTotalProduct())
            
        }
        setCheck(true)
    }
    useEffect(() => {
        axios.get(`/product/get-one-product/${productID}`)
            .then(res => {console.log(res.data.product)
                setProduct(res.data.product)})
            .catch(err => message.err("Lỗi rồi!"))
    }, [])

    return (
        <>  
            {check === true ? <Alert/> : null}
            <div className={cx("header")}>
                <FontAwesomeIcon icon={faHouse} />
                <a href="https://onionphukien.vn/">Trang Chủ</a>
                <FontAwesomeIcon icon={faMinus} />
                <span>{product.brand}</span>
                <FontAwesomeIcon icon={faMinus} />
                <span>{product.productName}</span>
            </div>
            <div className={cx("body")}>
                <div></div>
                <div className={cx("image")}>
                    <img src={"https://shope-b3.thaihm.site/" + product.thumbnail} alt=""></img>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <span>Click xem hình ảnh lớn hơn</span>
                    </div>
                </div>
                <div>
                    <div className={cx("infor")}>
                        <p>{product.productName}</p>
                        <p>Mã sản phẩm: <span>{product._id}</span></p>
                        <p>Còn hàng</p>
                        <p>Giá: <span>{product.price}</span></p>
                        <p>MÀU SẮC</p>
                        <p>LOẠI MÁY</p>
                        <u>Chọn màu và loại máy khi đặt hàng</u>
                    </div>
                    <div className={cx("addMinus")}>
                        <button onClick={Minus}>-</button>
                        <span>{count}</span>
                        <button onClick={Add}>+</button>
                    </div>
                    <div className={cx("function")}>
                        <button onClick={HandleAddProduct} >Thêm Vào Giỏ Hàng</button>
                        <button>Mua Ngay</button>
                    </div>
                    <div className={cx("shareFB")}>
                        <span>CHIA SẺ</span>
                        <a href="https://www.facebook.com/profile.php?id=100009786037668"><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                    <div className={cx("address")}>
                        <button>Toàn Quốc</button>
                        <button>Hà Nội</button>
                        <button>Hồ Chính Minh</button>
                        <div className={cx("addressDetail")}>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>265 Trần Đăng Ninh - Phường Dịch Vọng (Hết hàng)</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>Số 7 Ngõ 76 Nguyễn Chí Thanh, Láng Thượng (Hết hàng)</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>61 Nguyễn Phi Khanh, P Tân Định (Hết hàng)</span>
                            </p>
                        </div>
                        <div className={cx("addressNone")}>
                            <p>Không còn cửa hàng nào khu vực này còn hàng!!!</p>
                        </div>
                    </div>
                    <div className={cx("exchange")}>
                        <p>THÔNG SỐ SẢN PHẨM
                            <span><FontAwesomeIcon icon={faPlus} /></span>
                        </p>
                        <p>CHÍNH SÁCH ĐỔI TRẢ
                            <span><FontAwesomeIcon icon={faPlus} /></span>
                        </p>
                    </div>
                    <div className={cx("delivery")}>
                        <span><FontAwesomeIcon icon={faTruckFast} /></span>
                        <div>
                            <p>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</p>
                            <p>(Hoá đơn từ 150,000đ)</p>
                        </div>
                    </div>
                    <div className={cx("delivery")}>
                        <span><FontAwesomeIcon icon={faNoteSticky} /></span>
                        <div>
                            <p>ĐỔI TRẢ DỄ DÀNG</p>
                            <p>(Đổi trả trong vòng 7 ngày)</p>
                        </div>
                    </div>
                    <div className={cx("delivery")}>
                        <span><FontAwesomeIcon icon={faPhone} /></span>
                        <div>
                            <p>TỔNG ĐÀI BÁN HÀNG 0964.26.36.36</p>
                            <p>(Từ 8h30 - 21:30 mỗi ngày)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("otherInfor")}>
                <button>CÓ THỂ BẠN THÍCH</button>
                <button>SẢN PHẨM BÁN CHẠY</button>
            </div>
            <HomeStore/>
        </>
    );
}

export default Person;