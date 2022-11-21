import HomeStore from "~/components/HomeStore/homeStore";
import classNames from "classnames/bind";
import styles from '~/page/Profile/profile.module.scss'
import { Link } from 'react-router-dom';

function Profile() {
    const cx = classNames.bind(styles)

    return (
        <div className={cx('info')}>
            <h3 className={cx('text-user')}>Tài khoản của {localStorage.getItem('email')}</h3>
            <div className={cx('container')}>
               <div className={cx('content')}>
                <div className={cx('detail')}>
                        <p className={cx('title')}>Thông tin tài khoản</p>
                        <div className={cx('info')}>
                            <p>Điểm tích luỹ của bạn:</p>
                            <p>Cấp độ khách hàng</p>
                            <Link to={'update-info'}><p>Thay đổi thông tin cá nhân</p></Link>
                            <Link to={'change-pass'}><p>Thay đổi mật khẩu</p></Link>
                        </div>
                    </div>
                    <div className={cx('favorite_product')}>
                        <p className={cx('title')}>Sản phẩm yêu thích</p>
                        <div className={cx('ino')}>
                        <Link to={'wishlist'}><p >Sản phẩm yêu thích</p></Link>
                            <p>Lịch sử đặt hàng</p>
                        </div>
                    </div>
               </div>
               <HomeStore/>
            </div>
        </div>
     );
}

export default Profile;
