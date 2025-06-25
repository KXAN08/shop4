import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 ">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
          <p className="text-sm text-gray-600 leading-6">
            400 University Drive Suite 200 Coral Gables,<br /> <br />
            FL 33134 USA
          </p>
        </div>
        <div>
          <h3 className="text-gray-400 font-medium mb-4">Links</h3>
          <ul className="space-y-8 text-sm font-semibold">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400 font-medium mb-4">Help</h3>
          <ul className="space-y-8 text-sm font-semibold">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400 font-medium mb-4">Newsletter</h3>
          <div className="flex gap-6 flex-wrap">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 py-1 px-2 text-sm outline-none border-b  border-black placeholder:text-gray-500"/>
            <button className="text-sm font-bold tracking-wider border-b  border-black">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <hr className="40px max-w-[1480px] text-[#D9D9D9] mx-auto" />
      <div className="text-sm text-gray-500 text-left px-6 pb-6 ">
        2023 furniro. All rights revered
      </div>
    </footer>
  );
};

export default React.memo(Footer);
