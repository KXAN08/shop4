import React from 'react'
import logo from "@/assets/vite.svg"

function CarttHero() {
  return (
   <div 
       style={{ backgroundImage: "url('/img/heroshop.jpg')" }}
         className="w-full h-[316px] bg-cover bg-center flex items-center justify-center text-center font-bold pr-16">
     <div>
        <img className='mx-auto h-[77px] w-[77px]' src={logo} alt="logo" />
         <p className='text-5xl text-black'>Cart</p>
         <p>Home {">"} Cart</p>
     </div>
     
    </div>
  )
}

export default React.memo(CarttHero)