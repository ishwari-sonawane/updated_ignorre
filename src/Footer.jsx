import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import logowhite from "./assets/logowhite.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
     <div className="bg-zinc-950 text-white">
  <div
    className="
      min-h-[60vh] w-full
      flex flex-col
      justify-center items-center
      px-6 sm:px-10 
    "
  >
    <div
      className="
        w-full
        max-w-7xl
       pt-5 pb-5
      "
    >
      {/* TOP CTA */}
      <div
        className="
          flex flex-col
          lg:flex-row
          justify-between items-start lg:items-center
          gap-6
        "
      >
        <p className="text-[20px] sm:text-[24px] lg:text-[30px]">
          Start building secure, scalable internet
          <br className="hidden lg:block" />
          infrastructure today
        </p>

        <button
          className="
            h-12 w-52
            bg-white text-black
            flex justify-center items-center gap-2
            rounded-2xl
            flex-shrink-0
          "
        >
          Get Started Now
          <RiArrowRightUpLine size={20} />
        </button>
      </div>

      <div className="h-[1px] w-full bg-zinc-700 my-6"></div>

      {/* MAIN FOOTER CONTENT */}
      <div
        className="
          flex flex-col
          lg:flex-row
          gap-10
        "
      >
        {/* LEFT INFO */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
         <div className='p-3 pl-0'>
          <img src={logowhite} alt="" className='h-16 sm:h-20'/>
         </div>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold">
           helps you manage domains, hosting, servers, and subscriptions from one powerful dashboard — built for scale.
          </p>

          <div className="h-10 w-full max-w-xs sm:w-72 bg-white flex rounded-lg">
            <input
              type="text"
              placeholder="Enter Your Email.."
              className="
                bg-zinc-800
                rounded-lg
                w-full
                pl-2
                text-zinc-300
                outline-none
              "
            />
            <RiArrowRightUpLine
              size={20}
              className="mx-4 mt-2 text-black flex-shrink-0"
            />
          </div>
        </div>

        {/* SEPARATORS (DESKTOP ONLY) */}
       <div className="hidden lg:block h-full w-[1px] bg-zinc-700 my-6"></div>

        {/* PRODUCT */}
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-0 lg:w-1/2 flex-wrap">
          <div className="w-full sm:w-auto sm:flex-1 flex flex-col items-center lg:items-center gap-3">
          <p className="text-[18px] font-semibold mb-2">Product</p>
         <Link to="/domain"><p className="hover:underline cursor-pointer">Domains</p></Link>
         <Link to="/dns"> <p className="hover:underline cursor-pointer">DNS</p></Link>
          <Link to="/email"><p className="hover:underline cursor-pointer">Email </p></Link>
          <Link to="/seo"><p className="hover:underline cursor-pointer">SEO Tools</p></Link>
          <Link to="/ai"><p className="hover:underline cursor-pointer">AI Services</p></Link>
          <Link to="#"><p className="hover:underline cursor-pointer">VPS Hosting</p></Link>
        </div>

        <div className="block sm:hidden h-[1px] w-full bg-zinc-700 my-2"></div>

        <div className="hidden lg:block h-full w-[1px] bg-zinc-700"></div>

        {/* COMPANY */}
        <div className="w-full sm:w-auto sm:flex-1 flex flex-col items-center lg:items-center gap-3">
          <p className="text-[18px] font-semibold mb-2">Company</p>
        <Link to="/"><p className="hover:underline cursor-pointer">Home</p></Link>
         <Link to="/contact"> <p className="hover:underline cursor-pointer">Contact</p></Link>
        </div>

        <div className="block sm:hidden h-[1px] w-full bg-zinc-700 my-2"></div>

        <div className="hidden lg:block h-full w-[1px] bg-zinc-700"></div>

        {/* UTILITIES */}
        <div className="w-full sm:w-auto sm:flex-1 flex flex-col items-center lg:items-center gap-3">
          <p className="text-[18px] font-semibold mb-2">Support</p>
          <Link to="/faq"><p className="hover:underline cursor-pointer">FAQ</p></Link>
        </div>
        
        </div>
      </div>

      <div className="h-[1px] w-full bg-zinc-700 my-6"></div>

      <p className="text-center">
        © 2025 All rights reserved.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer