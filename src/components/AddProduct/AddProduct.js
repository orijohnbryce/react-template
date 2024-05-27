import { useState } from 'react'

import "./AddProduct.css";
import { addProduct } from '../../api/products-api';

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = async (e) => {  
        e.preventDefault()              
        addProduct({
            name,
            price,
            stock,
            imageUrl,
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => { setName(e.target.value) }}
                    placeholder='enter product name' className='add-product' />
                <input value={price} onChange={(e) => { setPrice(e.target.value) }} type="number"
                    placeholder='enter price' className='add-product' />
                <input value={stock} onChange={(e) => { setStock(e.target.value) }} type="number"
                    placeholder='enter stock amount' className='add-product' />
                <input value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} 
                    placeholder='enter image-url' className='add-product' />
            
                <button type='submit'> Add </button>                
            </form>
        </div>
    )
}

export default AddProduct