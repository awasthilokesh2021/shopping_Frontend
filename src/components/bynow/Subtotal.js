import React, { useEffect, useState } from "react";

const Subtotal = ({ item }) => {
  
const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [item]);

  const totalAmount = () => {
    let total = 0;
    item.forEach((item) => {
      total += item.price.cost;
    });
    setPrice(total);
  };

  return (
    <div className="mt-4 text-right">
      <h3 className="text-md font-semibold text-gray-800">
        Subtotal ({item.length} items):
        <span className="font-bold text-lg text-black ml-1">₹{price}.00</span>
      </h3>
    </div>
  );
};

export default Subtotal;
