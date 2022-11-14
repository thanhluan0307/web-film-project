import React from 'react'
import RenderProduct from './renderProduct'
import RenderNoneProduct from './renderNoneProduct'

function MyStore() {
  let Storage=localStorage.getItem('myStore')
  return (
    <>  
    { (Storage)?<RenderProduct/>:<RenderNoneProduct/>
    }
    </>
  )
}

export default MyStore