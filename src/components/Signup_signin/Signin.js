import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Logincontext } from "../context/Providercontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const { setAccount } = useContext(Logincontext);
  const [logdata, setData] = useState({ email: "", password: "" });

  const adddata = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }));
  };

  const signindata = async (e) => {
    e.preventDefault();
    const { email, password } = logdata;

    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        toast.error("Invalid Details 👎!", { position: "top-center" });
      } else {
        setAccount(data);
        setData({ email: "", password: "" });
        toast.success("Login Successfully done 😃!", { position: "top-center" });
      }
    } catch (error) {
      console.log("login page" + error.message);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h1>

        <form onSubmit={signindata} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={logdata.email}
              onChange={adddata}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="At least 6 characters"
              value={logdata.password}
              onChange={adddata}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">New to Shopping App?</p>
          <NavLink
            to="/register"
            className="inline-block mt-2 text-blue-600 hover:underline"
          >
            Create your Shopping Account
          </NavLink>
        </div>

        <ToastContainer />
      </div>
    </section>
  );
};

export default Signin;
