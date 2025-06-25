import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const HomeCarousell = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setSlides(json.products));
  }, []);

  return (
    <div className="bg-[#F9F1E7] max-w-[1440px] mx-auto py-20 px-6 md:px-16 grid md:grid-cols-2 items-center gap-12 mb-20">
      <div className="space-y-6 max-w-md">
        <h2 className="text-4xl font-bold leading-tight text-[#3A3A3A]">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-600 text-lg">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
      <button className="bg-[#B88E2F] text-white px-6 py-3 rounded shadow hover:bg-[#a27823] transition">
          Explore More
        </button>
      </div>
      <div className="relative hidden md:block ">
        <Swiper
          slidesPerView="auto"
          centeredSlides
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}>
          {slides.map((p, idx) => (
            <SwiperSlide
              key={p.id}
              style={{ width: "400px", height:"500px" }}
              className="rounded-xl overflow-hidden bg-white">
              <div className="relative">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-[420px] object-cover rounded-xl pb-15 pr-4"/>
                <div className="absolute bottom-0 left-0 w-full  px-5  py-4">
                  <p className="text-sm text-gray-500 ">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1} — {p.category}
                  </p>
                  <h3 className="text-xl font-semibold text-[#3A3A3A]">{p.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCarousell;




