import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, tokenExpireChek } from "./myAuth";

const MyRequireAuth = ({children}) => {
  const navigate = useNavigate();
const [check,setCheck] = useState(false)
  useEffect(() => {
    const checkAuthentication = async () => {
      if (!isAuthenticated() || tokenExpireChek() === false) {
        // Redirect to the login page if not authenticated
        return navigate("/mylogin");
      } 
      setCheck(true)
        // Check the user's role and navigate accordingly
        // const userRole = getUserRole();

        // if (roles && !roles.includes(userRole.role)) {
        //     // Redirect to unauthorized page if roles are specified and user role doesn't match
        //    navigate("/unothorize");
        //   }else{
            
        //   }
      
    };
    checkAuthentication()
  }, [navigate,children]);
  
  if (check === true) {
    return children
  }

  // Render the component if authenticated and has the correct role
  
};

export default MyRequireAuth;
