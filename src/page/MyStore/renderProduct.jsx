import React,{useEffect, useState} from 'react'
import styles from './myStore.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import {counterTotalProduct,} from '~/reducer/totalProductSlice'
import Button from '@mui/material/Button';
import {increase,decrease} from '~/reducer/amountSlice'


function RenderProduct() {
    
    const [data,setData]=useState([])
    const totalProduct=useSelector(state=> state.counterProduct)
    const dispatch = useDispatch();
    dispatch(counterTotalProduct())
    
    const amountProduct=useSelector(state=>state.amountProduct)
    
    const handleIncrease=(index)=>{
        dispatch(increase())
        let newData=[...data]
        newData[index].amount+=1
        newData[index].totalPrice=newData[index].amount*newData[index].price
        setData(newData)
    }
    const handleDecrease=(index)=>{
        dispatch(decrease())
        let newData=[...data]
        newData[index].amount-=1
        if (newData[index].amount<=0) {
            newData[index].amount=0
        }
        newData[index].totalPrice=newData[index].amount*newData[index].price
        setData(newData)
    }
    const handleDelete=(index)=>{
        let newData=[...data]
        newData.splice(index,1)
        localStorage.removeItem('myStore')
        localStorage.setItem('myStore',JSON.stringify(newData))
        setData(newData)
    }

    useEffect(()=>{
        const dataTest=JSON.parse(localStorage.getItem('myStore'))  
        let newData=[...dataTest]
        // eslint-disable-next-line array-callback-return
        newData.map((value)=>{
            if (value.amount==null) value.amount=amountProduct
            value.totalPrice=value.price*value.amount
            value.style='something'
        })
        setData(newData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  

  return (
    <div className={styles.container}>
    <div className={styles.title}>
        <p>Giỏ hàng của bạn </p>
        <p>( Có <span>{totalProduct}</span> sản phẩm trong giỏ hàng)</p>
    </div>

    <div className={styles.navContent}>
        <div className={styles.navTitleProducts}>
            <input type="checkbox" name="" id="" className={styles.checkbox}/>
            <span>Sản Phẩm</span>
        </div>
        <div className={styles.navTitle}>Đơn Giá</div>
        <div className={styles.navTitle}>Số Lượng</div>
        <div className={styles.navTitle}>Tổng Tiền</div>
        <div className={styles.navTitle}>Thao Tác</div>
    </div>

    { data.map((value,index)=> {
        return(
            <div className={ styles.childProductContainer} key={index}>
                <div className={styles.childProductContainerDeal}>
                    <div className={styles.ProductDeal}>
                        <span>Deal Sốc</span>
                        <span>Mua kèm deal độc quyền</span>
                        <span>Thêm </span>
                    </div>
                    <div className={ styles.childProduct}>
                        <div className={styles.navTitleProduct}>
                            <input type="checkbox" name="" id="" className={styles.checkbox}/>
                            <img  width='80px' height='80px' src={value.img} alt="" />
                            <div className={styles.infoProduct}>
                                <p>{value.name}</p>
                                <img src="" alt="" />
                            </div>
                            <div className={styles.styleProduct}>
                                <p>Phân loại hàng</p>
                                <p>{value.style}</p>
                            </div>
                        </div>
                        <div className={styles.navTitle}>{value.price.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}</div>
                        <div className={`${styles.navTitle} ${styles.buttonContainer}`}>
                            <Button variant="outlined" className={styles.button} onClick={()=>handleDecrease(index)}>-</Button>
                            <p className='amount'>{value.amount}</p>
                            <Button variant="outlined" className={styles.button} onClick={()=>handleIncrease(index)}>+</Button>
                        </div>
                        <div className={styles.navTitle}>{(value.totalPrice)?.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}</div>
                        <div className={styles.navTitle} onClick={()=>{handleDelete(index)}}>Xoá</div>
                    </div>
                </div>
            </div>
            )
        })
    }
    
    </div>
  )
}

export default RenderProduct