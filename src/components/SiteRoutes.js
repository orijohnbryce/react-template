import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct/AddProduct'
import Products from './Products/Products'
import DeleteProduct from './DeleteProduct/DeleteProduct'
import FormDataComp from './FormDataComp'
import ChildrenExample from './ChildrenExample/ChildrenExample'

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
            <Route path='/formdata' element={<ChildrenExample/>}/>
        </Routes>
    </div>
  )
}

export default SiteRoutes