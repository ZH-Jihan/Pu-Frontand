import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../Hooks/Admin";

const Dashbord = () => {
    const [user] = useAuthState(auth);
     const [admin] = useAdmin(user)
  return (
    <div class="flex flex-col lg:flex-row">
      <div class="flex w-2/5 md:w-1/4 bg-white">
        <div class="mx-auto py-10">
          <h1 class="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150">
            PU <br></br>Dashbord
          </h1>
          <ul>
            <li>
              
            </li>
            {!admin && (<> <Link to='/dashbord/myorder' class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="font-semibold">My Class</span>
            </Link>
            <Link to='/dashbord/myreview' class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span class="font-semibold">Add Review</span>
            </Link></>)}
            <Link to='/dashbord/myprofile' class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span class="font-semibold">My Profile</span>
            </Link>
            { admin && (
              <>
                <Link to='/dashbord/makeadmin' class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span class="font-semibold">Make Admin</span>
            </Link>
            <Link to='/dashbord/allorder' class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span class="font-semibold">All Faculty Review</span>
            </Link>
            <Link to='/dashbord/addallinfo' class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span class="font-semibold">Add All Info</span>
            </Link>
            <Link to='/dashbord/manageproduct' class="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <span class="font-semibold">Manage Faculty</span>
            </Link>
              </>
            )
            }
            <button class="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">
              Learn
            </button>
          </ul>
        </div>
      </div>
      <main class=" min-h-screen w-full">
        <nav class="flex lg:justify-end justify-center px-10 bg-white py-6">
          
          <div class="flex items-center gap-2">
            {user.photoURL ? <img class="w-8 rounded-full" src={user?.photoURL} alt="" /> : <img class="w-8 rounded-full" src="https://findicons.com/files/icons/61/dragon_soft/128/user.png" alt="" />
        }
            <p>{user.displayName}</p>
          </div>
        </nav>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Dashbord;
