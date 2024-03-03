import axios from "axios";
import { useEffect, useState } from 'react';
const useFatchData = (url) => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([])
    const [error,setError] = useState(null);
    const token = JSON.parse(localStorage.getItem('authToken'))?.token
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    useEffect(()=>{
        
        setLoading(true);
            axios
            .get(url,{headers})
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