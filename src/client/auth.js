import { saveUserToStorage } from "../utils/helpers";
import { apiCall } from "./api";

export async function register(user) {
  const res = await apiCall("register", "POST", {}, user);
  if (res.status) {
    return res.data; // token
  } else {
    return false;
  }   
}
// export async function register(user) {
//   try {
//     const res = await axios({
//       method: "POST",
//       url: appConfig.serverUrl + "register",
//       data: user,
//     });
//     // console.log(res);
//     // console.log(res.data);
//     return res.data;
//   } catch (error) {
//     const msg =
//       "Error at register! info: " + error.response
//         ? error.response.data
//         : error;
//         // console.log(msg);
//     alert(msg);
//     return false;
//   }
// }

export async function login(credentials) {
  const res = await apiCall("login", "POST", {}, credentials);

  if (res.status) {    
    // res.data is the WJT token
    
    saveUserToStorage(res.data)
    return res.data; 
  } else {
    return false;
  }
}