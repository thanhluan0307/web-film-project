<<<<<<< HEAD

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPhone,faUser } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect, useCallback } from 'react';

import BackToTopButton from '../../BackToTopButton/BackToTopButton';
import styles from '~/Layout/DefaultLayout/DefaultLayout.scss'
import { Link } from 'react-router-dom';
import axios from '~/axios';
import { useDispatch } from 'react-redux';
import { upCouter } from '~/reducer/couterSlice';


const cx = classNames.bind(styles)

function Header() {
  const [fix,setFix] = useState(false)
  const [backToTop,setBackToTop] = useState(false)
  const [data,setData] = useState([])
  const dispatch = useDispatch()

  const setFixed = useCallback(() => {
    if(window.scrollY > 100) {
      setBackToTop(true) 
      setFix(true)
    }else {
      setFix(false)
      setBackToTop(false) 
    }
  },[])
 
  useEffect(() => {
    axios.get('/category/get-all-categories')
    .then (res => {
        const categorieArray = res.data.categories
        const categories = categorieArray.map(item =>{
        return item.categoryName 
      })
      setData(categories)
    }) 
  },[])
  
  useEffect(() => {
    window.addEventListener('scroll',setFixed)
    /* eslint-disable react-hooks/exhaustive-deps */
  },[])
   const handleClick = () => {
     dispatch(upCouter + 1)
   }
  return (
    <header className={fix ? cx('header','fixed') : cx('header')}>
      <div className={cx('subnav')}>
        <div className={cx('phone')}>
          <FontAwesomeIcon className={cx('icon')} icon={faPhone}/>
          <span  className={cx('numb')}>0964.26.36.36</span>
        </div>
        <ul className={cx('info-user')}>
        <li>
              <FontAwesomeIcon className={cx('icon')} icon={faUser}/>
              <Link to="/login" className={cx('text')}>Đăng Nhập</Link>
          </li>
          <li>
              <FontAwesomeIcon className={cx('icon')} icon={faCartShopping}/>
              <span className={cx('text')}>Giỏ hàng <span className={cx('quantity')}>(0)</span></span>
          </li>
        </ul>
      </div>
      <div className={cx('nav-box')}>
         <div className={cx('logo')}>
            <Link to="/"><img src="https://bucket.nhanh.vn/store2/70105/store_1607654364_601.png" alt="" /></Link>
         </div>
         <ul className={cx('nav')}>   
            {data.map(category => {
              return (
                <li key={category}><Link onClick={handleClick} to={`/category/${category}`}>{category}</Link></li>
              )
            })}
         </ul>
         <div className={cx('search')}>
            <input type="text" className={cx("value-product")} placeholder='Tìm kiếm...' />
            <input type="submit" className={cx('btnSearch')}/>
         </div>
      </div>
      <BackToTopButton view={backToTop}/>
    </header>
  )
 
 }
 
=======
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPhone,faUser } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';

import BackToTopButton from '../BackToTopButton/BackToTopButton';
import styles from '~/Layout/DefaultLayout/DefaultLayout.scss'
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)

function Header() {
  const [fix,setFix] = useState(false)
  const [backToTop,setBackToTop] = useState(false)

  const setFixed = () => {
    if(window.scrollY > 100) {
      setBackToTop(true) 
      setFix(true)
    }else {
      setFix(false)
      setBackToTop(false) 
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',setFixed)
  
  },[])

  return (
    <header className={fix ? cx('header','fixed') : cx('header')}>
      <div className={cx('subnav')}>
        <div className={cx('phone')}>
          <FontAwesomeIcon className={cx('icon')} icon={faPhone}/>
          <span className={cx('numb')}>0964.26.36.36</span>
        </div>
        <ul className={cx('info-user')}>
        <li>
              <FontAwesomeIcon className={cx('icon')} icon={faUser}/>
              <Link to="/login" className={cx('text')}>Tài khoản</Link>
          </li>
          <li>
              <FontAwesomeIcon className={cx('icon')} icon={faCartShopping}/>
              <span className={cx('text')}>Giỏ hàng <span className={cx('quantity')}>(0)</span></span>
          </li>
        </ul>
      </div>
      <div className={cx('nav-box')}>
         <div className={cx('logo')}>
            <img src="https://bucket.nhanh.vn/store2/70105/store_1607654364_601.png" alt="" />
         </div>
         <ul className={cx('nav')}>   
            <li><a href="/">ỐP IPHONE</a></li>
            <li><a href="/">DÁN MÀN</a></li>
            <li><a href="/">ỐP AIRPODS</a></li>
            <li><a href="/">PHỤ KIỆN</a></li>
            <li><a href="/">ỐP IPAD</a></li>
            <li><a href="/">APPLE WATCH</a></li>    
            <li><a href="/">APPLE WATCH</a></li>    
         </ul>
         <div className={cx('search')}>
            <input type="text" className={cx("value-product")} placeholder='Tìm kiếm...' />
            <input type="submit" className={cx('btnSearch')}/>
         </div>
      </div>
      <BackToTopButton view={backToTop}/>
    </header>
  )
 
 }
 
>>>>>>> xuanbach
 export default (Header);