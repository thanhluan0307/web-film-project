import classNames from 'classnames/bind'
import styles from '~/page/Cart/cart.module.scss'


export const Cart = () => {
    const cx = classNames.bind(styles)
  return (
    <nav className={cx('wrapper')}>
        <div className={cx('nav-center')}>
            <h3>Shopping Cart</h3>
            <p>Bạn đang có <strong>0</strong> sản phẩm trong giỏ hàng</p>
            <p>Hiện chưa có sản phẩm nào trong giỏ hàng</p>
            <h1 className={cx('total')}>Tổng tiền tạm tính:</h1>
        </div>
    </nav>
  )
}
