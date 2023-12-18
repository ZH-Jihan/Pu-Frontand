import React from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Token from "../../Hooks/Token";
import Loading from "../Sheared Page/Loading";

const CreateUser = () => {
  
  const navigate = useNavigate();
  
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token] = Token(user)
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    
    
  };

  if (loading) {
    return <Loading></Loading>;
  }
  if (error || updateError) {
    toast.error(error?.message)
    }
  return (
    <div>
      <div class=" bg-gray-100 py-6 flex flex-col justify-center ">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto lg:w-2/4 m-auto">
          <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div class="max-w-md mx-auto">
              <div class="flex items-center space-x-5">
                <div class="h-8 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 class="leading-relaxed">Create A User</h2>
                </div>
              </div>
              <form onSubmit={handleRegister} >
              <div class="divide-y divide-gray-200">
                <div class="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="flex flex-col">
                    <label class="leading-loose">User Name</label>
                    <input
                      type="text"
                      name="name"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Name"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose">User Email</label>
                    <input
                      type="email"
                      name="email"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="ex: demo@gmail.com"
                    />
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose">User Password</label>
                    <input
                      type="text"
                      name="password"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="password"
                    />
                  </div>
                </div>
                <div class="pt-4 flex items-center space-x-4">
                  <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                    <svg
                      class="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>{" "}
                    Cancel
                  </button>
                  <button type="submit" class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                    Create
                  </button>
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

export default CreateUser;
