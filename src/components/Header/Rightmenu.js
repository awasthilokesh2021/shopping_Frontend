import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Divider } from "@mui/material";
import { Logincontext } from "../context/Providercontext";

const Rightmenu = ({ closehandle }) => {
  const { account } = useContext(Logincontext);

  return (
    <div className="w-64 p-4 bg-white h-full shadow-md">
      <div className="flex flex-col items-center mb-6">
        {account ? (
          <Avatar className="bg-yellow-500 text-black mb-2" title={account.fname.toUpperCase()}>
            {account.fname[0].toUpperCase()}
          </Avatar>
        ) : (
          <Avatar className="bg-gray-300 mb-2" />
        )}
        {account && <h3 className="text-lg font-semibold">Hello, {account.fname.toUpperCase()}</h3>}
      </div>

      <nav className="flex flex-col gap-4 text-gray-700">
        <NavLink
          to="/"
          onClick={closehandle}
          className="hover:text-blue-600 transition"
        >
          Home
        </NavLink>

        <NavLink
          to="/"
          onClick={closehandle}
          className="hover:text-blue-600 transition"
        >
          Category
        </NavLink>

        <Divider />

        {account ? (
          <NavLink
            to="/bynow"
            onClick={closehandle}
            className="hover:text-blue-600 transition"
          >
            Your Order
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            onClick={closehandle}
            className="hover:text-blue-600 transition"
          >
            Your Order
          </NavLink>
        )}

        <NavLink
          to="/settings"
          onClick={closehandle}
          className="hover:text-blue-600 transition"
        >
          Settings
        </NavLink>

        <NavLink
          to="/login"
          onClick={closehandle}
          className="hover:text-blue-600 transition"
        >
          Sign In
        </NavLink>
      </nav>
    </div>
  );
};

export default Rightmenu;

