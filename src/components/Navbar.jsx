import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { use } from "react";
import { useState } from "react";

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  return (
    <div className="w-full h-20 px-20 bg-gray-100 flex justify-between items-center">
      <div className="text-2xl font-semibold">TO-DO's</div>
      <div></div>
      <div className="flex items-center gap-x-3 relative ">
        {user ? (
          <>
            <div>{"Hi, " + user?.name}</div>
            <div
              className="w-12 h-12 rounded-full bg-white overflow-hidden cursor-pointer "
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                src={`${user?.picture}`}
                alt=""
                className="w-full h-full obj-fit"
              />
              {profileOpen && (
                <div className="w-40 min-h-20  rounded-md bg-white absolute top-14 right-0 shadow-lg">
                  <ul className="px-4 py-2 capitalize text-gray-400 ">
                    <li className="py-1 hover:text-black cursor-pointer">
                      <i className="bi bi-pencil-square pr-2"></i>edit
                    </li>
                    <li className="py-1 hover:text-black cursor-pointer">
                      <i className="bi bi-person-square pr-2"></i>profile
                    </li>
                    <li
                      className="py-1 hover:text-black cursor-pointer"
                      onClick={() => logout()}
                    >
                      <i className="bi bi-box-arrow-left pr-2"></i>logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <button
            className="px-4 py-1 border rounded-md hover:bg-black hover:text-white cursor-pointer"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
``;

export default Navbar;
