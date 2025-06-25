import { useProduct } from "@/api/hooks/useProduct";
import Products from "@/components/products/Products";
import Bhero from "@/components/shop/Bhero";
import FeatureCard from "@/components/shop/FeatureCard";
import ShopHero from "@/components/shop/ShopHero";
import { Pagination } from "antd";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate()
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams()
  const page = params.get("page") || 1
  const pageSize = params.get("pageSize") || 16
  

  const { data, isLoading } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    if(pageS !== pageSize){
      params.set("pageSize", pageS)
      params.set("page", "1")
    }else{
      params.set("page", page)
    }
    setParams(params)
  };

  return (
    <div>
      <ShopHero />
      <Bhero />
      <Products data={data?.data?.products} loading={isLoading} count={16}/>
      <div className="flex justify-center my-6">
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
            
      <FeatureCard />
    </div>
  );
};

export default Shop;
