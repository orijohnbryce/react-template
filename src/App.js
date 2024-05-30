import { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";
import DeleteProduct from "./components/DeleteProduct/DeleteProduct";

function App() {

    const [whatToShow, setWhatToShow] = useState("products")
    
    const navToProducts = ()=>{
        setWhatToShow("products")
    }

  return (
    <div>
      <button style={{backgroundColor: whatToShow==='products'? 'red' : 'white'}} 
        onClick={()=>{setWhatToShow("products")}}> Products </button>      
      <button style={{backgroundColor: whatToShow==='add-product'? 'red' : 'white'}} 
        onClick={()=>{setWhatToShow("add-product")}}> Add-Product </button>
      <button style={{backgroundColor: whatToShow==='delete-product'? 'red' : 'white'}} 
        onClick={()=>{setWhatToShow("delete-product")}}> Delete product </button>


      {whatToShow === "products" && <Products/>}
      {whatToShow === "add-product" && 
            <AddProduct onSuccess={navToProducts}/>}
      {whatToShow === "delete-product" 
            && <DeleteProduct 
            onDeleted={navToProducts}/>}
    </div>
  );
}

export default App;
