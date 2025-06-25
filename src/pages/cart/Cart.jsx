import CartHero from "@/components/cart/cartHero";
import FeatureCard from "@/components/shop/FeatureCard";
import {
  decrementCart,
  incrementCart,
  removeCart,
} from "@/redux/features/cart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className=" min-h-screen">
      <CartHero />

      <div className="max-w-6xl mx-auto py-10 px-5">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-4 font-semibold bg-[#FFF8F1] border-1 border-[#FFF8F1] h-20 items-center pl-4 pr-4 text-gray-700  pb-3 mb-4">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p className="text-right">Subtotal</p>
            </div>

            {cart.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-4 items-center gap-4 bg-white p-4 mb-4 rounded shadow-sm"  >
                <div className="flex items-center gap-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-26 h-26 object-cover bg-[#FFF8F1] rounded"
                  />
                  <p className="text-gray-800 ">{product.title}</p>
                </div>
                <p className="text-gray-600">Rs. {product.price.toLocaleString()}</p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(decrementCart(product))}
                    disabled={product.quantity <= 1}
                    className="px-2 py-1 border rounded disabled:opacity-40"
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementCart(product))}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">
                    Rs. {(product.price * product.quantity).toLocaleString()}
                  </p>
                  <button
                    onClick={() => dispatch(removeCart(product))}
                    className="text-[#B88E2F] hover:text-red-500 ml-2"  >
                    <AiOutlineDelete size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#F9F1E7] p-6 rounded">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <p>Subtotal</p>
              <p>Rs. {total.toLocaleString()}</p>
            </div>
            <div className="flex justify-between text-lg font-semibold text-[#B88E2F] mb-6">
              <p>Total</p>
              <p>Rs. {total.toLocaleString()}</p>
            </div>
            <button className="w-full border border-black py-2 rounded hover:bg-black hover:text-white transition">
              Check Out
            </button>
          </div>
        </div>
      </div>

      <FeatureCard />
    </div>
  );
};

export default Cart;
