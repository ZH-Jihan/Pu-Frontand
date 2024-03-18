import axios from "axios";
import { useEffect, useState } from 'react';
const useFatchData = (url) => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([])
    const [error,setError] = useState(null);
    const token = JSON.parse(localStorage.getItem('authToken'))?.token
    const textUrl = "http://localhost:5000/api/v1"
    const serverUrl = "https://pu-server-1.onrender.com/api/v1"
    
    useEffect(()=>{
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        setLoading(true);
            axios
            .get(`${serverUrl}${url}`,{headers})
            .then((response)=>{
                setData(response.data);
            })
            .catch((error)=>{
                setError(error);
            })
            .finally(()=>{
                setLoading(false)
            })
    },[url,token])
    return {data,setData,loading,error}
};

export default useFatchData;