
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPhone,faRightFromBracket,faUser } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackToTopButton from '../../BackToTopButton/BackToTopButton';
import styles from '~/Layout/DefaultLayout/DefaultLayout.scss'
import { Link, NavLink,useNavigate } from 'react-router-dom';
import axios from '~/axios';
import {addProduct} from '~/reducer/dataSearchSlice'
import { counterTotalProduct } from '~/reducer/totalProductSlice';
import useDebounce from '~/customHook/useDebounce';


const cx = classNames.bind(styles)

function Header() {
  const dispatch = useDispatch()
  const productInStore = useSelector(state=>state.counterProduct) 
  const [fix,setFix] = useState(false)
  const [backToTop,setBackToTop] = useState(false)
  const [data,setData] = useState([])
  const [searchProduct,setSearchProduct] = useState('')
  const debounceSearch = useDebounce(searchProduct,1000)
  const token = localStorage.getItem('Token')
  const nav = useNavigate()
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
  useEffect (()=> {
   
    axios.get(`/product/find-products-by-name?productName=${debounceSearch}`)
    .then (res => {
        let data = res.data.products
        if (data.length !== 0) {
          const action = addProduct(data)
          dispatch(action)
          nav(`/search?q=${debounceSearch}`)
        }else {
            nav('/404')
        }
    })
  },[debounceSearch])
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
            <Link to="/"><img src="https://bucket.nhanh.vn/store2/70105/store_1607654364_601.png" alt="" /></Link>
         </div>
         <ul className={cx('nav')}>
            {data.map(category => {
              return (
                <li key={category}><NavLink className={({ isActive }) => isActive ? cx("active"): ''} to={`/category/${category}`}>{category}</NavLink></li>
              )
            })}
          
         </ul>
         <div className={cx('search')}>
            <input 
              type="text" 
              className={cx("value-product")} 
              value={searchProduct}
              onChange={e => setSearchProduct(e.target.value)}
              placeholder='Tìm kiếm...'/>
            <button 
            // onClick={getProductByValue} 
            className={cx('btnSearch')}></button>
         </div>
      </div>
      <BackToTopButton view={backToTop}/>
    </header>

  )

 }

 export default (Header);