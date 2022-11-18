import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import classNames from "classnames/bind"

import styles from "./modal.module.scss"
import axios from "~/axios"

const cx = classNames.bind(styles)

function Modal({open}) {
    const [data,setData] = useState([])
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
    return ( 
        <div className={cx('overlay')}>
           <div className={cx('modal-contaier')}>
                <ul className={cx('nav')}>
                    {data.map(category => {
                    return (
                        <li key={category}><NavLink className={({ isActive }) => isActive ? cx("active"): ''} to={`/category/${category}`}>{category}</NavLink></li>
                    )
                    })}
                </ul>
           </div>
        </div>
     );
}

export default Modal;