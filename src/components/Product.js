import React from 'react'

const Product = ({p}) => {
  return (
    <div style={{border: 'black solid 1px'}}>
        <p> name: {p.name} </p>
        <p> price: {p.price} </p>
        <p> in-stock: {p.stock} </p>
        <img src={p.imageUrl} alt='not-found'/>        
    </div>
  )
}

export default Product