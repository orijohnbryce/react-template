import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/products-api'
import Product from './Product'

const Products = () => {

    const [products, setProducts] = useState([])
    
    useEffect(()=>{
        getProducts().then((res)=>{setProducts(res)})
    }, [])

  return (
    <div>
        {products.map((p)=><Product key={p.id} p={p}/>)}
    </div>
  )
}

export default Products