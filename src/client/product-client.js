import ProductModel from "../models/product-model";
import { apiCall } from "./api";

export async function getAllProducts() {
  const res = await apiCall("products")
  if (res.status) {
    return res.data.map((p) => new ProductModel(p));
  } else {
    return []
  }
}
// export async function getAllProducts() {
//   try {
//     const res = await axios.get(appConfig.serverUrl + "products");
//     const products = res.data.map((p) => new ProductModel(p));
//     return products;
//   } catch (error) {
//     console.log(error);
//     alert("Error at getAllProducts! info:" + error);
//     return [];
//   }
// }

export async function deleteProduct(id) {
  const res = await apiCall("products/" + id, 'DELETE')
  if (res.status) {
    console.log(`Product ${id} deleted!`);
    return true;
  } else {
    return false;
  }
}
// export async function deleteProduct(id) {
//   try {
//     const res = await axios.delete(appConfig.serverUrl + `products/${id}`, {
//       method: "DELETE",
//     });
//     console.log(res);
//     return res;
//   } catch (error) {
//     alert("Error at deleteProduct! info:" + error);
//     return false;
//   }
// }

export async function addProduct(product) {  
  const res = await apiCall("products", 'POST', {}, product)
  if (res.status) {
    console.log(`Product ${res.data.id} created!`);
    return true;
  } else {
    return false;
  }  
}
// export async function addProduct(product) {
//   try {
//     const resJ = await axios({
//       method: "POST",
//       url: appConfig.serverUrl + "products",
//       headers: {},
//       data: product,
//     });
//     return resJ;
//   } catch (error) {
//     if (error.response) {
//       alert("Error at addProduct! info:" + error.response.data);
//       console.log(error.response.data);
//     } else {
//       alert("Error at addProduct! info:" + error);
//       console.log(error);
//     }
//     return false;
//   }
// }
