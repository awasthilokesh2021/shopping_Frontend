import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Divider } from "@mui/material";

const Signup = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata((pre) => ({ ...pre, [name]: value }));
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    try {
      const res = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname, email, mobile, password, cpassword }),
        credentials: "include",
      });

      const data = await res.json();
      if (res.status === 422 || !data) {
        toast.error("Invalid Details 👎!", { position: "top-center" });
      } else {
        setUdata({ fname: "", email: "", mobile: "", password: "", cpassword: "" });
        toast.success("Registration Successfully done 😃!", { position: "top-center" });
      }
    } catch (error) {
      console.log("signup page" + error.message);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h1>

        <form method="POST" onSubmit={senddata} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="fname"
              id="name"
              value={udata.fname}
              onChange={adddata}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={udata.email}
              onChange={adddata}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              value={udata.mobile}
              onChange={adddata}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={udata.password}
              onChange={adddata}
              placeholder="At least 6 characters"
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label htmlFor="passwordg" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              id="passwordg"
              value={udata.cpassword}
              onChange={adddata}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>

          <Divider className="!my-4" />

          <div className="text-center">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <NavLink to="/login" className="text-blue-600 hover:underline">Sign In</NavLink>
          </div>
        </form>

        <ToastContainer />
      </div>
    </section>
  );
};

export default Signup;

