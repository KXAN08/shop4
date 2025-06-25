import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "@/assets/vite.svg";
import admin from "@/assets/admin.svg";
import search from "@/assets/search.svg";
import like from "@/assets/like.svg";
import shop from "@/assets/shop.svg";
import "@/css/index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full bg-white z-[99] shadow-md'>
      <nav className='container mx-auto px-6 h-[100px] flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src={logo} alt="logo" className='w-8 h-8' />
          <h1 className='text-2xl font-montserrat font-bold'>Furniro</h1>
        </div>

        <ul className='hidden md:flex items-center gap-10 text-lg font-medium'>
          <li>
            <NavLink to="/" className="hover:border-b-2 hover:border-[#B88E2F] transition">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="hover:border-b-2 hover:border-[#B88E2F] transition">Shop</NavLink>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-[#B88E2F] transition">About</a>
          </li>
          <li>
            <NavLink to="/Contact" className="hover:border-b-2 hover:border-[#B88E2F] transition">Contact</NavLink>
          </li>
        </ul>

        <div className='hidden md:flex items-center gap-6'>
          {[admin, search, like, shop].map((icon, index) => {
            if (icon === like) {
              return (
                <NavLink to="/wishlist" key={index}>
                  <img
                    src={like}
                    alt="wishlist-icon"
                    className='w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200'
                  />
                </NavLink>
              );
            }
            if (icon === shop) {
              return (
                <NavLink to="/cart" key={index}>
                  <img
                    src={shop}
                    alt="cart-icon"
                    className='w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200'
                  />
                </NavLink>
              );
            }
            return (
              <img
                key={index}
                src={icon}
                alt={`icon-${index}`}
                className='w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200'
              />
            );
          })}
        </div>

        <button
          className='md:hidden block focus:outline-none'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className='w-8 h-8' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
            {menuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className='md:hidden w-full bg-white shadow-lg'>
          <ul className='flex flex-col items-center py-4 gap-4 text-base font-medium'>
            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#" onClick={() => setMenuOpen(false)}>Contact</a></li>

            <div className='flex items-center gap-6 mt-4'>
              {[admin, search, like, shop].map((icon, index) => {
                if (icon === like) {
                  return (
                    <NavLink to="/wishlist" key={index} onClick={() => setMenuOpen(false)}>
                      <img
                        src={like}
                        alt="wishlist-icon"
                        className='w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200'
                      />
                    </NavLink>
                  );
                }
                if (icon === shop) {
                  return (
                    <NavLink to="/cart" key={index} onClick={() => setMenuOpen(false)}>
                      <img
                        src={shop}
                        alt="cart-icon"
                        className='w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200'
                      />
                    </NavLink>
                  );
                }
                return (
                  <img
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className='w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200'
                  />
                );
              })}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
