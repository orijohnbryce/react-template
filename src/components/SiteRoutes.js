import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct/AddProduct'
import Products from './Products/Products'
import DeleteProduct from './DeleteProduct/DeleteProduct'
import Login from './Login/Login'
import Home from './Home/Home'
import Product from './Products/Product'

const SiteRoutes = () => {
  return (
    <div>
        <Routes>                
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>     
            <Route path='/products/:id' element={<Product/>}/>     

        </Routes>
    </div>
  )
}

export default SiteRoutes