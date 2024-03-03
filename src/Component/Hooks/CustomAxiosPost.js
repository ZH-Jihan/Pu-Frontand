import axios from 'axios';
const testUrl = `http://localhost:5000/api/v1`
    const mainUrl = `https://pu-server-1.onrender.com/api/v1`
const CustomAxiosPost = async (url, data) => {
    const token = JSON.parse(localStorage.getItem('authToken'))?.token
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    try {
        const response = await axios.post(`${testUrl}${url}`, data, {headers});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default CustomAxiosPost;