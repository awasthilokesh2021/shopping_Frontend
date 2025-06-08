import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logincontext } from "../context/Providercontext";

const Option = ({ deletedata, get }) => {
  const { setAccount } = useContext(Logincontext);

  const removeValue = async (id) => {
    try {
      const res = await fetch(`https://shopping-backend-hsr3.onrender.com/remove/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        console.log("Error removing item");
      } else {
        setAccount(data);
        get();
        toast.success("Removed item from cart 😃!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-3 flex items-center gap-4">
      <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button
        onClick={() => removeValue(deletedata)}
        className="text-red-600 text-sm hover:underline"
      >
        Delete
      </button>

      <ToastContainer />
    </div>
  );
};

export default Option;


