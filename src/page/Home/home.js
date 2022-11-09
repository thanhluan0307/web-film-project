import { useEffect, useState } from "react";
import { Card } from 'antd';
import React from 'react';
import axios from "~/axios";

const { Meta } = Card;

function Home() {
  const [data,setdata] = useState([])
  useEffect(() => {
    axios.get('/product/get-all-products')
    .then(res => {
      console.log(res.data)
      setdata(res.data.products)
    })
  },[])
    return ( 
        <>
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
        </>
     );
}

export default Home;