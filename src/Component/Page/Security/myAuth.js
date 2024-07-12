import Cookies from "js-cookie";




  function tokenExpireChek (){
    const token = localStorage.getItem('authToken');
    if (token) {
        try {
          const tokenData = JSON.parse(token)
    
          if (tokenData.expirationTime && new Date().getTime() < tokenData.expirationTime) {
            // Token is still valid
           
            return true;
          } else {
            // Token has expired or has no valid expiration time
            Cookies.remove("accessToken")
            localStorage.removeItem('authToken');
           
          }
        } catch (error) {
          // Handle decoding error, e.g., invalid token format
          console.error('Error decoding token:', error.message);
        }}
       
  return false;
}

function  isAuthenticated() {
  // Check if the user is authenticated
  const token = JSON.parse(localStorage.getItem('authToken'))?.token
  return !!token;
};
   
    const  getUserRole =  () => {
        // Assume your authentication token contains a 'role' claim
        const token2 =  JSON.parse(localStorage.getItem('authToken')).token
        
        if (token2) {
            try {
                const decodedData = JSON.parse(atob(token2?.split('.')[1]));
                
              return decodedData;
            } catch (error) {
               
            }
        }
        return null;
      };

    

export { getUserRole, isAuthenticated, tokenExpireChek };

