import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../asecets/pu-logo-1.png";
import auth from "../../../firebase.init";

const Navber = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  const menuitem = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/faculty">Faculty</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashbord">Dashbord</Link>
        </li>
      )}
      {/* <li><Link to="/portfolio">My Portfolio</Link></li> */}
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        {user ? (
          <button class="btn btn-ghost text-lg" onClick={handleSignOut}>
            Log Out
          </button>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-error text-white justify-around md:justify-around">
      <div className=" ">
        <div className="dropdown">
          <label
            tabindex="0"
            className="btn lg:hidden btn-circle swap swap-rotate"
          >
            <svg
              class="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              class="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <ul
            tabindex="0"
            style={{ color: "#042488" }}
            className="bg-error font-bold menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 text-xl"
          >
            {menuitem}
          </ul>
        </div>
        <div className="flex items-center lg:pl-8 pl-4">
          <img src={logo} alt="LOGO" style={{ width: 50 }} />
          <p className="pl-4 font-bold text-3xl" style={{ color: "#E1342D" }}>
            Presidency <span style={{ color: "#042488" }}>University</span>
          </p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal font-bold text-xl pr-8"
          style={{ color: "#042488" }}
        >
          {menuitem}
        </ul>
      </div>
      {user ? (
        <div class="avatar placeholder py-0">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
            {user.photoURL ? (
              <img src={user?.photoURL} alt="" />
            ) : (
              <img
                src="https://findicons.com/files/icons/61/dragon_soft/128/user.png"
                alt=""
              />
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navber;
