import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/actions";

import Banner from "./Banner";
import Slide from "./Slide";
import Homebanner from "./Homebanner";

const Maincomponent = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getproductsdata);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="bg-gray-50">
      {/* Top Banner */}
      <div className="w-full">
        <Banner />
      </div>

      {/* Product Slide */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Slide products={products} />
      </div>

      {/* Bottom Banner */}
      <div className="w-full mt-6">
        <Homebanner />
      </div>
    </div>
  );
};

export default Maincomponent;
