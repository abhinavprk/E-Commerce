import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useState } from 'react';

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-12" alt="logo" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img src={assets.search} className="w-5 cursor-pointer" alt="search" />
        <div className="group relative">
          <img className="w-6 cursor-pointer" src={assets.profile} alt="profile" />
          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart} className="w-5" alt="cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img onClick={() => setIsSidebarVisible(true)} src={assets.menu} className="w-5 cursor-pointer sm:hidden" alt="menu" />
      </div>

      {/* Sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${isSidebarVisible ? 'w-full' : 'w-0'}`}>
        {isSidebarVisible && (
          <div className="flex flex-col text-gray-600">
            <div onClick={() => setIsSidebarVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img className="h-4" src={assets.dropdown} alt="dropdown" />
              <p>Back</p>
            </div>
            <NavLink onClick={() => setIsSidebarVisible(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
            <NavLink onClick={() => setIsSidebarVisible(false)} className="py-2 pl-6 border" to="/collection">Collection</NavLink>
            <NavLink onClick={() => setIsSidebarVisible(false)} className="py-2 pl-6 border" to="/about">About</NavLink>
            <NavLink onClick={() => setIsSidebarVisible(false)} className="py-2 pl-6 border" to="/contact">Contact</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;