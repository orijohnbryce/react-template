
const Product = ({p}) => {    
  return (
      <div>
          <h4> {p.name} - {p.id}</h4>
          <p> {p.price}</p>
    </div>
  )
}

export default Product