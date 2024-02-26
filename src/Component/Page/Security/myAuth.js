import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const token = Cookies.get("userInfo");

function  isAuthenticated() {
    // Check if the user is authenticated
    const token = Cookies.get("userInfo")
    return !!token;
  };

  function tokenExpireChek (){
    if (token) {
        try {
          const decodedToken = jwtDecode(token);
    
          if (decodedToken.exp * 1000 < Date.now()) {
            // Token has expired
            Cookies.remove('userInfo'); // Remove the expired token fromlocalStorage// Redirect to the login page
            return true
          }
          else{
            return false
          }
        } catch (error) {
          // Handle decoding error, e.g., invalid token format
          console.error('Error decoding token:', error.message);
        }}
}


   
    const  getUserRole =  () => {
        // Assume your authentication token contains a 'role' claim
        const token2 =  Cookies.get("userInfo")
        if (token2) {
            try {
                const decodedData = JSON.parse(atob(token2?.split('.')[1]));
              return decodedData;
            } catch (error) {
                console.log(error);
            }
        }
        return null;
      };

    

export { getUserRole, isAuthenticated, tokenExpireChek };

