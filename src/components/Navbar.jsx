import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";

const Navbar = () => {
  const { Showsetsearch , getCartcount} = useContext(Shopcontext);
  const [visible, setvisible] = useState(false);
  const [menu,Setmenu]=useState('')
  const navigation=useNavigate()
  
  
  const handleNavLinkClick = () => {
    setvisible(false);
  };

  return (
    <div className="navbar flex items-center justify-between py-5 font-medium">
    
        <img src={assets.logo} alt="" className="w-36  " onClick={()=>navigation("/")} />
    

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700  ">
        <NavLink to="/" className="flex flex-col items-center gap-1" onClick={handleNavLinkClick}>
          <p>Home</p>
          <hr className="w-2/4 border-none h-1.5px bg-gray-700 hidden"  />
        </NavLink>
        <NavLink to="/collections" className="flex flex-col items-center gap-1 " onClick={handleNavLinkClick}>
          <p>Collection</p>
          <hr className="w-2/4 border-none h-1.5px bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1" onClick={handleNavLinkClick}>
          <p>About</p>
          <hr className="w-2/4 border-none h-1.5px bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1" onClick={handleNavLinkClick}>
          <p>Contact</p>
          <hr className="w-2/4 border-none h-1.5px bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
  <img
    onClick={() => Showsetsearch(true)}
    src={assets.search_icon}
    alt=""
    className="w-5 cursor-pointer"
  />
  <div className="relative group">
    <img
      src={assets.profile_icon}
      alt=""
      className="w-5 cursor-pointer"
      onClick={()=>navigation("/login")}
      
    />
    
    <div className="absolute top-6 right-0 hidden group-hover:block pt-2">
      <div className="flex flex-col w-36 bg-slate-100 text-gray-500 rounded shadow">
        <p onClick={()=>navigation("/orders")}   className="px-4 py-2 cursor-pointer hover:text-black hover:bg-slate-200">Myorders</p>
        <p className="px-4 py-2 cursor-pointer hover:text-black hover:bg-slate-200">Profile</p>
        <p className="px-4 py-2 cursor-pointer hover:text-black hover:bg-slate-200">Logout</p>
      </div>
    </div>
  </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] text-center cursor-pointer leading-4 w-4 aspect-square rounded-full text-[8px] text-white bg-black">
            {getCartcount()}
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden "
        />
      </div> 

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gry-600">
          <div
            className="flex items-center  gap-4 p-3"
            onClick={() => setvisible(false)}
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink to="/" className="py-2 pl-6 border-b" onClick={handleNavLinkClick}>
            Home
          </NavLink>
          <NavLink to="/collections" className="py-2 pl-6 border-b" onClick={handleNavLinkClick}>
            Collection
          </NavLink>
          <NavLink to="/about" className="py-2 pl-6 border-b" onClick={handleNavLinkClick}>
            About
          </NavLink>
          <NavLink to="/contact" className="py-2 pl-6 border-b" onClick={handleNavLinkClick}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
