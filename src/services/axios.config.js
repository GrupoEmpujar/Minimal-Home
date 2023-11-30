import axios from 'axios';

const URL = 'http://localhost:7777/product/v1';


export const  axiosInstance = axios.create({
    baseURL: URL
});