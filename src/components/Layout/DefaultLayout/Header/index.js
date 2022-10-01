import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Header.module.scss'
import { 
        faGlobe, 
        faMagnifyingGlass, 
        faPlus 
        } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(style)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('nav-wrapper')}>
                    <a className={cx('logo')} href='/'>
                        <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='logo'/>
                    </a>
                    <ul className={cx('menu')}>
                        <li>
                            <a href='/movie'>Movie</a>
                        </li>
                        <li>
                            <a href='/tv'>Tv Shows</a>
                        </li>
                        <li>
                            <a href='/person'>People</a>
                        </li>
                        <li>
                            <a href='/person'>More</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('action')}>
                    <ul className={cx('primary')}>
                        <li><a href='/'>
                                <FontAwesomeIcon className={cx('more_btn')} icon={faPlus}/>
                            </a>
                        </li>
                        <li><a href='/'>
                                <FontAwesomeIcon className={cx('language_btn')} icon={faGlobe}/>
                            </a>
                        </li>
                        <li>
                            <a href='/'>Đăng nhập</a>
                        </li>
                        <li>
                            <a href='/'>Đăng ký</a>
                        </li>
                        <li><a href='/'>
                            <FontAwesomeIcon className={cx('search-btn')} icon={faMagnifyingGlass}/>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>)
    
 }
 
 export default Header;