import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const CheckUser = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <div class="font-sans">
        <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div class="relative sm:max-w-sm w-full">
            <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <form method="#" action="#" class="mt-10">
                <div class="mt-7">
                  <button 
                  onClick={() => loginWithRedirect()}
                  class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Login
                  </button>
                </div>
                <div class="mt-7">
                  <button 
                  onClick={() => loginWithRedirect()}
                  class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    SingUp
                  </button>
                </div>

                <div class="flex mt-7 items-center text-center">
                  <hr class="border-gray-300 border-1 w-full rounded-md" />
                  <label class="block font-medium text-sm text-gray-600 w-full">
                    Accede con
                  </label>
                  <hr class="border-gray-300 border-1 w-full rounded-md" />
                </div>

                <div class="flex mt-7 justify-center w-full">
                  <button class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Facebook
                  </button>

                  <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Google
                  </button>
                </div>

                <div class="mt-7">
                  <div class="flex justify-center items-center">
                    <label class="mr-2">¿Eres nuevo?</label>
                    <a
                      href="#"
                      class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Crea una cuenta
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckUser;
