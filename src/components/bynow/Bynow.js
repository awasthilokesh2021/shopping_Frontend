import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";

const Bynow = () => {
  const [cartdata, setCartdata] = useState([]);

  const getdatabuy = async () => {
    try {
      const res = await fetch("https://shopping-backend-hsr3.onrender.com/cartdetails", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (res.status !== 201 || !data?.carts) {
        alert("No data available");
      } else {
        setCartdata(data.carts);
      }
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    }
  };

  useEffect(() => {
    getdatabuy();
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 py-8 px-4">
      {cartdata.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left section */}
          <div className="lg:col-span-2 bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
            <p className="text-sm text-gray-600 mb-2">Select all items</p>
            <span className="block text-right font-semibold text-gray-700">Price</span>
            <Divider className="my-2" />

            {cartdata.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-4 py-4 border-b">
                <img
                  src={item.url}
                  alt="imgitem"
                  className="w-32 h-32 object-contain rounded"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title.longTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.title.shortTitle}</p>
                  <h3 className="text-lg text-red-600 font-bold mt-1">
                    ₹{item.price.cost}.00
                  </h3>
                  <p className="text-sm text-gray-500">Usually dispatched in 8 days.</p>
                  <p className="text-sm text-gray-500">Eligible for FREE Shipping</p>
                  <img
                    src="https://1.bp.blogspot.com/-EJEEMv9M8pg/Tr8kbhqODyI/AAAAAAAACyU/41p1iPgnUxo/s1600/SandR.jpg"
                    alt="logo"
                    className="w-24 mt-2"
                  />
                  <Option deletedata={item.id} get={getdatabuy} />
                </div>

                <div className="text-right md:w-28">
                  <h3 className="text-lg font-semibold text-gray-800">
                    ₹{item.price.cost}.00
                  </h3>
                </div>
              </div>
            ))}

            <Subtotal item={cartdata} />
          </div>

          {/* Right section */}
          <div className="bg-white p-6 rounded shadow">
            <Right item={cartdata} />
          </div>
        </div>
      ) : (
        <div className="text-center py-16 text-gray-600">
          <h2 className="text-xl font-semibold">Your cart is empty.</h2>
          <p className="mt-2">Start adding some products to see them here.</p>
        </div>
      )}
    </section>
  );
};

export default Bynow;



