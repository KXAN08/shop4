import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HiClock } from "react-icons/hi";


const ContactForm = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Get In Touch With Us</h2>
      <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
        For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8 text-gray-700">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl hover:text-[#B88E2F] mt-1 text-black" />
            <div>
              <h4 className="font-semibold mb-1">Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-xl hover:text-[#B88E2F] mt-1 text-black" />
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p>
                Mobile: +(84) 546‑6789 <br />
                Hotline: +(84) 456‑6789
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <HiClock className="text-2xl hover:text-[#B88E2F] mt-1 text-black" />
            <div>
              <h4 className="font-semibold mb-1">Working Time</h4>
              <p>
                Monday–Friday: 9:00 - 22:00 <br />
                Saturday–Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Your name</label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#B88E2F] focus:border-[#B88E2F] " placeholder="Abc"/>
          </div>
          <div>
            <label className="block font-medium mb-1">Email address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
              placeholder="Abc@def.com"/>
          </div>

          <div>
            <label className="block font-medium mb-1">Subject</label>
            <input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
              placeholder="This is optional" />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-4 py-2 min-h-[120px] resize-y  focus:outline-none focus:ring-1 focus:ring-[#B88E2F] focus:border-[#B88E2F]"
              placeholder="Hi! I’d like to ask about..." />
          </div>
          <button  type="button" 
            className="bg-[#B88E2F] w-40  justify-center hover:bg-[#b88f2fa4]  text-white px-6 py-3 rounded flex items-center gap-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(ContactForm);
