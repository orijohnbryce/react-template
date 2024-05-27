import axios from "axios";
import appConfig from "../config";

export async function apiCall(url, method = "GET", headers = {}, body = null) {
  try {
    const res = await axios(appConfig.serverUrl + url, {
      method,
      headers,    
      data: body
    });
      if (res.status >= 200 && res.status < 300) {        
          return {
              status: true,
              data: res.data
          };
    } else {
      console.log(`wrong response from server: ${res.status}.`);
      return {
        status: false,
        data: res.data
    };
    }
  } catch (error) {
      console.log(error);
    const msg =
      "Error at register! info: " + error.response
        ? error.response.data
        : error;
    alert(msg);
    return {
        status: false,
        data: error.response ?  error.response.data : error
    };
  }
}
