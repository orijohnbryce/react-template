import { useState } from "react";
import { getProducts } from "./api/products-api";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";

function App() {

    const [whatToShow, setWhatToShow] = useState("products")
    

  return (
    <div>
      <button style={{backgroundColor: whatToShow==='products'? 'red' : 'white'}} 
        onClick={()=>{setWhatToShow("products")}}> Products </button>      
      <button style={{backgroundColor: whatToShow==='add-product'? 'red' : 'white'}} 
        onClick={()=>{setWhatToShow("add-product")}}> Add-Product </button>
      <button style={{backgroundColor: whatToShow==='delete-product'? 'red' : 'white'}} 
        onClick={()=>{setWhatToShow("delete-product")}}> Delete product </button>


      {whatToShow === "products" && <Products/>}
      {whatToShow === "add-product" && <AddProduct/>}
      {whatToShow === "delete-product" && <div> Delete product </div>}


    </div>
  );
}

export default App;
