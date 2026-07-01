import React from 'react'
import { useEffect, useRef, useState} from "react";
// import Navbar from './Navbar';
import { RiArrowRightUpLine } from "react-icons/ri";
import h1 from './assets/h1.jpg';
import h2 from './assets/h2.jpg';
import h3 from './assets/h3.jpg';
import h4 from './assets/h4.jpg';
import home from './assets/home.png';
import h5 from './assets/h5.svg';
import { MdOutlineEmail } from "react-icons/md";
import pf1 from './assets/pf1.png';
import pf2 from './assets/pf2.png';
import pf3 from './assets/pf3.png';
import startup from './assets/startup.jpg';
import c1 from './assets/c1.svg';
import c2 from './assets/c2.svg';
import c3 from './assets/c3.svg';
import c4 from './assets/c4.jpg';
import client1 from './assets/client1.jpg';
import client2 from './assets/client2.jpg';
import client3 from './assets/client3.jpg';
import client4 from './assets/client4.jpg';
import client5 from './assets/client5.jpg';
import artical1 from './assets/artical1.jpg';
import artical2 from './assets/artical2.jpg';
import artical3 from './assets/artical3.jpg';
import Footer from './Footer';
import faq from './assets/faq.jpg';
import useSlideUpOnScroll from "./useSlideUpOnScroll";


const Home = () => {

  useSlideUpOnScroll();
 
const faqs = [
  {
    question: "What is ignorre DNS?",
    answer:
      "ignorre DNS is a high-performance DNS management platform designed for speed, security, and scalability."
  },
  {
    question: "How fast are DNS updates?",
    answer:
      "DNS changes propagate instantly across our global network without any manual refresh."
  },
  {
    question: "Does ignorre DNS support multiple domains?",
    answer:
      "Yes, you can manage multiple domains and records from a single dashboard."
  },
  {
    question: "Is DNS security included?",
    answer:
      "We provide DNSSEC, rate-limiting, and advanced protection against DNS attacks."
  },
  {
    question: "Can I use ignorre DNS with my existing provider?",
    answer:
      "Absolutely. You can integrate ignorre DNS alongside your current infrastructure."
  }
];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* page first  */}
    <div className="bg-white w-full overflow-x-hidden">
  <div className="slide-up min-h-[85vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">

    {/* Left Section */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center">

      <div className="flex flex-col gap-4 mt-10 lg:mt-20 xl:mt-28 2xl:mt-36">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] 2xl:text-[54px] leading-tight text-zinc-950 font-bold">
          Powering secure, lightning-fast
          <br className="hidden lg:block xl:hidden" />
          internet infrastructure
        </h1>

        <p className="text-[14px] sm:text-[16px] text-zinc-500 font-semibold">
          Take full control of your network with ignorre DNS —
          <br />
          manage DNS records, proxies, email routing, SSL, and security from
          <br />
          one unified dashboard.
        </p>

        <button
          className="flex items-center gap-2 text-[14px] h-12 w-48 justify-center rounded-xl bg-black text-white border border-black transition-all duration-300 hover:bg-white hover:text-black"
        >
          Get Started for Free
          <RiArrowRightUpLine size={20} />
        </button>
      </div>

      {/* White Card */}
      <div className="w-full max-w-[700px] mt-10 rounded-2xl bg-white p-5 flex flex-col sm:flex-row gap-6 sm:gap-0">

        <div className="w-full sm:w-1/2">
          <h1 className="text-[18px] sm:text-[20px] bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent font-bold">
            Start building with ignorre
            <br />
            DNS
          </h1>

          <div className="flex mt-5">
            <div className="h-9 w-9 rounded-full text-center text-[28px] leading-9">+</div>
            <img src={h4} alt="" className="h-9 w-9 -ml-1 rounded-full" />
            <img src={h3} alt="" className="h-10 w-10 -ml-1 rounded-full" />
            <img src={h2} alt="" className="h-11 w-11 -ml-1 rounded-full" />
            <img src={h1} alt="" className="h-12 w-12 -ml-1 rounded-full" />
          </div>
        </div>

        <div className="w-full sm:w-1/2 mt-0 sm:pl-5">
          <p className="text-[14px] sm:text-[16px] text-zinc-500">
            Launch faster with a secure, developer-friendly
            <br />
            DNS platform designed for performance,
            <br />
            reliability, and scale.
          </p>

          <div className="flex gap-2 mt-5">
            <MdOutlineEmail size={25} className="flex-shrink-0" />
            <input
              type="text"
              placeholder="Email"
              className="w-full border-0 border-b border-zinc-200 focus:border-b-2 focus:border-black focus:outline-none transition-all duration-300 min-w-0"
            />
            <RiArrowRightUpLine size={25} className="flex-shrink-0" />
          </div>
        </div>

      </div>
    </div>

    {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-15">
      <img
        src={home}
        alt=""
        className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[700px]"
      />
    </div>

  </div>
</div>

      {/* page second */}
   <div className="bg-white abc overflow-x-hidden">
  <div
    className="
      slide-up
      min-h-[90vh]
      w-full
      max-w-7xl
      mx-auto
      px-6 sm:px-10 lg:px-12
      pt-16 xl:pt-32 2xl:pt-40
    "
  >
    {/* HEADING */}
    <div>
      <p className="text-[16px] text-zinc-500 font-semibold">
        FEATURES EXPLORED
      </p>

      <h1
        className="
          text-[28px]
          sm:text-[32px]
          lg:text-[38px]
          2xl:text-[44px]
          text-zinc-950
          font-semibold
        "
      >
        Powerful Infrastructure Features
      </h1>
    </div>

    {/* FEATURE CARDS */}
    <div
      className="
        mt-10
        flex flex-col
        md:flex-col
        lg:grid lg:grid-cols-2
        xl:grid-cols-3
        gap-8 xl:gap-10
        items-center
      "
    >
      {/* CARD 1 */}
      <div className="w-full max-w-[420px]">
        <div className="w-full aspect-[4/3] sm:aspect-[7/5] lg:aspect-[4/3] xl:aspect-[7/5] overflow-hidden border border-zinc-200 rounded-2xl bg-white">
          <img
            src={pf1}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-[18px] lg:text-[20px] mt-3 mb-4 text-zinc-950 font-semibold">
          Smart DNS Management
        </h1>

        <p className="text-[14px] lg:text-[16px] text-zinc-500">
          Manage DNS records with real-time updates, fast
          propagation, and full visibility — all from one dashboard.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="w-full max-w-[420px]">
        <div className="w-full aspect-[4/3] sm:aspect-[7/5] lg:aspect-[4/3] xl:aspect-[7/5] overflow-hidden border border-zinc-200 rounded-2xl bg-white">
          <img
            src={pf2}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-[18px] lg:text-[20px] mt-3 mb-4 text-zinc-950 font-semibold">
          Advanced Proxy Manager
        </h1>

        <p className="text-[14px] lg:text-[16px] text-zinc-500">
          Route traffic through secure, high-performance proxies
          to improve speed, reliability, and control.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="w-full max-w-[420px]">
        <div className="w-full aspect-[4/3] sm:aspect-[7/5] lg:aspect-[4/3] xl:aspect-[7/5] overflow-hidden border border-zinc-200 rounded-2xl bg-white">
          <img
            src={pf3}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-[18px] lg:text-[20px] mt-3 mb-4 text-zinc-950 font-semibold">
          Analytics & Monitoring
        </h1>

        <p className="text-[14px] lg:text-[16px] text-zinc-500">
          Monitor DNS queries and traffic in real time
          with clear, actionable insights.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* page third */}
   <div className="bg-white abc overflow-x-hidden">
  <div
    className="
      slide-up
      min-h-[90vh]
      w-full
      max-w-7xl
      mx-auto
      flex flex-col
      lg:flex-row
      items-center
      justify-center
      gap-8 lg:gap-10
      px-6 sm:px-10 lg:px-12
      pt-16 xl:pt-32 2xl:pt-40
    "
  >
    {/* IMAGE */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={startup}
        alt=""
        className="
          w-full
          sm:w-[85%]
          md:w-[75%]
          lg:w-full
          max-w-[700px]
          h-auto
          xl:h-[520px]
          object-cover
          rounded-2xl
        "
      />
    </div>

    {/* CONTENT */}
    <div
      className="
        w-full
        lg:w-1/2
        flex flex-col
        gap-5
        text-center
        lg:text-left
        justify-center
      "
    >
      <h1
        className="
          text-[22px]
          sm:text-[26px]
          xl:text-[28px]
          2xl:text-[36px]
          text-zinc-950
          font-semibold
        "
      >
        Built for startups & businesses running
        {/* <br className="hidden xl:block" /> */}
        modern infrastructure
      </h1>

      <p className="text-[14px] sm:text-[18px] text-zinc-500">
        Take full control of your internet infrastructure with ignorre DNS.
      </p>

      <p className="text-[14px] sm:text-[18px] text-zinc-500">
        From DNS management and proxy routing to SSL, email routing,
        and account security,
        <br className="hidden xl:block" />
        everything is designed to help teams
        scale securely and reliably.
      </p>

      <p className="text-[14px] sm:text-[18px] text-zinc-500">
        ignorre DNS simplifies complex network operations, reduces
        operational overhead,
        <br className="hidden xl:block" />
        and gives businesses the confidence
        to grow without infrastructure limits.
      </p>

      <button
        className="
          flex items-center gap-2
          mt-6 lg:mt-8
          h-12 w-48
          justify-center
          rounded-xl
          bg-black text-white
          border border-black
          transition-all duration-300
          hover:bg-white hover:text-black
          mx-auto lg:mx-0
        "
      >
        Explore More
        <RiArrowRightUpLine size={20} />
      </button>
    </div>
  </div>
</div>


      {/* page fourth */}

   <div className="bg-white overflow-x-hidden">
  <div
    className="
      slide-up
      min-h-[80vh]
      w-full
      max-w-7xl
      mx-auto
      flex flex-col
      lg:flex-row
      items-center
      justify-center
      gap-8 lg:gap-10
      px-6 sm:px-10 lg:px-12
      pt-16 xl:pt-20
    "
  >
    {/* LEFT SECTION */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center">

      {/* TOP CARD */}
      <div
        className="
          flex flex-col gap-5
          bg-white
          p-7
          rounded-2xl
          w-full
          max-w-[700px]
          mx-auto lg:mx-0
        "
      >
        <h1
          className="
            text-[22px]
            sm:text-[26px]
            lg:text-[28px]
            2xl:text-[28px]
            text-zinc-950
            font-semibold
          "
        >
          Where performance meets secure infrastructure
        </h1>

        <p className="text-[14px] sm:text-[16px] text-zinc-500">
          Build and scale your internet infrastructure with confidence.
          ignorre DNS brings DNS management, proxy routing, SSL, email
          routing, and strong account security together in one powerful
          platform — designed for reliability, speed, and growth.
          <br />
          <br />
          Simplify complex networking, reduce risk, and focus on scaling
          your business while ignorre DNS handles the foundation.
        </p>

        <button
          className="
            flex items-center gap-2
            h-11 w-48
            justify-center
            rounded-xl
            bg-black text-white
            border border-black
            transition-all duration-300
            hover:bg-white hover:text-black
          "
        >
          Discover More
          <RiArrowRightUpLine size={20} />
        </button>
      </div>

      {/* BOTTOM CARD */}
      <div
        className="
          flex flex-col gap-5
          bg-white
          p-8
          rounded-2xl
          w-full
          max-w-[700px]
          mx-auto lg:mx-0
          mt-5
          justify-center
        "
      >
        <div className="flex gap-2">
          <img
            src={c1}
            alt=""
            className="bg-red-50 rounded-xl p-1"
          />
          <p className="text-zinc-500">
            Manage DNS, proxies, SSL, and email routing from a single,
            intuitive dashboard.
          </p>
        </div>

        <div className="flex gap-2">
          <img
            src={c2}
            alt=""
            className="bg-red-50 rounded-xl p-1"
          />
          <p className="text-zinc-500 abc">
            Secure domains and accounts with SSL, secure routing, and 2FA.
          </p>
        </div>

        <div className="flex gap-2">
          <img
            src={c3}
            alt=""
            className="bg-red-50 rounded-xl p-1"
          />
          <p className="text-zinc-500 abc">
            Monitor traffic, DNS queries, and performance with clear,
            real-time analytics.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <img
        src={c4}
        alt=""
        className="
          w-full
          sm:w-[85%]
          md:w-[75%]
          lg:w-full
          max-w-[700px]
          h-auto
          xl:h-[580px]
          object-cover
        "
      />
    </div>
  </div>
</div>


      {/* page fifth */}

   <div className="bg-white abc overflow-x-hidden">
  <div
    className="
      slide-up
      min-h-[70vh]
      w-full
      max-w-7xl
      mx-auto
      px-6 sm:px-10 lg:px-12
      pt-20 xl:pt-32
    "
  >

    {/* HEADING */}
    <div className="text-center lg:text-left">
      <p className="text-[14px] sm:text-[18px] text-zinc-500">
        Testimonials
      </p>

      <h1
        className="
          text-[32px]
          sm:text-[40px]
          lg:text-[48px]
          text-zinc-950
          font-semibold
        "
      >
        What Our Clients Say
      </h1>
    </div>

    {/* TESTIMONIAL CARDS */}
    <div
      className="
        mt-10
        flex flex-col
        lg:flex-row
        items-center
        justify-center
        gap-8 lg:gap-10
      "
    >

      {/* CARD 1 */}
      <div
        className="
          w-full
          max-w-[700px]
          bg-white
          rounded-2xl
          flex flex-col sm:flex-row
          group
          overflow-hidden
        "
      >
        <div className="w-full sm:flex-1 p-6 lg:p-8">
          <h1 className="text-[18px] lg:text-[20px] mb-3 text-zinc-950 font-semibold">
            Reliable DNS Performance
          </h1>

          <p className="text-[14px] lg:text-[16px] text-zinc-500">
            ignorre DNS has significantly improved our domain reliability.
            DNS updates propagate instantly, and managing multiple domains
            from one dashboard is effortless.
          </p>

          <p className="mt-6 lg:mt-10 text-[16px] text-zinc-950 font-semibold">
            Brooklyn Simmons
          </p>

          <p className="text-[14px] text-zinc-500">
            Florida, US
          </p>
        </div>

        <div className="w-full sm:w-[240px] h-[500px] sm:h-auto bg-black">
          <img
            src={client1}
            alt=""
            className="
              h-full
              w-full
              object-cover
              object-[center_center]
              transition-transform
              duration-500
              ease-out
              group-hover:scale-110
            "
          />
        </div>
      </div>

      {/* CARD 2 */}
      <div
        className="
          w-full
          max-w-[700px]
          bg-white
          rounded-2xl
          flex flex-col sm:flex-row
          group
          overflow-hidden
        "
      >
        <div className="w-full sm:flex-1 p-6 lg:p-8">
          <h1 className="text-[18px] lg:text-[20px] mb-3 text-zinc-950 font-semibold">
            Secure & Scalable Infrastructure
          </h1>

          <p className="text-[14px] lg:text-[16px] text-zinc-500">
            From SSL management to secure proxy routing and 2FA,
            ignorre DNS gives us the confidence to scale without
            worrying about infrastructure security.
          </p>

          <p className="mt-6 lg:mt-10 text-[16px] text-zinc-950 font-semibold">
            Courtney Henry
          </p>

          <p className="text-[14px] text-zinc-500">
            Toronto, US
          </p>
        </div>

        <div className="w-full sm:w-[240px] h-[500px] sm:h-auto bg-black">
          <img
            src={client2}
            alt=""
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              ease-out
              group-hover:scale-110
            "
          />
        </div>
      </div>

    </div>
  </div>
</div>


      {/* page sixth */}

     <div className="bg-white abc">
   <div
    className=" slide-up
      min-h-[90vh] w-full max-w-7xl
      flex flex-col
      lg:flex-row
      gap-8 lg:gap-5
      items-center justify-center
      mx-auto
      px-6 sm:px-10
      lg:pt-50 pt-20
    "
  >
    {/* COLUMN 1 */}
    <div className="w-full lg:w-[32%] flex flex-col gap-5">
      <div className="w-full rounded-2xl">
        <img
          src={client3}
          alt=""
          className="w-full h-[220px] sm:h-[260px] lg:h-72 object-cover rounded-2xl"
        />
      </div>

      <div className="w-full bg-white rounded-2xl p-6 lg:p-8">
        <p className="text-[16px] lg:text-[18px] font-bold text-zinc-950">
          Active Domains
        </p>
        <p className="text-[14px] lg:text-[15px] text-zinc-700">
          Trusted by thousands of domains running on ignorre DNS worldwide.
        </p>
        <p className="text-[36px] sm:text-[40px] lg:text-[50px] mt-6 lg:mt-10 text-zinc-950 font-semibold">5k+</p>
        <p className="text-[14px] text-zinc-950 font-semibold">Domains Managed</p>
      </div>
    </div>

    {/* COLUMN 2 */}
    <div className="w-full lg:w-[32%] flex flex-col gap-5">
      <div className="w-full bg-white rounded-2xl p-6 lg:p-8">
        <p className="text-[16px] lg:text-[18px] font-bold text-zinc-950">
          Global DNS Access
        </p>
        <p className="text-[14px] lg:text-[15px] text-zinc-700">
          Cloud-based DNS infrastructure enabling fast, reliable access
          from anywhere in the world.
        </p>
        <p className="text-[36px] sm:text-[40px] lg:text-[50px] mt-6 lg:mt-10 text-zinc-950 font-semibold">100%</p>
        <p className="text-[14px] text-zinc-950 font-semibold">Always Available</p>
      </div>

      <div className="w-full rounded-2xl">
        <img
          src={client4}
          alt=""
          className="w-full h-[220px] sm:h-[260px] lg:h-72 object-cover rounded-2xl"
        />
      </div>
    </div>

    {/* COLUMN 3 */}
    <div className="w-full lg:w-[32%] flex flex-col gap-5">
      <div className="w-full rounded-2xl">
        <img
          src={client5}
          alt=""
          className="w-full h-[220px] sm:h-[260px] lg:h-72 object-cover rounded-2xl"
        />
      </div>

      <div className="w-full bg-white rounded-2xl p-6 lg:p-8">
        <p className="text-[16px] lg:text-[18px] font-bold text-zinc-950">
          Powerful Capabilities
        </p>
        <p className="text-[14px] lg:text-[15px] text-zinc-700">
          A growing set of infrastructure features designed for modern,
          scalable businesses.
        </p>
        <p className="text-[36px] sm:text-[40px] lg:text-[50px] mt-6 lg:mt-10 text-zinc-950 font-semibold">80+</p>
        <p className="text-[14px] text-zinc-950 font-semibold">Core Features</p>
      </div>
    </div>
  </div>
</div>


      {/* page seventh */}

  <div className="bg-white abc overflow-x-hidden">
   <div
    className="
      slide-up
      min-h-[90vh]
      w-full
      max-w-7xl
      mx-auto
      flex flex-col
     
      
      gap-8 lg:gap-10
      px-6 sm:px-10 lg:px-12
      pt-16 xl:pt-32 2xl:pt-40
    "
  >

    {/* HEADING */}
    <div className="text-center lg:text-left">
      <p className="text-[14px] sm:text-[16px] text-zinc-500 font-semibold">
       Our Blogs
      </p>

      <p
        className="
          text-[28px]
          sm:text-[32px]
          lg:text-[38px]
          2xl:text-[44px]
          text-zinc-950
          font-semibold
        "
      >
        Articles & Resources
      </p>
    </div>

    {/* BLOG CARDS */}
    <div
      className="
        mt-10
        flex flex-col
        lg:flex-row
        items-center
        justify-center
        gap-8 lg:gap-6
      "
    >

      {/* CARD 1 */}
      <div
        className="
          group
          w-full
          flex-1
          h-auto
          xl:min-h-[520px]
          bg-white
          p-5
          rounded-2xl
          transition-all
          duration-300
        "
      >
        <div className="w-full h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden rounded-2xl">
          <img
            src={artical1}
            alt=""
            className="
              h-full
              w-full
              object-cover
              rounded-2xl
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.05]
            "
          />
        </div>

        <p className="mt-6 mb-2 text-[14px] text-zinc-500 font-semibold">
          DNS & Infrastructure | Jan 28, 2025
        </p>

        <p className="text-[16px] lg:text-[18px] font-bold text-zinc-950">
          How to build a reliable DNS infrastructure at scale
        </p>

        <p className="text-[14px] lg:text-[16px] mt-6 flex items-center gap-1 text-zinc-500 font-semibold">
          Read Article
          <RiArrowRightUpLine
            size={18}
            className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
          />
        </p>
      </div>

      {/* CARD 2 */}
      <div
        className="
          group
          w-full
          flex-1
          h-auto
          xl:min-h-[520px]
          bg-white
          p-5
          rounded-2xl
          transition-all
          duration-300
        "
      >
        <div className="w-full h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden rounded-2xl">
          <img
            src={artical2}
            alt=""
            className="
              h-full
              w-full
              object-cover
              rounded-2xl
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.05]
            "
          />
        </div>

        <p className="mt-6 mb-2 text-[14px] text-zinc-500 font-semibold">
          Security & Performance | Jan 28, 2025
        </p>

        <p className="text-[16px] lg:text-[18px] font-bold text-zinc-950">
          Using proxies to improve performance and security
        </p>

        <p className="text-[14px] lg:text-[16px] mt-6 flex items-center gap-1 text-zinc-500 font-semibold">
          Read Article
          <RiArrowRightUpLine
            size={18}
            className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
          />
        </p>
      </div>

      {/* CARD 3 */}
      <div
        className="
          group
          w-full
          flex-1
          h-auto
          xl:min-h-[520px]
          bg-white
          p-5
          rounded-2xl
          transition-all
          duration-300
        "
      >
        <div className="w-full h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden rounded-2xl">
          <img
            src={artical3}
            alt=""
            className="
              h-full
              w-full
              object-cover
              rounded-2xl
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.05]
            "
          />
        </div>

        <p className="mt-6 mb-2 text-[14px] text-zinc-500 font-semibold">
          Security & Compliance | Jan 28, 2025
        </p>

        <p className="text-[16px] lg:text-[18px] font-bold text-zinc-950">
          Why SSL and 2FA are critical for modern infrastructure
        </p>

        <p className="text-[14px] lg:text-[16px] mt-6 flex items-center gap-1 text-zinc-500 font-semibold">
          Read Article
          <RiArrowRightUpLine
            size={18}
            className="transition-transform duration-300 ease-in-out group-hover:rotate-45"
          />
        </p>
      </div>

    </div>
  </div>
</div>


      {/* page eighth */}

   <div className="bg-white abc overflow-x-hidden">
  <div
    className="
      slide-up
      min-h-[90vh]
      w-full
      max-w-7xl
      mx-auto
      px-6 sm:px-10 lg:px-12
      pt-20 lg:pt-24 xl:pt-10
      pb-20
    "
  >

    {/* HEADING */}
    <div className="text-center lg:text-left">
      <p className="text-[14px] sm:text-[16px] text-zinc-500 font-semibold">
        FAQ's
      </p>

      <p
        className="
          text-[28px]
          sm:text-[32px]
          lg:text-[38px]
          2xl:text-[44px]
          text-zinc-950
          font-semibold
        "
      >
        Frequently Asked Questions
      </p>
    </div>

    {/* CONTENT */}
    <div
      className="
        flex flex-col
        lg:flex-row
        min-h-[65vh]
        items-center
        justify-center
        gap-10 lg:gap-12
        mt-10
      "
    >

      {/* IMAGE SECTION */}
      <div
        className="
          w-full
          lg:w-1/2
          flex
          justify-center
          items-center
        "
      >
        <img
          src={faq}
          alt=""
          className="
            w-full
            max-w-[500px]
            sm:max-w-[550px]
            lg:max-w-[600px]
            h-auto
            xl:h-[560px]
            object-cover
            rounded-2xl
          "
        />
      </div>

      {/* FAQ SECTION */}
      <div
        className="
          w-full
          lg:w-1/2
        "
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-zinc-300 overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  px-2 sm:px-6
                  py-4
                  flex
                  justify-between
                  items-center
                  text-left
                  text-[16px]
                  sm:text-[20px]
                  font-semibold
                  hover:text-zinc-950
                "
              >
                {faq.question}

                <span
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-2 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 py-4 opacity-100"
                    : "max-h-0 py-0 opacity-0"
                }`}
              >
                <p className="text-zinc-500 text-[14px] sm:text-[16px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</div>

      <Footer />

    </>
  )
}

export default Home;