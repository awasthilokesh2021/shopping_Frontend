
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Get to Know Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Shopping Cares</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Make Money with Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Sell on Shopping</li>
            <li>Advertise Your Products</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Let Us Help You</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 px-6">
        <img
          src="/amazon_PNG25.png"
          alt="logo"
          className="mx-auto mb-2 h-6"
        />
        <p>
          Conditions of Use & Sale &nbsp; • &nbsp; Privacy Notice &nbsp; • &nbsp;
          Interest-Based Ads &nbsp; • &nbsp; © 1996-{year}, Shopping.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;