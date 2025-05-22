import React from "react";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";

const Slide = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center text-gray-500 py-10">No products available</p>;
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-4 md:px-6">
        <h3 className="text-xl font-semibold text-gray-800">Products</h3>
      </div>

      <Divider className="my-4" />

      <div className="flex gap-4 overflow-x-auto px-4 md:px-6 pb-4 scrollbar-hide">
        {products.map((product) => (
          <NavLink
            to={`/getproducts/${product.id}`}
            key={product.id}
            className="flex-shrink-0 w-48 md:w-56 bg-white shadow rounded p-3 hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={product.url}
                alt="product"
                className="h-40 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-800 line-clamp-1">
                {product.title.shortTitle}
              </p>
              <p className="text-sm text-green-600 font-semibold">
                {product.discount}
              </p>
              <p className="text-xs text-gray-500 line-clamp-1">
                {product.tagline}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Slide;


