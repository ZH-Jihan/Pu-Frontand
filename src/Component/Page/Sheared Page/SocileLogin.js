import React, { useEffect } from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Token from '../../Hooks/Token';
import Loading from './Loading';

const SocileLogin = () => {
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = Token(user);
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    useEffect( () =>{
      if (token) {
          navigate(from, { replace: true });
      }
  }, [token, from, navigate])
  
   

    if (loading) {
      return <Loading></Loading>;
    }
  
    if (error) {
      toast.error(error?.message)
    }
  
    if (user) {
      navigate(from, { replace: true });
    }
    return (
        <div class="btn-wrapper text-center">
        <button class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
          <img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"/>Github </button>
        <button onClick={()=>{signInWithGoogle()}} class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
          <img alt="..." class="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"/>Google</button>
      </div>
    );
};

export default SocileLogin;