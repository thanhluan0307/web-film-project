import React,{useState,useEffect} from 'react'
import styles from './product.module.scss'
import axios from "axios";
import { Card } from 'antd';

function Product() {
    const { Meta } = Card;

    const [data,setData]=useState([]) 

    const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUwZmNkZDIxOGRiMDcxNzQ2NmI2MGIiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJhdmF0YXIiOiJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvYnVzaW5lc3NtYW4tc2lsaG91ZXR0ZS1hcy1hdmF0YXItb3ItZGVmYXVsdC1wcm9maWxlLXBpY3R1cmUtcGljdHVyZS1pZDQ3NjA4NTE5OD9rPTIwJm09NDc2MDg1MTk4JnM9NjEyeDYxMiZ3PTAmaD04SjNWZ09aYWJfT2lZb0l1WmZpTUl2dWNGWUI4dldZbEtuU2pLdUtlWVFNPSIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0xMC0yMFQwNzo0NjozNy4zNDFaIiwidXBkYXRlZEF0IjoiMjAyMi0xMS0wOFQxMTozNzoyMS4zOTRaIiwiX192IjowLCJpYXQiOjE2Njc5MTc1MDJ9.Izny3lQ_m40MIq876pzjvBSEhsNVUdL_-6o76dwwPv0'

    useEffect(()=>{
        axios.get('https://shope-b3.thaihm.site/api/product/get-all-products')
        .then((res)=>{
            setData(res.data.products);
            console.log(res.data.products);
        })
        .catch((err)=>{
            alert('err')
        })
    },[])

    function Voucher(){
        return (
            <>
                <span>Giảm 10%</span>
            </>
        )
    }
  return (
        <div className={styles.allDataContainer}>
            {
                data.map((value)=>{ return(
                    <div key={value._id} className={styles.dataContainer}>
                    <Card.Meta className={styles.voucher} title={<Voucher/>} />
                    <Card
                        className={styles.product}
                        hoverable
                        style={{
                            width: 190,
                            height:290
                        }}
                        cover={<img className={styles.imgProduct} alt="example" src='https://bizweb.sapocdn.net/100/459/953/products/iphone-14-promax-deep-purple-reseller-com-vn-1.jpg'/>}
                        >
                        <Meta className={styles.info} title={value.productName} description={value.price?.toLocaleString('en-US', {style : 'currency', currency : 'VND'})} />
                    </Card>
                    </div>
                )
                })
            }
        </div>
  )
}

export default Product