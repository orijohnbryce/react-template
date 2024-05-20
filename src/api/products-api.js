import ProductModel from "../models/product-model";

export async function getProducts() {
    const res = await fetch("http://localhost:3030/api/products/")
    const products = await res.json()

    const resProducts = products.map((p) =>
        new ProductModel(p.id, p.name, p.price, p.stock, p.imageUrl))

    return resProducts;
}