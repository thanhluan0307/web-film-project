import classNames from 'classnames/bind'
import styles from '~/page/Cart/cart.module.scss'

export const Cart = () => {
    const cx = classNames.bind(styles)
  return (
    <nav className={cx('wrapper', ['clearfix'])}>
        <div className={cx('nav_container')}>
           <div className={cx('nav_content')}>
            <p className={cx('title')}>Shopping Cart</p>
              <span>Bạn đang có <strong>0</strong> sản phẩm trong giỏ hàng</span>
              <img src="" alt="" className={cx('product_image')} />
              <p className={cx('text')}>Hiện chưa có sản phẩm nào trong giỏ hàng</p>
              <h1 className={cx('total')}>Tổng tiền tạm tính:</h1>
              <span>0 <u>đ</u> </span>
           </div>
        </div>
            <button>Tiến hành đặt hàng</button>
    </nav>
  )
}
