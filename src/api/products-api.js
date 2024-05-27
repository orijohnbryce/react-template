import axios from "axios";


export async function getProducts() {

    try {
        
        const url = "http://localhost:3030/api/products/";
    
        const response = await axios.get(url)
                
        console.log(response);
    
        return response.data;

    } catch (error) {
        console.log(error.message);
        alert(`Error! info: ${error}`)
    }
}

export async function addProduct(product) {
    
    const url = "http://localhost:3030/api/products";
    const method = "POST";
    const data = product;
    // const headers = {'Content-Type': 'application/json', 'Authorization': "..."};
    const headers = {};

    const options = {
        method: method,
        data: data,
        headers: headers,
    }

    try {        
        const res = await axios(url, options)
        console.log(res.data);

    } catch (error) {
        console.log(error.message);
        alert("ERROR!!")
    }

    console.log(product);
}