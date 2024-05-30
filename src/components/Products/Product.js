import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../api/products-api"

const Product = () => {
    
    const [p, setP] = useState()
    
    const params = useParams()

    useEffect(()=>{
        getProducts(params.id).then((res)=>{setP(res)})
    }, [])

  return (
    <div>
        <p> {p?.id} - {p?.name} </p>        
        <p> price: {p?.price}</p>
        <p> stock: {p?.stock}</p>
        <img src={p?.imageUrl} alt='not found' />
    </div>
  )
}

export default Product