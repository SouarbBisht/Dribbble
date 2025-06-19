import React, { useState } from "react";
import chat from "/images/Group.png";
import logo from "/images/logo.png";
import noti from "/images/Frame.png";
import profile from "/images/Group151.png";
import vector from "/images/Vector.png";
import { Menu, X } from 'lucide-react'; // optional icons (you can replace with SVG)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 md:px-16 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img className="h-[30px] w-[106.8px] " src={logo} alt="logo" />
        </div>

        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center hover:cursor-pointer text-sm font-medium">
          <li className="flex items-center gap-2 list-none">
            Explore <img className="h-[6px] w-[11px]" src={vector} alt="" />
          </li>
          <li className="list-none">Hire a designer</li>
          <li className="list-none">Find Jobs</li>
          <li className="list-none">Blog</li>
        </ul>

        {/* Right Side Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <img className="h-[36px] w-[36px]" src={chat} alt="chat" />
          <img className="h-[36px] w-[36px]" src={noti} alt="notification" />
          <button className="w-[80px] h-[30px] rounded-[7.5px] bg-[#DDDDDD] text-sm font-semibold">
            Go Pro
          </button>
          <img className="h-[36px] w-[36px] rounded-full" src={profile} alt="user" />
        </div>
      </div>

      {/* Mobile Menu (shown on hamburger click) */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium">
          <li className="flex items-center gap-2 list-none">
            Explore <img className="h-[6px] w-[11px]" src={vector} alt="" />
          </li>
          <li className="list-none">Hire a designer</li>
          <li className="list-none">Find Jobs</li>
          <li className="list-none">Blog</li>

          {/* Mobile icons */}
          <div className="flex gap-4 items-center pt-4 border-t border-gray-200">
            <img className="h-[36px] w-[36px]" src={chat} alt="chat" />
            <img className="h-[36px] w-[36px]" src={noti} alt="notification" />
            <button className="w-[80px] h-[30px] rounded-[7.5px] bg-[#DDDDDD] text-sm font-semibold">
              Go Pro
            </button>
            <img className="h-[36px] w-[36px] rounded-full" src={profile} alt="user" />
          </div>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
