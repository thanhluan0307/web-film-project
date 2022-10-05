import { faSun } from '@fortawesome/free-regular-svg-icons';
import {Link} from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import logoFilm from '~/images/logo-ophim-4.png'
import style from './Header.module.scss'
import Tippy from '@tippyjs/react';
const cx = classNames.bind(style)

function Header() {
  return (
    <header className={cx("wrapper")}>
        <div className={cx('contaier')}>
            <div className={cx('content')}>
                <a href="/"><img className={cx('image')} src={logoFilm} alt="" /></a>
                <ul className={cx('nav')}>
                  <li><Link href="/">Phim Bộ</Link></li>
                  <li><Link href="/">Phim Lẻ</Link></li>
                  <li><Link href="/">Shows</Link></li>
                  <li><Link href="/">Hoạt Hình</Link></li>

                  <Tippy content="342342">
                    <li><Link href="/">Thể Loại</Link></li>
                  </Tippy>

                  <li><Link href="/">Quốc Gia</Link></li>

                  <li><Link href="/">Sắp Chiếu</Link></li>
                </ul>
            </div>

            <div className={cx('search')}>
              <input type="text" placeholder="Tìm kiếm phim"/>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>

            <div className={cx('action')}>
              <div><Link href="/"><FontAwesomeIcon icon={faSun}/></Link></div>
            </div>
        </div>
    </header>
  )
 
 }
 
 export default Header;