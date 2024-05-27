import apiCall from "./apiCall";

export async function getProducts() {
    
    const res = await apiCall("products", "GET")
    if (res.status) {
        console.log(res.data);
        return  res.data
    } else {
        alert("Can't get products right now. please try latter.")
        return []
    }
}

export async function addProduct(product) { 
    console.log(product);   
    const res = await apiCall("products", "POST", {}, product)
    if (res.status) {
        return res.data
    } else {
        if ("")
        alert("Can't add products right now. please try latter.")
        return false
    }
}