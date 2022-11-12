import classNames from 'classnames/bind'
import styles from '~/page/Cart/cart.module.scss'


export const Cart = () => {
    const cx = classNames.bind(styles)
  return (
    <nav className={cx('wrapper')}>
        <div className={cx('nav-center')}>
            <h3>Shopping Cart</h3>
            <p>Bạn đang có 0 sản phẩm trong giỏ hàng</p>
            <p>Hiện</p>
        </div>
    </nav>
  )
}
