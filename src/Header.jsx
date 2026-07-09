import { Link, useLocation } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import Logo from './assets/Logo.png'
// import { Link } from "react-router-dom";
import { GoGlobe } from "react-icons/go";
// import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaNetworkWired } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductsDropdown from './ProductsDropdown.jsx';

const Header = () => {

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="w-full bg-white border-b border-zinc-200 abc sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4 relative">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <a href="/"> <img src={Logo} alt="Logo" className="w-38 h-9" /></a>
                </div>

                {/* Center Nav */}

                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
                
                <div className={`
    ${menuOpen
                        ? "flex flex-col absolute top-[80px] left-0 w-full bg-white shadow-lg p-6 z-50 max-h-[90vh] overflow-y-auto"
                        : "hidden"
                    }
    lg:flex lg:static lg:flex-row lg:items-center lg:bg-transparent lg:shadow-none lg:p-0
    2xl:gap-10 text-[14px] font-medium gap-6
  `}
                >
                    <Link
                        to="/"
                        className={`cursor-pointer flex items-center gap-1 ${location.pathname === "/"
                                ? "text-red-600"
                                : "text-zinc-700"
                            } hover:text-red-600`}
                    >
                        Home
                    </Link>

                    <div className="relative group">


                        <Link
                            to="/product"
                            onClick={() => setMenuOpen(false)}
                            className={`cursor-pointer flex items-center gap-1 ${location.pathname === "/product"
                                    ? "text-red-600"
                                    : "text-zinc-700"
                                } hover:text-red-600`}
                        >
                            Products <MdKeyboardArrowDown className='text-[20px] hidden lg:block' />
                        </Link>

                        <div className="hidden lg:block fixed top-[80px] left-1/2 -translate-x-1/2 w-[95vw] lg:w-[1000px] 2xl:h-[45vh] bg-white shadow-2xl rounded-2xl p-8 z-50 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                            <div className="grid grid-cols-3 gap-6 h-full">

                                <div className="col-span-2 grid grid-cols-2 gap-6 content-start">

                                    <Link to="/domain">
                                        <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
                                            <div className='bg-zinc-100 text-[20px] p-3 text-center flex items-center justify-center rounded-2xl hover:text-white'>
                                                <GoGlobe />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-[18px]">Domain Registration</h1>
                                                <p className="text-sm text-zinc-500">
                                                    Search & register domains<br /> instantly
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/dns">
                                        <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
                                            <div className='bg-zinc-100 text-[20px] p-3 text-center flex items-center justify-center rounded-2xl hover:text-white'>
                                                <FaNetworkWired />
                                            </div>

                                            <div>
                                                <h1 className="font-semibold text-[18px]">DNS Management</h1>
                                                <p className="text-sm text-zinc-500">
                                                    Control DNS records & <br />routing
                                                </p>
                                            </div>

                                        </div>
                                    </Link>
                                    <Link to="/email">
                                        <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
                                            <div className='bg-zinc-100 text-[20px] p-3 text-center flex items-center justify-center rounded-2xl hover:text-white'>
                                                <IoMailOutline />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-[18px]">Email Management</h1>
                                                <p className="text-sm text-zinc-500">
                                                    Business email hosting <br />solution
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/seo">
                                        <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
                                            <div className='bg-zinc-100 text-[20px] p-3 text-center flex items-center justify-center rounded-2xl hover:text-white'>
                                                <FaRegChartBar />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-[18px]">SEO & Growth Tools</h1>
                                                <p className="text-sm text-zinc-500">
                                                    Boost ranking with smart <br />insights
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/ai">
                                        <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
                                            <div className='bg-zinc-100 text-[20px] p-3 text-center flex items-center justify-center rounded-2xl hover:text-white'>
                                                <LuBrain />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-[18px]">AI Services</h1>
                                                <p className="text-sm text-zinc-500">
                                                    Automation + AI powered <br />features
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                </div>

                                <div className="bg-red-50 rounded-xl p-6 flex flex-col justify-between h-full">
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
                                        </button></a>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* <ProductsDropdown
                        active={active}
                        setActive={setActive}
                        setMenuOpen={setMenuOpen}
                    /> */}




                    <div className="relative group">

                        {/* Trigger */}
                        <Link
                            to="/features"
                            onClick={() => setMenuOpen(false)}
                            className={`cursor-pointer flex items-center gap-1 ${location.pathname === "/features"
                                    ? "text-red-600"
                                    : "text-zinc-700"
                                } hover:text-red-600`}
                        >
                            Features <MdKeyboardArrowDown className='text-[20px] hidden lg:block' />
                        </Link>
                        {/* Dropdown */}
                        <div className="hidden lg:block fixed top-[80px] left-1/2 -translate-x-1/2 w-[95vw] lg:w-[1000px] 2xl:h-[35vh] bg-white shadow-2xl rounded-2xl p-8 z-50 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            {/* LEFT */}
                            <div className="grid grid-cols-3 gap-6 h-full">

                                <div className="col-span-2 grid grid-cols-2 gap-6 content-start">

                                    <Link to="/Domain_Control">
                                        <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
                                            <div className='bg-zinc-100 text-[20px] p-3 h-[60px] text-center flex items-center justify-center rounded-2xl hover:text-white'>
                                                <GoGlobe />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-[18px]">Domain Control</h1>
                                                <p className="text-sm text-zinc-500 ">
                                                    Manage all domains in one<br /> hub
                                                </p>
                                            </div>
                                        </div>

                                    </Link>

                                    <Link to="/Hosting_Automation">
                                        <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
                                            <div className='bg-zinc-100 text-[20px] p-3 h-[60px] text-center flex items-center justify-center rounded-2xl hover:text-white'>
                                                <FaNetworkWired />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-[18px]">Hosting Automation</h1>
                                                <p className="text-sm text-zinc-500 ">
                                                    Smart hosting workflow
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/Server_Monitoring">
                                        <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
                                            <div className='bg-zinc-100 text-[20px] p-3 h-[60px] text-center flex items-center justify-center rounded-2xl hover:text-white'>
                                                <FaRegChartBar />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-[18px]">Server Monitoring</h1>
                                                <p className="text-sm text-zinc-500 ">
                                                    Track uptime & server<br /> health
                                                </p>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/Subscription_Hub">
                                        <div className="flex gap-4 cursor-pointer hover:bg-red-50 hover:text-red-600 p-4 rounded-lg">
                                            <div className='bg-zinc-100 text-[20px] p-3 h-[60px] text-center flex items-center justify-center rounded-2xl hover:text-white'>
                                                <LuBrain />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-[18px]">Subscription Hub</h1>
                                                <p className="text-sm text-zinc-500">
                                                    Unified billing dashboard
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                {/* RIGHT CARD */}
                                <div className="bg-red-50 rounded-xl p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            Explore Features
                                        </h3>
                                        <p className="text-sm text-zinc-500">
                                            Ignorre gives you everything in one platform — domains, DNS,
                                            email, SEO, and AI powered automation.
                                        </p>
                                    </div>

                                    <a href="/features"><button className="mt-6 bg-black text-white rounded-full py-2 text-sm w-full">
                                        View All Features →
                                    </button></a>
                                </div>

                            </div>

                        </div>
                    </div>





                    <Link
                        to="/pricing"
                        onClick={() => {
                            // setActive("pricing");
                            setMenuOpen(false);
                        }}
                        className={`cursor-pointer flex items-center gap-1 ${location.pathname === "/pricing" ? "text-red-600" : "text-zinc-700"
                            } hover:text-red-600`}
                    >
                        Pricing
                    </Link>

                    <Link
                        to="/testimonial"
                        onClick={() => {
                            // setActive("testimonial");
                            setMenuOpen(false);
                        }}
                        className={`cursor-pointer flex items-center gap-1 ${location.pathname === "/testimonial" ? "text-red-600" : "text-zinc-700"
                            } hover:text-red-600`}
                    >
                        Testimonial
                    </Link>

                    <Link
                        to="/faq"
                        onClick={() => {
                            // setActive("faq");
                            setMenuOpen(false);
                        }}
                        className={`cursor-pointer flex items-center gap-1 ${location.pathname === "/faq" ? "text-red-600" : "text-zinc-700"
                            } hover:text-red-600`}
                    >
                        FAQ
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => {
                            // setActive("contact");
                            setMenuOpen(false);
                        }}
                        className={`cursor-pointer flex items-center gap-1 ${location.pathname === "/contact" ? "text-red-600" : "text-zinc-700"
                            } hover:text-red-600`}
                    >
                        Contact
                    </Link>

                    <div className="lg:hidden w-full pt-4">
                        <button className=" bg-black text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition">
                        Get Started
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Header