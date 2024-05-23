import axios from "axios";
import appConfig from "../config";

export async function register(user) {
    try {
      
        const resJ = await axios({
            method: "POST",
            url: appConfig.serverUrl + "register",
            headers: {},
            data: user
        })  
    // const res = await fetch(appConfig.serverUrl + "register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: user,
    // });

    // const resJ = await res.json();
    console.log(resJ);
    return resJ;
  } catch (error) {
      console.log("Error!");
      console.log(error);
  }
}
