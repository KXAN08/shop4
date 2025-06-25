import React from "react";
import nuqta  from "@/assets/nuqta.svg"
import bi from "@/assets/bi.svg"
import filter from "@/assets/filter.svg"

const Bhero = () => {
  return (
    <div className=" bg-[#F9F1E7] h-[100px]"> 
    <div className="container mx-auto flex items-center justify-between px-4 py-2 pt-8">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1  px-3 py-1 ">
          <img src={filter} alt="" /> Filter
        </button>
        <div className="flex items-center gap-2">
         <img src={nuqta} alt="nuqta" />
         <img src={bi} alt="bi" /> 
        </div>
        <span className="text-3xl text-gray-600">|</span>
        <span className="text-sm text-gray-600">Showing 1–16 of 32 results</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <input
          type="text"
          value="16"
          readOnly
          className="w-12  bg-white text-gray-500 text-center rounded px-1 py-0.5 text-sm"/>
        <span className="text-sm">Short by</span>
        <input
          type="text"
          value="Default"
          readOnly
          className=" bg-white text-gray-500 rounded px-2 py-1 w-28 text-sm"/>
      </div>
    </div>
    </div>
  );
};

export default React.memo(Bhero);;
