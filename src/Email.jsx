import React from 'react'
import { useState } from "react";
// import Nav from './Nav.jsx'
import h1 from './assets/h1.png'
import h2 from './assets/h2.png'
import logo1 from './assets/logo1.png'
import logo2 from './assets/logo2.png'
import logo3 from './assets/logo3.png'
import logo4 from './assets/logo4.png'
import logo5 from './assets/logo5.png'
import logo6 from './assets/logo6.png'
import h3 from './assets/h3.png'
import emailbg from './assets/emailbg.png'
import drivebg from './assets/drivebg.png'
import meetbg from './assets/meetbg.png'
import adminbg from './assets/adminbg.png'
import t1 from './assets/t1.png'
import t2 from './assets/t2.png'
import t3 from './assets/t3.png'
import star from './assets/star.png'
import { FaCirclePlay } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { RiUserCommunityLine } from "react-icons/ri";
import { TbLockShare } from "react-icons/tb";
import { FaHandshakeAngle } from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import Footer from './Footer.jsx'
import useSlideUpOnScroll from "./useSlideUpOnScroll";

const Home = () => {

  const tabs = [
    {
      name: "Ignorre Webmail",
      title: "Professional email for modern teams",
      desc: "Send and receive business emails with custom domains, smart inbox tools, and enterprise-grade security. Ignorre Webmail is fast, reliable, and built for daily productivity.",
      img: emailbg,
      button: {
        text: "Learn More",
        link: "/pricing",
      },
    },
    {
      name: "Ignorre Drive",
      title: "Secure cloud storage and file sharing",
      desc: "Store, organize, and share files securely with Ignorre Drive. Collaborate with your team using shared folders, permissions, and real-time access.",
      img: drivebg,
      button: {
        text: "Learn More",
        link: "/pricing",
      },
    },
    {
      name: "Ignorre Meet",
      title: "Seamless video meetings, anywhere",
      desc: "Host secure video meetings directly from your browser. Share screens, collaborate in real time, and stay connected with your team no installations required.",
      img: meetbg,
      button: {
        text: "Learn More",
        link: "/pricing",
      },
    },
    {
      name: "Admin & Security",
      title: "Full control for admins and IT teams",
      desc: "Manage users, domains, storage, and security policies from a centralized admin console designed for scale and compliance.",
      img: adminbg,
      button: {
        text: "Learn More",
        link: "/pricing",
      },
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  useSlideUpOnScroll();

  return (
    <>
      {/* <Nav /> */}

      {/* home page */}

<div className='abc'>
  <div
    className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-6 py-20"
  >
    {/* CONTENT WRAPPER */}
    <div className="flex flex-col items-center text-center w-full max-w-7xl mx-auto">
      
      {/* Heading: Forced 3-line layout to match the screenshot exactly */}
      <h1 className="text-[28px] sm:text-[42px] md:text-[62px] lg:text-[74px] font-bold text-zinc-950 leading-[1.05] tracking-tight">
        Work Smarter With <span className="text-[#E7000B]">Secure Email,Storage & Meetings</span>
      </h1>

      {/* Paragraph: Width restricted to 720px to force the 4-line wrap seen in the image */}
      <p className="mt-8 text-[15px] sm:text-[18px] lg:text-[19px] font-medium text-zinc-400 leading-relaxed max-w-[720px]">
        Send professional emails, store and share files securely, and host meetings,
        all from one powerful, privacy-first workspace. Ignorre brings email,
        cloud storage, and video collaboration together to help teams
        move faster and stay in control.
      </p>

      {/* Button: Matches the dark gradient and rounded corners */}
      <div className="mt-12">
        <a href="/pricing">
          <button className="cursor-pointer px-10 py-3.5 text-[17px] font-semibold text-white rounded-xl 
            bg-[#E7000B]
            shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:opacity-95 transition-all">
            Get Stared
          </button>
        </a>
      </div>
    </div>
  </div>
</div>


      {/* logo strip */}


<div className="w-full bg-zinc-100 py-10 px-4">
  <div 
    className="slide-up mx-auto max-w-7xl
               grid items-center justify-items-center
               grid-cols-2      /* Mobile: 2 columns */
               md:grid-cols-3   /* Tablet: 3 columns */
               lg:grid-cols-4   /* Laptop: 4 columns */
               xl:grid-cols-6   /* Desktop: 6 columns */
               gap-8 md:gap-12 lg:gap-16"
  >
    <img src={logo1} alt="Logo 1" className="h-8 md:h-10 w-auto object-contain text-zinc-400" />
    <img src={logo2} alt="Logo 2" className="h-8 md:h-10 w-auto object-contain" />
    <img src={logo3} alt="Logo 3" className="h-8 md:h-10 w-auto object-contain" />
    <img src={logo4} alt="Logo 4" className="h-8 md:h-10 w-auto object-contain" />
    <img src={logo5} alt="Logo 5" className="h-8 md:h-10 w-auto object-contain" />
    <img src={logo6} alt="Logo 6" className="h-8 md:h-10 w-auto object-contain" />
  </div>
</div>


      {/* ignorr features */}
      <div className='bg-white abc'>
        <div className="slide-up flex flex-col xl:flex-row items-center justify-center gap-2 2xl:pb-10">

          {/* LEFT CONTENT */}
          <div className="mt-10 px-6 sm:px-10 2xl:ml-0 2xl:mt-30 ">
            <p className="text-[32px] sm:text-[36px] lg:text-[40px] font-semibold text-zinc-950 text-center">
              A Complete Workspace, Built for <span className="text-[#E7000B]">Modern Teams</span>
            </p>

            <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-medium text-zinc-400 text-center 2xl:mt-3">
              Ignorre Workspace brings email, cloud storage, and video meetings together in one secure platform. <br className="hidden lg:block" />
              Designed to simplify collaboration, improve productivity, and scale with your business.
            </p>

            {/* CARD 1 */}
            <div className="slide-up w-full max-w-3xl flex flex-col sm:flex-row gap-5 p-5 bg-zinc-50 border-l-7 border-l-[#E7000B] border border-zinc-200 rounded-2xl mt-20">
              <div className="bg-white h-15 w-15 flex items-center justify-center mt-3 p-4 rounded-full flex-shrink-0">
                <RiUserCommunityLine size={38} className="text-[#E7000B]" />
              </div>
              <div className="mt-3">
                <p className="text-[20px] sm:text-[22px] lg:text-[24px] text-[#E7000B] font-medium">
                  Communicate professionally
                </p>
                <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-zinc-400 font-medium">
                  Send and receive business emails with custom domains, smart inbox tools, and enterprise-grade security using Ignorre Webmail.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="slide-up w-full max-w-3xl flex flex-col sm:flex-row gap-5 p-5 bg-zinc-50 border-l-7 border-l-[#E7000B] border border-zinc-200 rounded-2xl mt-5">
              <div className="bg-white h-15 w-15 flex items-center justify-center mt-3 p-4 rounded-full flex-shrink-0">
                <TbLockShare size={38} className="text-[#E7000B]" />
              </div>
              <div className="mt-3">
                <p className="text-[20px] sm:text-[22px] lg:text-[24px] text-[#E7000B] font-medium">
                  Store & share securely
                </p>
                <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-zinc-400 font-medium">
                  Upload, organize, and share files with team members using Ignorre Drive with fine-grained access control and secure cloud storage.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="slide-up w-full max-w-3xl flex flex-col sm:flex-row gap-5 p-5 bg-zinc-50 border-l-7 border-l-[#E7000B] border border-zinc-200 rounded-2xl mt-5">
              <div className="bg-white h-15 w-15 flex items-center justify-center mt-3 p-4 rounded-full flex-shrink-0">
                <FaHandshakeAngle size={38} className="text-[#E7000B]" />
              </div>
              <div className="mt-3">
                <p className="text-[20px] sm:text-[22px] lg:text-[24px] text-[#E7000B] font-medium">
                  Collaborate in real time
                </p>
                <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-zinc-400 font-medium">
                  Host secure video meetings, share screens, and collaborate instantly with Ignorre Meet, no installs required.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="slide-up w-full max-w-3xl flex flex-col sm:flex-row gap-5 p-5 bg-zinc-50 border-l-7 border-l-[#E7000B] border border-zinc-200 rounded-2xl mt-5">
              <div className="bg-white h-15 w-15 flex items-center justify-center mt-3 p-4 rounded-full flex-shrink-0">
                <MdOutlineManageAccounts size={38} className="text-[#E7000B]" />
              </div>
              <div className="mt-3">
                <p className="text-[20px] sm:text-[22px] lg:text-[24px] text-[#E7000B] font-medium">
                  Manage everything centrally
                </p>
                <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-zinc-400 font-medium">
                  Control users, permissions, storage, and security policies from a single admin dashboard built for teams and enterprises.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          {/* <div className="mt-10 lg:mt-35 lg:ml-30 xl:ml-0 flex justify-center lg:block">
      <img src={h3} alt="" className="h-140 sm:h-180 lg:h-220" />
    </div> */}

        </div>
      </div>



      {/* ignorr product tabs */}
<div className='bg-black abc w-full overflow-hidden mt-10'>
  {/* CONTAINER: Max-width keeps it centered on zoom, padding prevents edge-touching */}
  <div className="slide-up py-16 md:py-24 px-4 sm:px-10 max-w-7xl mx-auto">

    <p className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-white text-center leading-tight">
      Powerful Tools to Run Your Entire <span className="text-[#E7000B]">Workspace</span>
    </p>

    <div className="w-full mt-10 lg:mt-20">

      {/* TAB NAMES: 
          - Changed flex-col (mobile) to flex-row (tablet+)
          - Added 'no-scrollbar' and inline styles to kill the scrollbar
      */}
      <div
  className="flex flex-col sm:flex-row sm:justify-center  border-zinc-200 mb-10 overflow-x-auto no-scrollbar"
  style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
>
  {tabs.map((tab, index) => (
    <button
      key={index}
      onClick={() => setActiveTab(index)}
      className={`pb-4 px-6 text-[16px] lg:text-[18px] font-medium whitespace-nowrap transition-all duration-300 border-b-4 -mb-[1px]
        ${
          activeTab === index
            ? "text-[#E7000B] border-[#E7000B]"
            : "text-zinc-400 border-transparent hover:text-zinc-600"
        }`}
    >
      {tab.name}
    </button>
  ))}
</div>

      {/* TAB CONTENT */}
      <div className="relative">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center transition-all duration-500
              ${activeTab === index
                ? "opacity-100 translate-y-0 relative"
                : "opacity-0 translate-y-5 absolute inset-0 pointer-events-none hidden"
              }`}
          >
            {/* IMAGE */}
            <div className="flex justify-center bg-zinc-50 rounded-3xl overflow-hidden shadow-sm">
              <img
                src={tab.img}
                alt={tab.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col gap-4 lg:gap-6 text-center lg:text-left items-center lg:items-start">
              <p className="text-[16px] lg:text-[18px] text-red-600 font-semibold uppercase tracking-wide">
                {tab.name}
              </p>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[44px] font-bold text-white leading-tight">
                {tab.title}
              </h2>

              <p className="text-[16px] lg:text-[18px] text-zinc-500 leading-relaxed max-w-xl">
                {tab.desc}
              </p>

              <div className="mt-4">
                <a
                  href={tab.button.link}
                  className="inline-block py-3 px-10 text-[18px] font-medium text-white rounded-xl bg-[#E7000B] transition-all duration-200 ease-out hover:brightness-125 hover:shadow-lg"
                >
                  {tab.button.text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</div>


      {/* message form */}




      {/* client reviews */}
<div className='bg-white abc w-full min-h-screen flex flex-col justify-center items-center'>
  <div className="slide-up
          mx-auto w-full max-w-7xl
          pt-20 lg:pt-30 
          px-6 sm:px-10 
          2xl:px-20 
          pb-30 lg:pb-50">

    {/* Header Section: Added text-center to keep it aligned during zoom out */}
    <div className="w-full text-center">
      <p className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-zinc-950 leading-tight ">
        The Results Speak for Themselves, So Do Our<span className="text-[#E7000B]"> Customers</span>
      </p>
    </div>

    {/* Grid Section: Centered using mx-auto and justify-items-center */}
    <div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-10 justify-items-center">

      {[
        { img: t1, name: "Rohan Mehta", co: "NexaTech Solutions", text: "Ignorre Workspace transformed how our team communicates. Having email, file storage, and meetings in one place has significantly improved productivity." },
        { img: t2, name: "Ananya Kapoor", co: "CloudForge Labs", text: "Switching to Ignorre Workspace gave us better control and security without sacrificing ease of use. Our team adopted it quickly." },
        { img: t3, name: "Arjun Patel", co: "Elevate Systems", text: "Ignorre Drive and Webmail work seamlessly together. Collaboration is faster, and managing users and permissions is incredibly simple." }
      ].map((testimonial, index) => (
        <div key={index} className="slide-up min-h-[380px] w-full max-w-[450px] bg-white border border-zinc-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
          
          <div className="flex flex-col gap-4">
            <FaQuoteLeft size={28} className="text-[#E7000B] flex-shrink-0" />
            <p className="text-zinc-600 leading-relaxed text-base sm:text-lg italic">
              "{testimonial.text}"
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-100 pt-4">
            <div className="flex items-center gap-3">
              <img src={testimonial.img} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover flex-shrink-0" />
              <div className="flex flex-col text-zinc-950 font-semibold text-sm">
                <p className="whitespace-nowrap">{testimonial.name}</p>
                <p className="text-xs opacity-80 text-[#E7000B]">{testimonial.co}</p>
              </div>
            </div>
            
            <div className="flex gap-1 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={star} alt="star" className="h-5 w-5 object-contain" />
              ))}
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</div>


      <Footer />

    </>
  )
}

export default Home