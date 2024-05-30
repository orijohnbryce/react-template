import React, { useState } from 'react'
import { deleteProduct } from '../../api/products-api'

const DeleteProduct = ({onDeleted}) => {

    const [id, setId] = useState()


    const handleSubmit = async ()=>{

        // todo:  ensure id is not empty, and contains a integer

        const res = await deleteProduct(id);        
        if (res){
            alert("Product deleted successfully!")
            // navigate to products page:
            onDeleted()
        }else {
            
        }

    }
  return (
    <div>
        <input value={id} onChange={(e)=>{setId(e.target.value)}} placeholder='Enter ID to delete'/>
        <br/>
        <button onClick={handleSubmit}> DELETE </button>
    </div>
  )
}

export default DeleteProduct