import axios from 'axios';
import { useEffect, useState } from 'react';

const useFatchData = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
            axios
            .get(url)
            .then((response)=>{
                setData(response.data);
            })
            .catch((error)=>{
                setError(error);
            })
            .finally(()=>{
                setLoading(false)
            })
    },[url])
    return {data,setData,loading,error}
};

export default useFatchData;