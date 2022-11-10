import { useEffect, useState } from "react";
import { Card } from 'antd';
import React from 'react';

import axios from "~/axios";
import IconLoading from "~/components/IconLoading/IconLoading";

const { Meta } = Card;

function Home() {
  const [data,setdata] = useState([])
  const [loading,setLoading] = useState (true)
  useEffect(() => {
    axios.get('/product/get-all-products')
    .then(res => {
     setTimeout(()=>{
      setLoading(false)
      setdata(res.data.products)
     },500)
    })
  },[])
    return loading ? <IconLoading/> : ( 
        <div style={{display:"flex"}}>
          {
              data.map(item => {
                return (
                  <Card
                    key={item._id}
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src={'https://shope-b3.thaihm.site/' + item.thumbnail} />}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                )
              })
          }
        </div>
     );
}

export default Home;