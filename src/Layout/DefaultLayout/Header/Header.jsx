
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPhone,faRightFromBracket,faUser } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackToTopButton from '../../BackToTopButton/BackToTopButton';
import styles from './header.module.scss'
import { Link, NavLink } from 'react-router-dom';
import axios from '~/axios';

import { counterTotalProduct } from '~/reducer/totalProductSlice';
import logo from '~/assets/images/b5.png'
import iconSearch from '~/assets/images/icon-search.svg'
import Input from '~/components/Input/Input';

const cx = classNames.bind(styles)

function Header() {
  const dispatch = useDispatch()
  const productInStore = useSelector(state=>state.counterProduct) 
  const [fix,setFix] = useState(false)
  const [backToTop,setBackToTop] = useState(false)
  const [data,setData] = useState([])
  
  const token = localStorage.getItem('Token')
 
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
    dispatch(counterTotalProduct())
  },[])
  const removeToken = () => {
    localStorage.removeItem('Token')
    localStorage.removeItem('email')
  }
  
  return (
    <header className={fix ? cx('header','fixed') : cx('header')}>
      <div className={cx('subnav')}>
        <div className={cx('phone')}>
          <FontAwesomeIcon className={cx('icon')} icon={faPhone}/>
          <span  className={cx('numb')}>0964.26.36.36</span>
        </div>
        <ul className={cx('info-user')}>
          {token ? (
            <>
              <li>
                <FontAwesomeIcon className={cx('icon')} icon={faUser}/>
                <Link to="/user" className={cx('text')}>{localStorage.getItem('email')}</Link>
              </li>
              <li>
                <FontAwesomeIcon className={cx('icon')} icon={faRightFromBracket}/>
                <Link to="/" onClick={removeToken} className={cx('text')}>Đăng xuất</Link>
              </li>
            </>) 
            : (<li>
              <FontAwesomeIcon className={cx('icon')} icon={faUser}/>
              <Link to="/login" className={cx('text')}>Đăng Nhập</Link>
          </li>)}
          <li >
              <Link to="/myStore" >
                <FontAwesomeIcon className={cx('icon')} icon={faCartShopping}/>
                <span className={cx('text')}>Giỏ hàng <span className={cx('quantity')}>({productInStore})</span></span>
              </Link>
          </li>
        </ul>
      </div>
      <div className={cx('nav-box')}>
         <div className={cx('logo')}>
            <Link to="/"><img src={logo} alt="" /></Link>
         </div>
         <ul className={cx('nav')}>
            {data.map(category => {
              return (
                <li key={category}><NavLink className={({ isActive }) => isActive ? cx("active"): ''} to={`/category/${category}`}>{category}</NavLink></li>
              )
            })}
          
         </ul>
         <Input/>
         <div className={cx('search-mobile')}>
              <img src={iconSearch} alt="" />
         </div>
      </div>
      <BackToTopButton view={backToTop}/>
    </header>

  )

 }

 export default (Header);