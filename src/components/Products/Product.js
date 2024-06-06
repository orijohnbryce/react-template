const Product = ({p}) => {
  return (
    <div className="product">
        <p> {p.id} - {p.name} </p>        
        <p> price: {p.price}</p>
        <p> stock: {p.stock}</p>
        <img src={p.imageUrl} alt='not found' />
    </div>
  )
}

export default Product