import axios from "axios";
import { appConfig } from "../config";

export default async function apiCall(url, method, headers = {}, data = null) {

    const fullUrl = appConfig.serverUrl + url;

    const options = {
        method,
        headers,
        data,
    }
    try {
        const res = await axios(fullUrl, options)
        
        return {
            status: true,
            data: res.data
        }

    } catch (error) {                
        return { status: false,
                 errorMessage: error.message, 
                 data: error.response?.data }
    }
}