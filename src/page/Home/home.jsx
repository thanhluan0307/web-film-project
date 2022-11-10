import React from 'react'
import styles from './home.module.scss'
import classNames from 'classnames/bind'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import 'antd/dist/antd.css';
import Product from './product'
import Dropdown from './dropdown'
import Slideshow from './slideshow/slideauto.jsx'

const cx = classNames.bind(styles)
function home() {
  return (
    <>
    <div className='d-flex'>
       <p className={cx('icon-faHome')}>icon</p>
       <p className={cx('icon-dash')}>Trang chủ</p>
       <p className={styles.title}>Title</p>
    </div>

    <h2 className={cx('title-2')}>Title2</h2>

    <div className={cx('styles.filter d-flex')}>
        <p className={cx('filter-title')}>Bộ lọc</p>
        <div className={cx('filter-name')}>
            <div className={cx('drop-down')}><Dropdown /></div>
            <div className={cx('drop-down')}><Dropdown /></div>
            <div className={cx('drop-down')}><Dropdown /></div>
            <div className={cx('drop-down','drop-down2')}><Dropdown /></div>
        </div>
    </div>
    
    <Product/>
    </>
  )
}

export default home