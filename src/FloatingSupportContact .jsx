import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const FloatingSupportContact = () => {
  return (
    <div
      className="
        hidden lg:flex              // 👈 Hides on mobile/tablet, shows on lg+
    fixed top-20 2xl:right-20  xl:right-45 lg:right-60 z-50
    bg-white shadow-lg rounded-full 
    items-center gap-4
    py-1 pl-2 pr-3
    border border-zinc-200">
      {/* Avatar */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=200&q=80"
          className="h-10 w-10 rounded-full object-cover"
          alt="profile"
        />
        <span className="h-3 w-3 bg-green-500 border border-white absolute bottom-0 right-0 rounded-full"></span>
      </div>

      {/* Name + Status */}
      <div className="flex flex-col leading-tight">
        <p className="font-semibold text-zinc-950 text-[14px]">Ignorre Agent</p>
        <p className="text-[12px] text-red-600">Available Now</p>
      </div>

      {/* Contact Button */}
     <a href="/contact">
       <button className="bg-zinc-900 hover:bg-zinc-950 text-white text-[14px] px-5 py-3 rounded-full flex items-center gap-1">
        Contact
        <HiDotsHorizontal size={16} />
      </button>
     </a>
    </div>
  );
};

export default FloatingSupportContact;
