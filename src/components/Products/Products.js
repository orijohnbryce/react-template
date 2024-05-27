import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getProducts } from '../../api/products-api'
import Product from './Product'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then((res)=>{
            setProducts(res)
        })
    }, [])

  return (
    <div>
        {products.map((product)=>{
            return <Product p={product}/>
        })}

    </div>
  )
}

export default Products