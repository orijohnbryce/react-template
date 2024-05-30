import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct/AddProduct'
import Products from './Products/Products'
import DeleteProduct from './DeleteProduct/DeleteProduct'
import FastTyping from './FastTyping'

const SiteRoutes = () => {
  return (
    <div>
        <Routes>                
            <Route path='/' element={<Products/>}/>
            <Route path='/home' element={<Products/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/delete' element={<DeleteProduct/>}/>
            <Route path='/delete/:id' element={<DeleteProduct/>}/>
            <Route path='fast-typing' element={<FastTyping/>}/>
        </Routes>
    </div>
  )
}

export default SiteRoutes