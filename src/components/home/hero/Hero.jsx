import React from 'react'

function Hero() {
  return (
    <div style={{ backgroundImage: "url('/img/hero.jpg')" }}
         className="w-full h-screen bg-cover bg-center flex items-center justify-end pr-16">
        <div className="w-[600px] bg-[#FFFFFFB2] h-[443px] rounded-2xl p-8 flex flex-col justify-center">
            <p className="text-lg text-black font-poppins mb-2">New Arrival</p>
            <h2 className="text-4xl md:text-5xl text-[#B88E2F] font-poppins font-semibold mb-4 leading-snug">
            Discover Our <br /> New Collection
            </h2>
            <p className="text-sm text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="w-[180px] h-[50px] border-2 text-white bg-[#B88E2F] hover:bg-white hover:text-[#B88E2F] border-[#B88E2F] transition">
            BUY Now
            </button>
    </div>
</div>

  )
}

export default  React.memo(Hero)