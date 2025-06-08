import React, { useContext, useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Logincontext } from "../context/Providercontext";
import Rightmenu from "./Rightmenu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Navbar = () => {
  const { account, setAccount } = useContext(Logincontext);
  const [open, setOpen] = useState(null);
  const [dropen, setDropen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => setOpen(event.currentTarget);
  const handleClose = () => setOpen(null);
  const handelopen = () => setDropen(true);
  const handleClosedr = () => setDropen(false);

  const validuser = async () => {
    try {
      const res = await fetch("https://shopping-backend-hsr3.onrender.com/validuser", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (res.status === 201) {
        setAccount(data);
      }
    } catch (err) {
      console.error("User validation failed", err);
    }
  };

  useEffect(() => {
    validuser();
  }, []);

  const logoutuser = async () => {
    try {
      const res = await fetch("https://shopping-backend-hsr3.onrender.com/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (res.status === 201) {
        setAccount(false);
        setOpen(false);
        toast.success("User logged out!", { position: "top-center" });
        navigate("/");
      }
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center md:hidden lg:hidden gap-4">
          <IconButton className="" onClick={handelopen}>
            <MenuIcon style={{ color: "white" }} />
          </IconButton>

          <Drawer anchor="left" open={dropen} onClose={handleClosedr}>
            <Rightmenu closehandle={handleClosedr} />
          </Drawer>

        </div>
        
        
          <NavLink to="/" className="text-2xl font-bold">
            <span className="text-yellow-300">SHOPPING</span>-APP
          </NavLink>

        <div className="hidden md:flex w-1/2 items-center relative">
          <input
            type="text"
            placeholder="Search Your Products"
            className="w-full p-2 rounded border border-gray-300 text-black"
          />
          <i className="fas fa-search absolute right-3 text-gray-500"></i>
        </div>

        <div className="flex items-center gap-4">
          <NavLink to="/login" className="hidden md:inline text-white hover:text-yellow-300">
            Sign In
          </NavLink>

          <NavLink to={account ? "/bynow" : "/login"} className="relative">
            <Badge badgeContent={account?.carts?.length || 0} color="secondary">
              <i className="fas fa-shopping-cart text-xl"></i>
            </Badge>
            <span className="ml-1 hidden md:inline">Cart</span>
          </NavLink>

          <Avatar
            onClick={handleClick}
            className="cursor-pointer bg-yellow-400 text-black"
            title={account?.fname?.toUpperCase() || "A"}
          >
            {account ? account.fname[0].toUpperCase() : "A"}
          </Avatar>

          <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            {account && <MenuItem onClick={logoutuser}>Logout</MenuItem>}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
