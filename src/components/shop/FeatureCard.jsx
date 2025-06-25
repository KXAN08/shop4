import React from "react";
import { FaTrophy, FaShippingFast, FaHeadset } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const features = [
  {
    icon: <FaTrophy className="text-3xl text-gray-800" />,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: <MdVerified className="text-3xl text-gray-800" />,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: <FaShippingFast className="text-3xl text-gray-800" />,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: <FaHeadset className="text-3xl text-gray-800" />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

 function FeatureCard () {
  return (
    <div className="flex flex-wrap justify-center  gap-8 bg-[#f8f1e9] py-10">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-4 max-w-xs">
          <div>{feature.icon}</div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default React.memo(FeatureCard);