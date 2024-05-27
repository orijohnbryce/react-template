import { apiCall } from "./api";

export async function getCategories(
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxNiwiZmlyc3ROYW1lIjoiZGF2aWQiLCJsYXN0TmFtZSI6ImRhdmlkIiwiZW1haWwiOiJkYXZpZEBkYXZpZC5jb20iLCJyb2xlIjoiVXNlciJ9LCJpYXQiOjE3MTY3OTQ3NTIsImV4cCI6MTcxNjgxMjc1Mn0.xsWR4mbuJwhXDyHXSGE0E9vRIzUpms1fiing6WRecT4")
{
    const res = await apiCall("categories", "GET",
        { "Authorization": `bearer ${token}`})    
    
    if (res.status) {        
        return res.data;
    } else {
        console.log("can't get categories" + res);
        return false;
    }    
}