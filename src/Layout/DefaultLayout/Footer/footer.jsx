/* eslint-disable react/jsx-no-target-blank */
import styles from '~/Layout/DefaultLayout/DefaultLayout.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles)

function Footer () {
   
    return ( 
       <>
          <div className={cx("infos-footer")}>
            <div className={cx("info")}>
               <h4>GỌI MUA HÀNG ( 08:30-21:30 )</h4>
               <div className={cx("content")}>
                     <p>
                        <span className={cx("box-icon")}>
                           <FontAwesomeIcon className={cx("phone-icon")} icon={faPhone}/>
                        </span>
                        <span className={cx("box-phone")}>
                           <a className={cx("btn-phone")} href="tel:0964263636">0964263636</a>
                        </span>
                     </p>
                     <span className={cx("time")}>Tất cả các ngày trong tuần</span>
               </div>
            </div>
            <div className={cx("info")}>
               <h4>GÓP Ý, KHIẾU NẠI ( 08:30-20:30 )</h4>
               <div className={cx("content")}>
                     <p>
                        <span className={cx("box-icon")}>
                           <FontAwesomeIcon className={cx("phone-icon")} icon={faPhone}/>
                        </span>
                        <span className={cx("box-phone")}>
                           <a className={cx("btn-phone")} href="tel:0964263636">0964263636</a>
                        </span>
                     </p>
                     <span className={cx("time")}>Các ngày trong tuần ( trừ ngày lễ )</span>
               </div>
            </div>
            <div className={cx("info")}>
               <h4>ĐĂNG KÝ NHẬN THÔNG TIN MỚI</h4>
               <div className={cx('box-email')}>
                  <input type="email"  placeholder='Nhập email của bạn tại đây' />
                  <button className={cx("btn")}>Đăng ký</button>
               </div>
            </div>
            <div className={cx("info")}>
               <h4>THEO DÕI CHÚNG TÔI</h4>
               <ul className={cx('box-brands')}>
                  <li>
                     <a href="https://www.facebook.com/phukienonion" 
                        target="_blank"><FontAwesomeIcon icon={faFacebookF}/>
                     </a>
                  </li>
                  <li>
                     <a href="https://www.instagram.com/onion.phukien/" 
                        target="_blank"><FontAwesomeIcon icon={faInstagram}/>
                     </a>
                  </li>
                  <li>
                     <a href="https://www.youtube.com/" 
                        target="_blank"><FontAwesomeIcon icon={faYoutube}/>
                     </a>
                  </li>
               </ul>
            </div>
           
          </div>
          <footer className={cx('footer')}>
            <div className={cx("item")}>
               <h4>HỖ TRỢ KHÁCH HÀNG</h4>
               <ul>
                  <li>Hướng dẫn chọn size</li>
                  <li>Chính sách đổi/Trả</li>
                  <li>Chính sách bảo mật</li>
                  <li>Thanh toán, Giao nhận</li>
               </ul>
            </div>
            <div className={cx("item")}>
               <h4>VỀ CHÚNG TÔI</h4>
               <img alt="thong bao bo cong thuong" className={cx('us')} src="https://bucket.nhanh.vn/website/template/483/contentKey/2548/20150827110756_dathongbao.png"/>
            </div>
            <div className={cx("item")}>
               <h4>HỆ THỐNG CỬA HÀNG</h4>
              
            </div>
            <div className={cx("item")}>
               <h4>FANPAGE CHÚNG TÔI</h4>
               
            </div>
          </footer>
          <footer className={cx('bottom-footer')}>
            <p>Thiết kế website bởi <span><img className={cx()} src="https://onionphukien.vn/images/favicon.ico" alt="logo" /> NHANH.VN</span></p>
          </footer>
       </>
    );
}

export default  Footer;