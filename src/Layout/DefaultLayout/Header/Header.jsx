import { faSun, faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import logoFilm from '~/images/logo-ophim-4.png'
import style from './Header.module.scss'

const cx = classNames.bind(style)

function Header() {
  return (
    <header className={cx("wrapper")}>
        <div className={cx('contaier')}>
            <div className={cx('content')}>
                <a href="/"><img className={cx('image')} src={logoFilm} alt="" /></a>
                <ul className={cx('nav')}>
                  {/* <li><a href="/">Amine</a></li>
                  <li><a href="/">Shop</a></li>
                  <li><a href="/">Tin tức</a></li>
                  <li><a href="/">Truyện</a></li>
                  <li><a href="/">BXH</a></li> */}
                </ul>
            </div>

            <div className={cx('search')}>
              <input type="text" placeholder="Tìm kiếm phim"/>
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </div>

            <div className={cx('action')}>
                <div><a href="/"><FontAwesomeIcon icon={faSun}/></a></div>
                <div><a href="/"><FontAwesomeIcon icon={faUser}/></a></div>
            </div>
        </div>
    </header>
  )
 
 }
 
 export default Header;