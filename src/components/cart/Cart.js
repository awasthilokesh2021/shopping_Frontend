import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Divider } from "@mui/material";
import axios from "axios";
import { Logincontext } from "../context/Providercontext";

const Cart = () => {
  const { account, setAccount } = useContext(Logincontext);
  const { id } = useParams();
  const [inddata, setIndedata] = useState(null);
  const history = useNavigate();

  const getinddata = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/getproducts/${id}`);
      setIndedata(res.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
      alert("No data available");
    }
  };

  useEffect(() => {
    setTimeout(getinddata, 1000);
  }, [id]);

  const addtocart = async (id) => {
    try {
      const res = await axios.post(
        `http://localhost:8000/addcart/${id}`,
        { inddata },
        { withCredentials: true }
      );
      setAccount(res.data);
      alert("Successfully added to cart");
      history("/bynow");
    } catch (error) {
      console.log("Error adding to cart:", error);
      alert("Error: Unable to add to cart");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {inddata && (
        <div className="max-w-5xl mx-auto bg-white p-6 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={inddata.detailUrl}
              alt="cart"
              className="w-full h-full object-contain rounded"
            />
            <div className="flex gap-4 ">
              <button
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded"
                onClick={() => addtocart(inddata.id)}
              >
                Add to Cart
              </button>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded">
                Buy Now
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {inddata.title.shortTitle}
            </h3>
            <h4 className="text-gray-700 mb-2">{inddata.title.longTitle}</h4>
            <Divider className="my-2" />
            <p className="text-sm text-gray-600">
              M.R.P. : <del>₹{inddata.price.mrp}</del>
            </p>
            <p className="text-lg font-semibold text-red-600">
              Deal of the Day : ₹{inddata.price.cost}.00
            </p>
            <p className="text-sm text-green-600">
              You save : ₹{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount})
            </p>

            <div className="bg-gray-50 p-3 mt-4 rounded">
              <h5 className="font-medium text-gray-700">
                Discount : <span className="font-semibold">{inddata.discount}</span>
              </h5>
              <h4 className="text-sm text-gray-700 mt-1">
                FREE Delivery : <span className="font-semibold">Oct 8 - 21</span> Details
              </h4>
              <p className="text-sm text-gray-600">
                Fastest delivery: <span className="font-semibold">Tomorrow 11AM</span>
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-700">
              About the Item:
              <span className="block text-gray-600 text-sm font-medium mt-1">
                {inddata.description}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;



