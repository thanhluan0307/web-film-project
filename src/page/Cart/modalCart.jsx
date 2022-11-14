import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faTrash} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from '~/page/Cart/cart.module.scss'
import {useEffect, useRef, useState} from "react";

export const Cart = props => {
    const cx = classNames.bind(styles)
    const modalRef = useRef()
    let quantity = 1
    window.localStorage.getItem('amount') ? quantity = window.localStorage.getItem('amount'): window.localStorage.setItem('amount', 1)
    const [price, setPrice]  = useState(40000)
    const [amount, setAmount] = useState( quantity * 1)
    window.localStorage.setItem('amount', amount)
    window.localStorage.setItem('totalPrice', price * quantity)
    useEffect(() => {
        const clickOutsideContent = (e) => {
            if (e.target === modalRef.current) {
                props.setShow(false)
            }
        }
        window.addEventListener('click', clickOutsideContent)
        return () => {
            window.removeEventListener('click', clickOutsideContent)
        }
    }, [props])

    const handleClickIncrement = () => {
        setAmount(amount => amount + 1)
        window.localStorage.setItem('amount', amount)
        window.localStorage.setItem('totalPrice', 40000 * amount)
    }

    const handleClickDecrement = () => {
        setAmount(quantity => quantity - 1)
        window.localStorage.setItem('amount', quantity)
        window.localStorage.setItem('totalPrice', price * quantity)
    }
    return (
        <div ref={modalRef} className={cx('modal', [`${props.show ? 'active' : ''}`])}>
            <div className={cx('content')}>
                <div className={cx('content_list')}>
                    <h3>Giỏ hàng</h3>
                    <p className={cx('text')}>Bạn có <strong>0</strong> sản phẩm trong giỏ hàng</p>
                    <button className={cx('btn_close')} onClick={props.close}>
                        <img src="https://onionphukien.vn/tp/T0298/img/tmp/iconclose.png" alt="đóng"/>
                    </button>
                    <div className={cx('vỉew')}>
                        {
                            1 ?
                                <table className={cx('item')}>
                                    <tbody>
                                    <tr>
                                        <td className={cx('product_image')}>
                                            <a href="/"><img
                                                src="https://bucket.nhanh.vn/store2/70105/ps/20221108/img_5836_thumb_400x400.jpg"
                                                alt="cart_img"/></a>
                                        </td>
                                        <td className={cx('detail')}>
                                            <h3>Ốp Iphone chính hãng</h3>
                                            <p className={cx('item-price')}>{price.toLocaleString()}</p>
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                            <div className={cx('quantity')}>
                                                <p>Số lượng:</p>
                                                <div className={cx('amount_btn')}>
                                                    <button onClick={handleClickDecrement}>-</button>
                                                    <p className="amount">{amount}</p>
                                                    <button onClick={handleClickIncrement}>+</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table> :
                                <table id={'cart_view'}>
                                    <tbody>
                                    <tr>
                                        <td>Hiện chưa có sản phẩm</td>
                                    </tr>
                                    </tbody>
                                </table>
                        }

                        <span className={cx('line')}></span>
                        <table className={cx('cart_total')}>
                            <tbody>
                            <tr>
                                <td className={cx('text-left')}><b>TỔNG TIỀN TẠM TÍNH</b></td>
                                <td className={cx('text-right')}>{(window.localStorage.getItem('totalPrice')*1).toLocaleString('vi') + ' VNĐ'}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <a href="/" className={cx('btn_checkout')}>Tiến hành đặt hàng</a>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <a href="/" className={cx('cart_link')}>Xem chi tiết giỏ hàng
                                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}