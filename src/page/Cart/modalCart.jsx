import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from '~/page/Cart/cart.module.scss'
export const Cart = () => {
    const cx = classNames.bind(styles)
    return(
        <div className={cx('cart_wrapper')}>
            <div className={cx("cart_content")}>
                <div className={cx('cart_content_list')}>
                    <h3>Giỏ hàng</h3>
                    <p>Bạn có <strong>0</strong> sản phẩm trong giỏ hàng</p>
                    <button className={cx('btn_close')}>
                        <img src="https://onionphukien.vn/tp/T0298/img/tmp/iconclose.png" alt="đóng" />
                    </button>
                    <div className={cx('cart_vỉew')}>
                        {
                            0 ?
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className={cx('product_image')}>
                                            <a href="/"><img src="" alt="cart_img"/></a>
                                        </td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>:
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
                                <td className={cx('text-right')}>0đ</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <a href="/" className="btn_checkout">Tiến hành đặt hàng</a>
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