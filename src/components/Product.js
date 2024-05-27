const Product = ({ p }) => {
  return (
    <div style={{ border: "black solid 1px", padding: '0% 3%'}}>
      <h4> ID: {p.id} </h4>
      <h4> {p.name}</h4>
      <p> Price: {p.price}</p>
      <img src={p.imageUrl} alt=""/>
    </div>
  );
};

export default Product;
