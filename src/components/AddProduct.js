import React from 'react'
import {addProduct} from "../client/product-client"

const AddProduct = () => {

    function handleClick() {
        addProduct({
            name: 'david'
        })
    }
  return (
      <div>
          Add Product Component

          <button onClick={handleClick}> Click here </button>
    </div>
  )
}

export default AddProduct