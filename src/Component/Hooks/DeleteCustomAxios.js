import axios from "axios";

const testUrl = `http://localhost:5000/api/v1`
    const mainUrl = `https://pu-server-1.onrender.com/api/v1`
    const token = JSON.parse(localStorage.getItem('authToken'))?.token
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    
const DeleteCustomAxios = async (url, data) => {
    

    try {
        const response = await axios.delete(`${mainUrl}${url}`,{headers});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default DeleteCustomAxios;