import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import { FaNetworkWired, FaRegChartBar } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";

export default function ProductsDropdown({ active, setActive, setMenuOpen }) {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    // ✅ ONLY CHANGE HERE → added pb-[120px]
    <div className="relative group w-full ">

      {/* 🔹 TRIGGER */}
      <div
        onClick={() => isMobile && setIsProductOpen(!isProductOpen)}
        className={`cursor-pointer flex items-center w-full ${
          active === "Products" ? "text-red-600" : "text-zinc-700"
        } hover:text-red-600`}
      >
        <Link
          to="/product"
          onClick={() => {
            setActive("Product");
            setMenuOpen(false);
          }}
        >
          Products
        </Link>

        <MdKeyboardArrowDown
          className={`text-[20px] transition-transform duration-300 ${
            isProductOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* 🔹 DROPDOWN */}
      <div
      
        className={`
          ${
            isMobile
              ? "w-full flex flex-col mt-2 transition-all duration-300"
              : "fixed top-[80px] left-1/2 -translate-x-1/2 w-[95vw] lg:w-[1000px] "
          }

          bg-white shadow-2xl rounded-2xl lg:p-8 lg:gap-8 z-50

          ${
            isMobile
              ? isProductOpen
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
              : "absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible flex"
          }
        `}
      >

        {/* 🔸 LEFT */}
        <div
          className={`${
            isMobile
              ? "flex flex-col gap-4"
              : "grid grid-cols-2 gap-6 flex-1"
          }`}
        >

          <Link to="/" onClick={() => setIsProductOpen(false)}>
            <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
              <div className="bg-zinc-100 text-[20px] p-3 flex items-center justify-center rounded-2xl">
                <GoGlobe />
              </div>
              <div>
                <h1 className="font-semibold text-[18px]">Domain Registration</h1>
                <p className="text-sm text-zinc-500">
                  Search & register domains instantly
                </p>
              </div>
            </div>
          </Link>

          <Link to="/dns" onClick={() => setIsProductOpen(false)}>
            <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
              <div className="bg-zinc-100 text-[20px] p-3 flex items-center justify-center rounded-2xl">
                <FaNetworkWired />
              </div>
              <div>
                <h1 className="font-semibold text-[18px]">DNS Management</h1>
                <p className="text-sm text-zinc-500">
                  Control DNS records & routing
                </p>
              </div>
            </div>
          </Link>

          <Link to="/email" onClick={() => setIsProductOpen(false)}>
            <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
              <div className="bg-zinc-100 text-[20px] p-3 flex items-center justify-center rounded-2xl">
                <IoMailOutline />
              </div>
              <div>
                <h1 className="font-semibold text-[18px]">Email Management</h1>
                <p className="text-sm text-zinc-500">
                  Business email hosting solution
                </p>
              </div>
            </div>
          </Link>

          <Link to="/seo" onClick={() => setIsProductOpen(false)}>
            <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
              <div className="bg-zinc-100 text-[20px] p-3 flex items-center justify-center rounded-2xl">
                <FaRegChartBar />
              </div>
              <div>
                <h1 className="font-semibold text-[18px]">SEO & Growth Tools</h1>
                <p className="text-sm text-zinc-500">
                  Boost ranking with smart insights
                </p>
              </div>
            </div>
          </Link>

          <Link to="/ai" onClick={() => setIsProductOpen(false)}>
            <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
              <div className="bg-zinc-100 text-[20px] p-3 flex items-center justify-center rounded-2xl">
                <LuBrain />
              </div>
              <div>
                <h1 className="font-semibold text-[18px]">AI Services</h1>
                <p className="text-sm text-zinc-500">
                  Automation + AI powered features
                </p>
              </div>
            </div>
          </Link>

        </div>

        {/* 🔸 RIGHT CARD */}
        <div
          className={`${
            isMobile
              ? "hidden"
              : "w-[280px] bg-red-50 rounded-xl p-6 flex flex-col justify-between"
          }`}
        >
          <div>
            <h1 className="font-semibold text-[18px] mb-2">
              Explore Products
            </h1>
            <p className="text-sm text-zinc-500">
              Ignorre gives you everything in one platform — domains, DNS,
              email, SEO, and AI powered automation.
            </p>
          </div>
          <a href="/product">
            <button className="mt-6 bg-black text-white rounded-full py-2 w-full text-sm">
              View All Products →
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}