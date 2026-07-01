// import React, { useState } from "react";
import React from 'react'
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa'
import { useEffect, useState, useRef } from "react";
import { CiGlobe } from "react-icons/ci";
import { MdDns } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { RiShieldCheckLine } from "react-icons/ri";
import Footer from "./Footer.jsx";
import Search from "./Search.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import ScrollToTop from './ScrollToTop.jsx';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [query, setQuery] = useState("");

  // Handle resize
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const suggestions = [
    { name: `${query || "yourname"}.com`, status: "available" },
    { name: `${query || "yourname"}.in`, status: "popular" },
    { name: `${query || "yourname"}.ai`, status: "premium" },
  ];

  const getColor = (status) => {
    if (status === "available") return "text-green-600";
    if (status === "popular") return "text-yellow-500";
    return "text-red-500";
  };


//   const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");
  const [results, setResults] = useState([]);
  const [placeholder, setPlaceholder] = useState(
    "Register a domain name to start"
  );
  const resultsRef = useRef(null);

const tlds = [
  { ext: ".com", price: 999 },
  { ext: ".in", price: 599 },
  { ext: ".ai", price: 4999 },
  { ext: ".dev", price: 799 },
  { ext: ".app", price: 899 },
  { ext: ".co", price: 1299 },
];

const handleSearch = (value) => {
  setQuery(value);

  if (!value.trim()) {
    setResults([]);
    return;
  }

  const generated = tlds.map((tld, index) => ({
    domain: value + tld.ext,
    price: tld.price,
    available: index % 2 === 0, // stable
  }));

  console.log("Generated Results:", generated);

  setResults(generated);
};

  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "What is a domain name?",
      a: "It’s your website’s address on the internet, like example.com.",
    },
    {
      q: "How do I check availability?",
      a: "Simply type your desired name in the search bar to see available options instantly.",
    },
    {
      q: "How long can I register a domain?",
      a: "You can register a domain for 1 to 10 years depending on your needs.",
    },
    {
      q: "Can I manage DNS records?",
      a: "Yes, you can easily manage A, CNAME, MX, and TXT records from your dashboard.",
    },
    {
  q: "Can I transfer my domain to another registrar?",
  a: "Yes, you can transfer your domain anytime using an authorization (EPP) code provided by your current registrar.",
},
  ];


  return (
    <>
    <ScrollToTop />
    <div className="bg-white text-zinc-700">

      {/* HERO */}
     <section className="w-full min-h-[80vh] flex items-center justify-center bg-white abc py-12">
       <div className="text-center max-w-4xl w-full px-4">
     
         {/* Heading */}
         <h1 className="text-[28px] sm:text-[42px] md:text-[52px] lg:text-[68px] font-extrabold leading-tight text-zinc-950 text-center abc -mt-0">
              Find Your Perfect <span className="text-[#E8000F]">Domain Name</span>
         </h1>
     
         {/* SEARCH BAR */}
         {/* <Search /> */}
  <div className=" mt-8 mb-10">
  <div className="flex items-center bg-white rounded-xl border overflow-hidden focus-within:ring-1 focus-within:ring-red-500">

    <input
      type="text"
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search your domain..."
      className="flex-1 px-5 py-4 outline-none"
    />

    <button
      onClick={() => handleSearch(query)}
      className="bg-red-600 text-white px-6 py-4 font-semibold hover:bg-red-700 transition"
    >
      Search
    </button>

  </div>
</div>

  {/* RESULTS */}
  <div className="w-full max-w-4xl space-y-4">
    {results.map((item, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-white p-5 rounded-xl border hover:shadow-md transition"
      >
        {/* LEFT */}
        <div className="text-left">
          <h4 className="font-semibold text-lg">
            {item.domain}
          </h4>
          <p className="text-sm text-zinc-500">
            {item.available ? "Available" : "Taken"}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <p className="font-semibold text-indigo-600">
            ₹{item.price}/yr
          </p>

          <button
            disabled={!item.available}
            className={`px-4 py-2 rounded-lg text-white ${
              item.available
                ? "bg-red-600 hover:bg-red-700"
                : "bg-zinc-400 cursor-not-allowed"
            }`}
          >
            {item.available ? "Add" : "Unavailable"}
          </button>
        </div>
      </div>
    ))}
  </div>

     
     <p className="mt-6 text-zinc-500 text-sm md:text-base">Instant domain search and availability check.<br />
Secure your brand name in seconds.</p>
      
       </div>
     </section>

      {/* FEATURES */}
   <div className="py-20 px-6 bg-black abc -mt-20">
  <h3 className="text-3xl sm:text-4xl lg:text-[47px] font-bold text-center mb-4 text-white">
    Everything You Need to <span className="text-[#E8000F]">Manage Domains</span>
  </h3>
  <p className="text-center text-zinc-500 max-w-2xl mx-auto mb-14 text-sm sm:text-base">
    From registration to DNS control, Ignorre Domains gives you complete
    ownership and flexibility over your online presence.
  </p>

<div
  className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
>
  {[
    {
      title: "Instant Domain Registration",
      desc: "Search and register domains in seconds with real-time availability and smart suggestions.",
      icon: CiGlobe,
    },
    {
      title: "Advanced DNS Management",
      desc: "Easily configure A, CNAME, MX, and TXT records with a powerful and simple interface.",
      icon: MdDns,
    },
    {
      title: "Email & Workspace Integration",
      desc: "Connect your domain to professional email services and manage communication seamlessly.",
      icon: HiOutlineMail,
    },
    {
      title: "Security & Privacy Protection",
      desc: "Keep your domain safe with WHOIS privacy, SSL support, and account protection.",
      icon: RiShieldCheckLine,
    },
  ].map((feature, i) => {
    const Icon = feature.icon;

    return (
      <div
        key={i}
        className="group p-6 bg-white border border-zinc-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <Icon className="text-3xl text-red-600 mb-4 transition-transform duration-300 group-hover:scale-110" />

        <h4 className="font-semibold text-lg mb-2 text-zinc-950">
          {feature.title}
        </h4>

        <p className="text-zinc-500 text-sm leading-relaxed">
          {feature.desc}
        </p>
      </div>
    );
  })}
</div>
</div>
  <div className="py-16 px-6 bg-white text-center abc">
      <h3 className="text-3xl sm:text-4xl lg:text-[47px] font-bold text-zinc-950 mb-4">
        Frequently Asked Questions
      </h3>

      <div className="max-w-4xl mx-auto space-y-3 mt-8 ">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-zinc-200 rounded-lg overflow-hidden"
          >
            {/* QUESTION */}
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-bold bg-white text-[16px] text-zinc-950"
            > 
              {item.q}
             <span className="transition text-lg">
  {active === i ? <FiChevronUp /> : <FiChevronDown />}
</span>
            </button>

            {/* ANSWER */}
            <div
              className={`px-5 text-[16px] text-zinc-500 overflow-hidden transition-all  duration-300 w-full flex justify-between items-center  text-left font-medium bg-white ${
                active === i ? "max-h-23 py-2" : "max-h-0"
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>

      <Footer />
    </div>
    </>
  );
};

export default Home;