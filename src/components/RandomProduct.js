import React, { useState } from 'react'
import { getProduct } from '../api/products-api'
import Product from './Product'

const RandomProduct = () => {
    
    const [product, setProduct] = useState()

    function handleClick() {
        const randNum = Math.floor(Math.random() * 77)
        getProduct(randNum).then((p)=>{setProduct(p)})            
    }
  
    return (
        <div>

            <button onClick={handleClick}> Click Here! </button>

            {product && <Product p={product} />}

        </div>
  )
}

export default RandomProduct