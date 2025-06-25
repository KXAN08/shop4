import React from 'react'

function ShopHero() {
  return (
    <div 
       style={{ backgroundImage: "url('/img/heroshop.jpg')" }}
         className="w-full h-[316px] bg-cover bg-center flex items-center justify-center text-center font-bold pr-16">
     <div>
         <p className='text-3xl text-black'>Shop</p>
        <p>Home {">"} Shop</p>
     </div>
     
    </div>
  )
}

export default React.memo(ShopHero);