import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/features/wishlist";
import { addToCart } from "@/redux/features/cart";
import { useNavigate } from "react-router-dom"; 

const ProductItem = (product) => {
  const { title, brand, price, thumbnail, id } = product;
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const navigate = useNavigate(); 

  const goToDetails = () => {
    navigate(`/product/${id}`, { state: { product } });
  };

  return (
    <div className="bg-gray-100 group relative">
      <div
        className="h-[285px] overflow-hidden relative"
        onClick={goToDetails} 
      >
        <img
          className="w-full h-full object-contain group-hover:scale-105 duration-300"
          src={thumbnail}
          alt={title}
        />
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            dispatch(toggleWishlist(product));
          }}
          className="absolute top-4 right-4 cursor-pointer bg-white size-7 grid place-items-center rounded-full"
        >
          {wishlist.some((item) => item.id === product.id) ? (
            <HeartFilled />
          ) : (
            <HeartOutlined />
          )}
        </button>
      </div>
      <div className="p-4 leading-8">
        <h3 className="font-bold">{title}</h3>
        <p>{brand}</p>
        <strong>{price} USD</strong>
        <br />
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart(product));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
