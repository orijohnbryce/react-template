import appConfig from "../config";
import ProductModel from "../models/product-model";

export async function getAllProducts() {
    const res = await fetch(appConfig.serverUrl + "products")
    const resJ = await res.json()
    
    const products = resJ.map(p=>new ProductModel(p))
    
    return products
}

export async function deleteAllProducts() {
    const res = await fetch(appConfig.serverUrl + "products")
    const resJ = await res.json()

    await fetch(appConfig.serverUrl + "products/" + resJ[0].id, {method: 'DELETE'})
    // resJ.forEach(p => {
    //     fetch(appConfig.serverUrl + "products/" + p.id, {method: 'DELETE'})
    // });
}
