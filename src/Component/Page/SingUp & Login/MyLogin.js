import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
const url = "https://pu-server-side-xf9f.onrender.com/api/v1/user/login";

const MyLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const handleLogin = async (event) => {
    event.preventDefault();

    const loginUser = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post(url, loginUser);

      const token = response?.data.token;
      Cookies.set("accessToken", token);
      const expirationTime = new Date().getTime() + 180 * 60 * 1000;
      const tokenData = { token, expirationTime };

      if (token) {
        localStorage.setItem("authToken", JSON.stringify(tokenData));
        toast.success(response?.data?.message);
        navigate(from, { replace: true });
      }

      // Cookies.set('token', response?.data?.token , { expires: 7, secure: true});
      //clear state and controlled inputs
      event.target.reset();
    } catch (err) {
     
      if (!err?.response) {
        toast.error("No Server Response");
      } else if (err.response?.status === 409) {
        toast.error("Username Taken");
      } else {
        toast.error(err?.response?.data?.error);
      }
    }
  };
  
  return (
    <section class="bg-blueGray-50">
      <div class="w-full lg:w-4/12  mx-auto lg:pt-8">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6 pb-0">
            <div class="text-center mb-2">
              <h6 class="text-blueGray-500 text-3xl font-bold">Log In PU MIS</h6>
            </div>
                    <img
                      src="https://i.ibb.co/6XHn9Dm/pu-logo-1-1.png"
                      class="h-32  w-32 m-auto "
                      alt="Windster Logo"
                    />
                    {/* <span class="self-center whitespace-nowrap">PU MIS</span> */}
            {/* <SocileLogin></SocileLogin> */}
            <div class="divider">With</div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleLogin} className="pb-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div>
                <a class="link text-sm text-blue-700 hover:underline cursor-pointer">
                  Forgot password?
                </a>
              </div>
              <div class="text-center mt-6">
                <button
                  type="submit"
                  class="btn text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                >
                  {" "}
                  Log In{" "}
                </button>
              </div>
            </form>
            <span class="ml-2">
              You don't have an account? Please Contact 
              <h1 to="#" class="text-base ml-2 ">
                 Kamal Ahmed - Consultant<br/> <span className="text-blue-400">consultant_kamal@pu.edu.bd</span> <br/>01986868585
              </h1>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyLogin;
