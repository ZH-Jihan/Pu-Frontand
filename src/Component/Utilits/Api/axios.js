import axios from 'axios';
const BASE_URL = 'https://pu-server-side.onrender.com/api/v1';
const BASE_URL_Test = 'http://localhost:5000/api/v1';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});