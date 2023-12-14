import { useEffect, useState } from "react";

const Token = user =>{
    const [token, setToken] = useState('');
    useEffect( () =>{
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`https://pu-server-1.onrender.com/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}

export default Token;