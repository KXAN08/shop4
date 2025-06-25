import React, { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const isActive = (tab) => activeTab === tab;

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <div className="flex justify-center gap-12 text-lg font-medium">
        <button
          onClick={() => setActiveTab("description")}
          className={isActive("description") ? "text-black font-bold border-b-2 border-black" : "text-gray-500"}>
          Description
        </button>
        <button
          onClick={() => setActiveTab("info")}
          className={isActive("info") ? "text-black font-bold border-b-2 border-black" : "text-gray-500"}>
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={isActive("reviews") ? "text-black font-bold border-b-2 border-black" : "text-gray-500"}>
          Reviews [5]
        </button>
      </div>

     
      {activeTab === "description" && (
        <div className="text-center max-w-3xl mx-auto text-gray-600 space-y-6">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-[#F9F1E7] p-4 rounded-lg">
              <img src="/img/divan.png" alt="sofa1" className="w-full object-contain" />
            </div>
            <div className="bg-[#F9F1E7] p-4 rounded-lg">
              <img src="/img/divan.png" alt="sofa2" className="w-full object-contain" />
            </div>
          </div>
        </div>
      )}

      {activeTab === "info" && (
        <div className="text-center text-gray-600">
          <p>Additional information about materials, dimensions, and other specs can be placed here.</p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="text-center text-gray-600">
          <p>Customer reviews will be shown here.</p>
        </div>
      )}
    </div>
  );
};

export default ProductTabs;
