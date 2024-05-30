import { useState } from 'react'

import "./AddProduct.css";
import { addProduct } from '../../api/products-api';
import { ProductModel } from '../../models/product-model';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [imageUrl, setImageUrl] = useState("");

    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const product = new ProductModel(name, price, stock, imageUrl)

        const res = await addProduct(product)
        if (res) {
            alert("Prodcut added successfully!")
            // navigate to "products" page:
            nav("/home")
        }
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
                <input value={imageUrl} maxLength={100} onChange={(e) => { setImageUrl(e.target.value) }}
                    placeholder='enter image-url' className='add-product' />

                <button type='submit'> Add </button>
            </form>
        </div>
    )
}

export default AddProduct