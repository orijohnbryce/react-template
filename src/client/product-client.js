import axios from "axios";
import appConfig from "../config";
import ProductModel from "../models/product-model";

export async function getAllProducts() {
    const res = await fetch(appConfig.serverUrl + "products")
    const resJ = await res.json()
    
    const products = resJ.map(p=>new ProductModel(p))
    
    return products
}

export async function deleteFirstProduct() {
    const res = await fetch(appConfig.serverUrl + "products")
    const resJ = await res.json()

    await fetch(appConfig.serverUrl + "products/" + resJ[0].id, {method: 'DELETE'})
    // resJ.forEach(p => {
    //     fetch(appConfig.serverUrl + "products/" + p.id, {method: 'DELETE'})
    // });
}

export async function addProduct(product) {
    try {
        const resJ = await axios({
            method: "POST",
            url: appConfig.serverUrl + "products",
            headers: {},
            data: {"name": 'David', price: 123, stock: 4}
        })        
        console.log(resJ);
        return resJ;
      } catch (error) {
          alert("Error!");
          console.log(error);
      }
}