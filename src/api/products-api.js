import apiCall from "./apiCall";

export async function getProducts() {
    
    const res = await apiCall("products", "GET")
    if (res.status) {      
        return  res.data
    } else {
        alert("Can't get products right now. please try latter.")
        return []
    }
}

export async function addProduct(product) {     
    const res = await apiCall("products", "POST", {}, product)
    if (res.status) {        
        return res.data 
    } else {        
        alert("Can't add products right now. please try latter. more info: " + res.data)
        return false
    }
}

export async function deleteProduct(id) {
    const res = await apiCall("products/"+id, "DELETE");
    
    if (!res.status){        
        alert("Can't add products right now. please try latter. more info: " + res.data)
        return false
    } 
    return true;

}