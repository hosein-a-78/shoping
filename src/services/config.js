import axios from "axios";

//create baseurl for the services or fake storeapi 
//"https://fakestoreapi.com" in url az /products irad migirad
const api = axios.create({ baseURL: "https://fakestoreapi.com" })


api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default api;