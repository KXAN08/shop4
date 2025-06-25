import React from 'react'

function Browse() {
  return (
    <section className='container mx-auto py-16 px-4'>
      <div className='text-center mb-12'>
        <p className='text-3xl font-semibold text-black mb-2'>Browse The Range</p>
        <p className='text-[#666666] text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto text-center'>
        {[
          { src: "/img/Browse1.png", title: "Dining" },
          { src: "/img/Browse2.png", title: "Living" },
          { src: "/img/Browse3.png", title: "Bedroom" },
        ].map((item, index) => (
          <div key={index} className='cursor-pointer'>
            <img
              src={item.src}
              alt={item.title}
              className='w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105'
            />
            <p className='mt-4 text-lg font-medium'>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default React.memo(Browse)
