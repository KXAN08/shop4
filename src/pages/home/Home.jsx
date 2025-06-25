import Browse from '@/components/home/Browse';
import { useNavigate, useSearchParams } from "react-router-dom";
import Hero from '@/components/home/hero/Hero';
import HomeCarousell from '@/components/home/HomeCarousell';
import Products from '@/components/products/Products';
import { useProduct } from '@/api/hooks/useProduct';
import React from 'react';

const Home = () => {
  const navigate = useNavigate(); 
  const { getProduct } = useProduct();
  const [params, setParams] = useSearchParams();
  const { data, isLoading } = getProduct({ limit: 8 });

  return (
    <div>
      <Hero />
      <Browse />
      <Products data={data?.data?.products} loading={isLoading} count={8} />
      <div className="text-center mt-12 mb-12">
        <button
          onClick={() => navigate("/shop")} 
          className="px-8 py-3 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold rounded hover:bg-[#B88E2F] hover:text-white transition"
        >
          Show More
        </button>
      </div>

      <HomeCarousell />
    </div>
  );
};

export default React.memo(Home);
