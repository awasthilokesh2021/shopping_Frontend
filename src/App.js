import React from "react";
import Navbar from "./components/Header/Navbar";
import Newnavbar from "./components/Newnavbar/Newnavbar";
import Maincomponent from "./components/home/Maincomponent";
import Footer from "./components/footer/Footer";
import Slide from "./components/home/Slide";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signup_signin/Signin";
import Signup from "./components/Signup_signin/Signup";
import Cart from "./components/cart/Cart";
import Bynow from "./components/bynow/Bynow";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Maincomponent />} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/register" element={<Signup />} />
        <Route path="/getproducts/:id" element={<Cart />} />
        <Route path="/bynow" element={<Bynow />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
