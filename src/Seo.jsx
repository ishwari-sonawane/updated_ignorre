// import 'normalize.css';
import React from 'react'
import { useEffect, useRef, useState } from "react";
// import TextReveal from './TextReveal.jsx'
import useSlideUp from "./useSlideUpOnScroll";
import redstar from './assets/redstar.svg'
import redinput from './assets/redinput.svg'
import Star from './assets/Star.svg'
import input from './assets/input.svg'
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdPricetag } from "react-icons/io";
import { BsPinAngleFill } from "react-icons/bs";
import { IoCheckboxSharp } from "react-icons/io5";
import { TfiPlus } from "react-icons/tfi";
import { TfiMinus } from "react-icons/tfi";
import { FaCheckSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaGooglePlus } from "react-icons/fa6";
import arrow1 from './assets/arrow1.svg'
import arrow2 from './assets/arrow2.svg'
import arrow3 from './assets/arrow3.svg'
import arrow4 from './assets/arrow4.svg'
import logo1 from './assets/logo1.svg'
import logo2 from './assets/logo2.svg'
import logo3 from './assets/logo3.svg'
import logo4 from './assets/logo4.svg'
import logo5 from './assets/logo5.svg'
import f1 from './assets/f1.svg'
import f2 from './assets/f2.svg'
import f3 from './assets/f3.svg'
import f4 from './assets/f4.svg'
import f5 from './assets/f5.svg'
import f6 from './assets/f6.svg'
import f7 from './assets/f7.svg'
import f9 from './assets/f9.svg'
import f10 from './assets/f10.svg'
import f11 from './assets/f11.svg'
import f12 from './assets/f12.svg'
import f13 from './assets/f13.svg'
import f14 from './assets/f14.svg'
import f15 from './assets/f15.svg'
import redtraffic from './assets/redtraffic.svg'
import redscore from './assets/redscore.svg'
import redstar2 from './assets/redstar2.svg'
import redstarh from './assets/redstarh.svg'
import redbrandbg from './assets/redbrandbg.png'
import traffic from './assets/traffic.svg'
import score from './assets/score.svg'
import star2 from './assets/star2.svg'
import starh from './assets/starh.svg'
import brand from './assets/brand.svg'
import whyus1 from './assets/whyus1.png'
import whyus2 from './assets/whyus2.png'
import whyus3 from './assets/whyus3.png'
import whyus4 from './assets/whyus4.png'
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'
import p5 from './assets/p5.png'
import t1 from './assets/t1.png'
import t2 from './assets/t2.png'
import t3 from './assets/t3.png'
import t4 from './assets/t4.png'
import seo1 from './assets/seo1.png'
import seo2 from './assets/seo2.png'
import seo3 from './assets/seo3.png'
import img from './assets/img.png'
import Footer from './Footer.jsx'
// import logowhite from './assets/logowhite.png'

// import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSlideUpOnScroll from './useSlideUpOnScroll';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useSlideUpOnScroll();


    const cardsRef = useRef([]);
   const values = [
  { value: 50, suffix: "%" },
  { value: 10, suffix: "+ hrs/week" },
  { value: 2000, suffix: "+" },
  { value: 98, suffix: "%" },
];
useEffect(() => {
  cardsRef.current.forEach((card, index) => {
    if (!card) return;

    const numberEl = card.querySelector(".stat-number");
    const { value, suffix } = values[index];

    // Flip animation
    gsap.fromTo(
      card,
      { rotateY: 90, opacity: 0 },
      {
        rotateY: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Number shuffle
    let counter = { val: 0 };

    gsap.to(counter, {
      val: value,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        numberEl.innerText =
          `${Math.floor(counter.val).toLocaleString()}${suffix}`;
      },
    });
  });
}, []);

useEffect(() => {
  gsap.utils.toArray(".floating-img").forEach((img, i) => {
    gsap.to(img, {
      x: i % 2 === 0 ? 10 : -10,     // left ↔ right
      y: i % 2 === 0 ? -10 : 10,    // up ↕ down
      duration: 1 + i,           // slow & varied
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  });
}, []);


useEffect(() => {
  gsap.fromTo(
    ".zoom-card",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".zoom-card",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);

const testimonials = [
  {
    name: "Amit R",
    text:
      "ignorre SEO has completely transformed how we approach keyword research and competitor analysis. The AI-driven insights save us hours every week and help us make smarter SEO decisions.",
    role: "SEO Manager at GreenTech Digital",
    pin: "text-red-600",
    rotate: "-rotate-2",
  },
  {
    name: "Rahul K",
    text:
      "We saw a noticeable improvement in rankings and organic traffic after switching to ignorre SEO. The SERP analysis and content optimization features are incredibly powerful.",
    role: "Digital Strategist at Spark Agency",
    pin: "text-red-600",
    rotate: "rotate-3",
  },
  {
    name: "Emily W",
    text:
      "“ignorre SEO gives us clear visibility into what our competitors are ranking for and why. It’s become an essential tool for planning and scaling our SEO strategy.",
    role: "Marketing Lead at FashionForward",
    pin: "text-[#53C31B]",
    rotate: "-rotate-3",
  },
  {
    name: "Mark S",
    text:
      "The ignorre SEO team and platform exceeded our expectations. From site audits to keyword tracking, everything is fast, accurate, and easy to use.",
    role: "Founder & CEO at Innovatech Solutions",
    pin: "text-[#E04C24]",
    rotate: "rotate-3",
  },
  {
    name: "Sarah T",
    text:
      "ignorre SEO helped us streamline our SEO workflow across teams. We now track keywords, monitor performance, and optimize content from a single dashboard.",
    role: "Content Director at MediaMax",
    pin: "text-[#53C31B]",
    rotate: "-rotate-3",
  },
  {
    name: "James D",
    text:
      "The AI-powered insights from ignorre SEO give us a real competitive edge. We can prioritize high-impact keywords and improve visibility much faster than before.",
    role: "Head of Marketing at Elevate Brands",
    pin: "text-red-600",
    rotate: "rotate-3",
  },
];

 const [active, setActive] = useState("monthly");

 const pricing = {
  monthly: {
    starter: 39,
    pro: 129,
  },
  annually: {
    starter: 139,
    pro: 229,
  },
};

useEffect(() => {
  gsap.fromTo(
    ".price-card",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".price-card",
        start: "top 80%",
        once: true,
      },
    }
  );
}, []);

useEffect(() => {
  gsap.fromTo(
    ".flip-card",
    {
      rotateY: 90,
      opacity: 0,
    },
    {
      rotateY: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.15,
      transformOrigin: "center",
      scrollTrigger: {
      trigger: ".flip-card",
      start: "top 80%",
      once: true,
      },
    }
  );
}, []);


const faqs = [
  {
    question: "What is Ignorre SEO?",
    answer:"Ignorre SEO is an all-in-one AI-powered SEO and search intelligence platform designed to automate keyword research, SERP analysis, and performance tracking.",
  },
  {
    question: "Does ignorre SEO support content optimization for my niche and audience?",
    answer:"Yes. ignorre SEO analyzes search intent, competitor content, and ranking signals within your niche to help optimize content that matches your audience and industry requirements.",
  },
  {
    question: "Are there resources to help me learn and use ignorre SEO effectively?",
    answer:"Absolutely. We provide onboarding guides, tutorials, documentation, and best-practice resources to help you get the most out of ignorre SEO.",
  },
  {
    question: "Do you offer discounts on annual SEO plans?",
    answer:"Yes. We offer discounted pricing on annual plans so you can save more while scaling your SEO efforts with ignorre SEO.",
  },
   {
    question: "Do I need to install any software or plugins to use ignorre SEO?",
    answer:"No installation is required. ignorre SEO is a fully cloud-based platform that works directly in your browser. Optional integrations and extensions may be available.",
  },
   {
    question: "How does ignorre SEO ensure content is SEO-optimized?",
    answer:"ignorre SEO uses AI-driven keyword research, search intent analysis, SERP data, and on-page optimization signals to guide content creation and improvements for better rankings.",
  },
];
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
  gsap.fromTo(
    ".faq-section",
    {
      scale: 0.85,
      opacity: 0,
      y: 30,
    },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1.9,
      ease: "power4.out",
      scrollTrigger: {
      trigger: ".faq-section",
      start: "top 85%",
      toggleActions: "play none none none",
      invalidateOnRefresh: true,
      },
    }
  );

  ScrollTrigger.refresh();
}, []);

  return (
    <>
      {/* <TextReveal /> */}
  <section
  id="home"
  className="w-full bg-white overflow-x-hidden flex justify-center"
>
  <div className="max-w-[1600px] w-full px-4 sm:px-6 lg:px-8">

    <div
      className="
        slide-up
        w-full
        max-w-[1200px]
        mx-auto
        bg-white
        rounded-2xl
        mt-8
        pt-10 sm:pt-14 lg:pt-16
        pb-10
        px-5
        relative
      "
    >
      {/* BADGES */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
        <div className="flex gap-2 bg-zinc-100 w-25 justify-center items-center rounded-3xl p-2">

          <img src={redstar} alt="" />
          <p className="reveal-text text-[#DC2626] font-medium abc">
            New
          </p>
        </div>

        <div className="w-auto sm:w-65 border border-white flex justify-center items-center p-2 rounded-3xl bg-red-600">
          <p className="reveal-text text-white text-sm sm:text-base abc">
            80% increased productivity
          </p>
        </div>
      </div>

      {/* HERO TEXT */}
      <div className="flex flex-col items-center text-center gap-3 px-4">
        <h1 className="reveal-text text-[36px] sm:text-[44px] lg:text-[50px] xl:text-[58px] font-bold text-zinc-950 leading-[1.3] abc">
          AI-Powered <span className="text-[#E7000B]">SEO Intelligence</span>

          <br className="hidden sm:block" />
          That Drives Rankings
        </h1>

        <p className="reveal-text text-[16px] sm:text-[18px] text-zinc-500 font-medium abc">
          AI-powered keyword research, competitor analysis, site audits,
          <br className="hidden sm:block" />
          search intelligence – built for modern SEO teams.
        </p>
      </div>

      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">

        <div className="h-14 w-full sm:w-[180px] rounded-2xl flex items-center justify-center border border-red-600 bg-[#E7000B] hover:brightness-110 transition">

          <button className="text-[14px] text-white font-medium abc">
            Start SEO Analysis
          </button>
        </div>

        <div className="bg-zinc-100 h-14 w-full sm:w-[200px] flex items-center justify-center rounded-xl hover:brightness-90 transition">
          <button className="text-[14px] font-medium text-zinc-600 abc">
            Try ignorre SEO Free
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center mt-10 px-4">
        <img
          src={redinput}

          alt=""
          className="
            rounded-2xl
            w-full
            max-w-[500px]
            lg:max-w-[500px]
            h-auto
            shadow-2xl
          "
        />
      </div>

      {/* FLOATING CARDS (DESKTOP ONLY) */}
      <div className="hidden lg:block">

        {/* LEFT TOP */}
        <div className="absolute top-[320px] left-[30px] xl:left-[60px] w-[220px] xl:w-[260px] bg-zinc-100 p-3 rounded-2xl abc">
          <div className="flex items-center gap-2 bg-white w-15 rounded-xl p-1">
            <FaGlobe className="text-[#E7000B]" size={20} />
            <p className="text-[#E7000B]">SEO</p>
          </div>

          <p className="reveal-text text-[14px] text-zinc-500">
            “Write a meta description for a new product page about smart home
            security systems”
          </p>
        </div>

        {/* LEFT BOTTOM */}
        <div className="absolute top-[500px] left-[20px] xl:left-[40px] w-[220px] xl:w-[260px] bg-zinc-100 p-3 rounded-2xl abc">
          <div className="flex items-center gap-2 bg-white w-40 rounded-xl p-1">
            <MdEmail className="text-[#E7000B]" size={20} />
            <p className="text-[#E7000B]">Email Marketing</p>
          </div>

          <p className="reveal-text text-[14px] text-zinc-500">
            “Craft a welcome email for new subscribers to a fashion brand.”
          </p>
        </div>

        {/* RIGHT TOP */}
        <div className="absolute top-[320px] right-[30px] xl:right-[60px] w-[220px] xl:w-[260px] bg-zinc-100 p-3 rounded-2xl abc">
          <div className="flex items-center gap-2 bg-white w-35 rounded-xl p-1">

            <RiInstagramFill className="text-[#E7000B]" size={20} />
            <p className="text-[#E7000B]">Social Media</p>
          </div>

          <p className="reveal-text text-[14px] text-zinc-500">
            “Generate a series of Instagram captions for a travel influencer.”
          </p>
        </div>

        {/* RIGHT BOTTOM */}
        <div className="absolute top-[500px] right-[20px] xl:right-[40px] w-[220px] xl:w-[260px] bg-zinc-100 p-3 rounded-2xl abc">
          <div className="flex items-center gap-2 bg-white w-25 rounded-xl p-1">

            <IoMdPricetag className="text-[#E7000B]" size={20} />
            <p className="text-[#E7000B]">Brand</p>
          </div>

          <p className="reveal-text text-[14px] text-zinc-500">
            “Write a brand narrative for a sustainable energy company.”
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


<section id="features" className='bg-black 2xl:mt-40 2xl:pb-20  abc'>
     <div className="slide-up flex flex-col justify-center items-center  2xl:pt-20 px-4">
    <button className="text-[#E7000B]">
      SEO Features
    </button>

    <h1 className="reveal-text text-[32px] sm:text-[40px] 2xl:text-[48px] font-bold text-center mt-5 text-white">
      Create SEO Content that <br />
      <span className="text-[#E7000B]">Drives Rankings</span>
    </h1>

    <p className="reveal-text text-[15px] sm:text-[17px] 2xl:text-[18px] text-zinc-500 font-medium mt-5 text-center">
      AI-powered insights to create content optimized for rankings, traffic, and conversions.
    </p>

        <div className='flex flex-col lg:flex-row justify-center gap-8 2xl:gap-5 mt-12 2xl:mt-15 items-center px-4'>
          <div>
              <div className='slide-up h-auto lg:h-75 2xl:h-75 w-90 ml-5 sm:w-[90%] md:w-[80%] lg:w-[500px] 2xl:w-140 bg-white border border-zinc-200 rounded-2xl shadow-xl p-5 mx-auto'>

                <p className='reveal-text text-[14px] text-[#E7000B] mt-3'>Keyword-Optimized Content</p>
                <p className='reveal-text text-[20px] text-zinc-950 mt-5 font-semibold'>How to Rank for High-Intent Keywords</p>
                <p className='reveal-text text-[14px] text-zinc-400 mt-5'>Analyze search intent, keyword difficulty, and SERP competitors before creating <br/>content.</p>
                 <div className='p-4 mt-4 rounded-2xl flex items-center justify-center bg-[#E7000B]'>
            <button className='text-[18px] text-white font-semibold'>Continue</button>
        </div>
            </div>
            <p className='slide-up reveal-text text-[20px] 2xl:text-[24px] font-semibold mt-5 mb-3 text-center lg:text-left lg:ml-5 text-[#E7000B]'>Research & Insights</p>
            <p className='slide-up reveal-text text-[15px] 2xl:text-[16px] text-zinc-500 text-center lg:text-left lg:ml-5'>AI-driven keyword research, SERP insights, and competitor analysis for<br className="hidden xl:block" /> smarter SEO decisions.</p>
          </div>

            <div>
                 <div className='slide-up lg:h-75 2xl:h-75 w-90 ml-5 sm:w-[90%] lg:w-[500px] 2xl:w-140 bg-white border border-zinc-200 rounded-2xl shadow-xl p-5 lg:ml-5 xl:ml-0 md:w-120'>
                <p className='reveal-text text-[20px] text-zinc-950 font-semibold'>AI-Driven SEO Content Optimization</p>
                <p className='reveal-text text-[14px] mt-8'>Up to <span className='text-red-600'>32%</span> improvement in organic visibility</p>
                <div className="relative overflow-hidden w-full sm:w-[90%]  mt-7">
                    <div className="flex w-max marquee-track">
                     {/* Track 1 */}
                    <div className="flex gap-15 px-5">
                    <img src={f1} className="h-8" />
                    <img src={f2} className="h-8" />
                    <img src={f3} className="h-8" />
                    <img src={f4} className="h-8" />
                    <img src={f5} className="h-8" />
                    <img src={f6} className="h-8" />
                    <img src={f7} className="h-8" />
                    </div>

                    {/* Track 2 (clone) */}
                    <div className="flex gap-15 px-5">
                    <img src={f1} className="h-8" />
                    <img src={f2} className="h-8" />
                    <img src={f3} className="h-8" />
                    <img src={f4} className="h-8" />
                    <img src={f5} className="h-8" />
                    <img src={f6} className="h-8" />
                    <img src={f7} className="h-8" />
                    </div>
                    </div>
                    </div>

                    <div className="overflow-hidden w-full sm:w-[90%] mt-7 ">
                    <div className="flex w-max marquee">
                    {/* Track 1 */}
                    <div className="flex gap-15 px-5">
                    <img src={f9} className="h-8" />
                    <img src={f10} className="h-8" />
                    <img src={f11} className="h-8" />
                    <img src={f12} className="h-8" />
                    <img src={f13} className="h-8" />
                    <img src={f14} className="h-8" />
                    <img src={f15} className="h-8" />
                    </div>

                    {/* Track 2 (clone) */}
                    <div className="flex gap-15 px-5">
                    <img src={f9} className="h-8" />
                    <img src={f10} className="h-8" />
                    <img src={f11} className="h-8" />
                    <img src={f12} className="h-8" />
                    <img src={f13} className="h-8" />
                    <img src={f14} className="h-8" />
                    <img src={f15} className="h-8" />
                    </div>
                    </div>
                    </div>
            </div>


            <p className='slide-up reveal-text text-[20px] 2xl:text-[24px] font-medium mt-5 mb-3 text-center lg:text-left text-[#E7000B]'>Optimize & Refine</p>

            <p className='slide-up reveal-text text-[15px] 2xl:text-[16px] text-zinc-500 text-center lg:text-left'>Refine pages with AI-powered optimization signals to rank higher and<br/> convert better.</p>

            </div>
           
        </div>
    </div>

    <div className='flex flex-col lg:flex-row justify-center gap-8 2xl:gap-5 mt-12 2xl:mt-15 items-center px-4'>
          <div className="2xl:ml-12 lg:ml-20">
              <div className='slide-up lg:h-75 2xl:h-65 w-full sm:w-[90%] lg:w-[500px] 2xl:w-140 bg-white border border-zinc-200 rounded-2xl shadow-xl p-5 lg:ml-5 xl:ml-0'>

                <p className=' text-[20px] mt-3 mb-5 font-medium text-[#E7000B]'>Organic Search Growth</p>
                <img src={redtraffic} alt="" />

                <div className='flex justify-between mt-5'>
                    <p className='text-[16px] font-medium text-zinc-400'>Engagement Rate</p>
                    <p className='text-[16px] font-medium'>50%</p>
                </div>
                 <div className='flex justify-between mt-5'>
                    <p className='text-[16px] font-medium text-zinc-400'>Organic ROI Growth</p>
                    <p className='text-[16px] font-medium'>20%</p>
                </div>
            </div>

            <p className='slide-up reveal-text text-[20px] 2xl:text-[24px] font-medium mt-5 mb-3 text-center lg:text-left text-[#E7000B]'>Publish & Optimize</p>

            <p className='slide-up reveal-text text-[15px] 2xl:text-[16px] text-zinc-500 text-center lg:text-left'>Deploy SEO-optimized pages faster across your websites.</p>
          </div>

          <div>
              <div className='slide-up lg:h-75 2xl:h-65 w-full sm:w-[90%] lg:w-[500px] 2xl:w-140 bg-white border border-zinc-200 rounded-2xl shadow-xl p-5 lg:ml-5 xl:ml-0'>

                <p className='text-[20px] text-[#E7000B] mt-3 font-medium'>SEO Content Score</p>

                 <div className='flex justify-between mt-3 mb-3'>
                    <p className='text-[16px] font-medium text-zinc-400'>Average SEO Score</p>
                    <p className='text-[16px] font-medium'>85 / 100</p>
                </div>

                <img src={redscore} alt="" />

                <div className='flex justify-between mt-3'>
                    <p className='text-[16px] font-medium text-zinc-400'>Active SEO Users</p>
                    <p className='text-[16px] font-medium'>10,000+</p>
                </div>
                 <div className='flex justify-between mt-3'>
                    <p className='text-[16px] font-medium text-zinc-400'>AI Accuracy Rate</p>
                    <p className='text-[16px] font-medium'>95%</p>
                </div>
            </div>

            <p className='slide-up reveal-text text-[20px] 2xl:text-[24px] font-medium mt-5 mb-3 text-center lg:text-left text-[#E7000B]'>SEO Performance Tracking</p>

            <p className='slide-up reveal-text text-[15px] 2xl:text-[16px] text-zinc-500 text-center lg:text-left'>Track rankings, traffic, conversions, and ROI across keywords and competitors.</p>
          </div>
           
        </div>
</section>

<div className="bg-white abc">
  <div
    className="
      slide-up
      flex flex-col
      lg:flex-row
      justify-center
      items-center
      pt-24 lg:pt-30
      gap-10 lg:gap-35
      px-4
    "
  >
    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">

      <button className="text-[14px] font-medium text-[#E7000B]">

        AI SEO Platform
      </button>

      <p className="reveal-text text-[32px] sm:text-[40px] lg:text-[48px] font-bold mt-4 text-zinc-950">
        <span className="text-red-600">Create</span> High-Impact <br className="" />SEO 
        Content
      </p>

      <p className="reveal-text text-[15px] sm:text-[16px] text-zinc-500 font-medium mt-3">
        AI-powered insights to create content that ranks, attracts traffic, and converts.
      </p>


      <div className="h-14 w-full sm:w-60 lg:w-50 mt-5 rounded-2xl flex items-center justify-center bg-[#E7000B] hover:brightness-110 transition mx-auto lg:mx-0">

        <button className="text-[16px] text-white font-semibold">
          Start SEO Analysis
        </button>
      </div>
    </div>

    {/* RIGHT CARD */}
    <div
      className="
        h-auto lg:h-80
        w-full sm:w-[90%] md:w-[80%] lg:w-115
        p-5 bg-white
        border border-zinc-200
        rounded-2xl
        shadow-xl
      "
    >
      <div className="flex justify-center lg:justify-start">

        <img src={redstar2} alt="" className="h-8" />
        <img src={redstar2} alt="" className="h-8" />
        <img src={redstar2} alt="" className="h-8" />
        <img src={redstar2} alt="" className="h-8" />
        <img src={redstarh} alt="" className="h-8" />
      </div>

      <p className="reveal-text text-[22px] lg:text-[24px] font-semibold mt-4 text-center lg:text-left text-zinc-950">
        <span className="text-[#E7000B]">SEO</span> Performance Tracking
      </p>

      <p className="text-[15px] lg:text-[16px] text-[#E7000B] font-medium mt-3 text-center lg:text-left">

        Updated in real time
      </p>

      <p className="text-[22px] lg:text-[24px] font-semibold mt-3 text-center lg:text-left text-zinc-950">
        Statistics
      </p>

      <div className="flex justify-between items-start mt-4 text-center lg:text-left">
        <div>
          <p className="text-[18px] lg:text-[20px] font-medium">+45%</p>
          <p className="text-[15px] lg:text-[16px] text-zinc-400 font-medium">
            Organic Traffic
          </p>
        </div>

        <div>
          <p className="text-[18px] lg:text-[20px] font-medium">-30%</p>
          <p className="text-[15px] lg:text-[16px] text-zinc-400 font-medium">
            Keyword Difficulty
          </p>
        </div>

        <div>
          <p className="text-[18px] lg:text-[20px] font-medium">+38%</p>
          <p className="text-[15px] lg:text-[16px] text-zinc-400 font-medium">
            Conversion Rate
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="bg-white abc">
  <div
    className="
      slide-up
      flex flex-col
      lg:flex-row
      justify-center
      items-center
      pt-24 lg:pt-20
      gap-10 md:gap-16 lg:gap-65
      px-4
    "
  >
    {/* LEFT CARD */}
    <div
      className="
        h-auto lg:h-75
        w-full sm:w-[90%] md:w-[80%] lg:w-115
        p-5 bg-white
        border border-zinc-200
        rounded-2xl
        shadow-xl
      "
    >
      <p className="reveal-text text-[22px] lg:text-[24px] font-medium mt-0 text-center lg:text-left text-zinc-950">

        Results-Driven <span className="text-[#E7000B]">SEO</span> Performance
      </p>

      <p className="text-[15px] lg:text-[16px] text-[#E7000B] font-medium mt-3 text-center lg:text-left">

        Updated in real time
      </p>

      <p className="text-[22px] lg:text-[24px] font-medium mt-3 text-center lg:text-left text-zinc-950">
        Statistics
      </p>

      <div className="flex justify-between items-start mt-4 text-center lg:text-left">
        <div>
          <p className="text-[18px] lg:text-[20px] font-medium">10,000+</p>
          <p className="text-[15px] lg:text-[16px] text-zinc-400 font-medium">
            Keywords Tracked
          </p>
        </div>

        <div>
          <p className="text-[18px] lg:text-[20px] font-medium">5× Faster</p>
          <p className="text-[15px] lg:text-[16px] text-zinc-400 font-medium">
            SEO Insights
          </p>
        </div>

        <div>
          <p className="text-[18px] lg:text-[20px] font-medium">92%</p>
          <p className="text-[15px] lg:text-[16px] text-zinc-400 font-medium">
            Ranking Accuracy
          </p>
        </div>
      </div>


      <div className="flex justify-center lg:justify-start -mt-13">
        <img src={redbrandbg} alt="" />

      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="text-center lg:text-left">

      <button className="text-[14px] font-medium text-[#E7000B]">

        SEO Strategy
      </button>

      <p className="reveal-text text-[32px] sm:text-[40px] lg:text-[48px] font-bold mt-4 text-zinc-950">
        AI-Driven SEO for
      </p>

      <p className="reveal-text text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-red-600">
        Competitive Brands
      </p>

      <p className="reveal-text text-[15px] lg:text-[16px] text-zinc-500 font-medium mt-3">
        AI-powered insights to rank higher, attract traffic, and <br className="hidden lg:block" />
        grow organic visibility.
      </p>


      <div className="h-14 w-full sm:w-60 lg:w-50 mt-5 rounded-2xl flex items-center justify-center bg-[#E7000B] hover:brightness-110 transition mx-auto lg:mx-0">

        <button className="text-[16px] text-white font-semibold">
          Start SEO Analysis
        </button>
      </div>
    </div>
  </div>
</div>



<div className="flex flex-col justify-center items-center text-center pt-24 lg:pt-30 px-4 bg-white abc">
  <div className="slide-up">
    <button className="text-[14px] font-medium text-[#E7000B]">

      SEO Productivity
    </button>

    <p className="reveal-text text-[32px] sm:text-[40px] lg:text-[48px] font-bold mt-5 text-zinc-950">
      Achieve More <span className="text-red-600">SEO </span> Impact
    </p>

    <p className="reveal-text text-[15px] lg:text-[16px] text-zinc-500 mt-5">
      AI-powered automation for faster keyword research, optimization, and rankings.
    </p>
  </div>

  {/* CARDS */}
  <div
    className="
      mt-10 lg:mt-15 
      grid grid-cols-1
      sm:grid-cols-2
      xl:flex
      gap-6 lg:gap-10
      perspective-[1200px]
    "
  >
    {/* CARD 1 */}
    <div
      ref={(el) => (cardsRef.current[0] = el)}
      className="
        h-72 sm:h-80 lg:h-90
        w-full sm:w-65
        bg-red-600
        p-5
        flex flex-col justify-between items-start text-start text-white
        rounded-2xl
        [transform-style:preserve-3d]
      "
    >
      <p className="stat-number text-[36px] lg:text-[48px] font-bold">0</p>
      <p className="reveal-text text-[18px] lg:text-[20px] font-medium">
        Increase in organic <br className="hidden lg:block" /> traffic
      </p>
    </div>

    {/* CARD 2 */}
    <div
      ref={(el) => (cardsRef.current[1] = el)}
      className="
        h-72 sm:h-80 lg:h-90
        w-full sm:w-65
        bg-white border border-1 border-zinc-400
        p-5
        flex flex-col justify-between items-start text-start
        rounded-2xl
        [transform-style:preserve-3d]
      "
    >
      <p className="stat-number text-[36px] lg:text-[48px] font-bold text-red-600">
        0
      </p>
      <p className="reveal-text text-[18px] lg:text-[20px] font-medium mb-5 lg:mb-7">
        Saved on SEO research
      </p>
    </div>

    {/* CARD 3 */}
    <div
      ref={(el) => (cardsRef.current[2] = el)}
      className="
        h-72 sm:h-80 lg:h-90
        w-full sm:w-65
        bg-red-600
        p-5
        flex flex-col justify-between items-start text-start text-white
        rounded-2xl
        [transform-style:preserve-3d]
      "
    >
      <p className="stat-number text-[36px] lg:text-[48px] font-bold">0</p>
      <p className="reveal-text text-[18px] lg:text-[20px] font-medium">
        Businesses using <br className="hidden lg:block" /> ignorre SEO
      </p>
    </div>

    {/* CARD 4 */}
    <div
      ref={(el) => (cardsRef.current[3] = el)}
      className="
        h-72 sm:h-80 lg:h-90
        w-full sm:w-65
        bg-white border border-1 border-zinc-400
        p-5
        flex flex-col justify-between items-start text-start
        rounded-2xl
        [transform-style:preserve-3d]
      "
    >
      <p className="stat-number text-[36px] lg:text-[48px] font-bold text-red-600">
        0
      </p>
      <p className="reveal-text text-[18px] lg:text-[20px] font-medium mb-5 lg:mb-7">
        SEO data accuracy
      </p>
    </div>
  </div>
</div>



<div className="bg-black abc mt-30 pb-20">

  <div
    className="
      slide-up
      flex flex-col
      justify-center
      items-center
      text-center
      pt-24 lg:pt-20
      relative
      px-4
    "
  >

    <button className="text-[14px] font-medium text-[#E7000B]">
      Why Us
    </button>

    <p className="reveal-text text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-white mt-4">
      You can significantly reduce the time spent
      <br className="hidden sm:block" />
      on manual SEO tasks and{" "}
      <span className="text-red-600">elevate your search</span>
      <br className="hidden sm:block" />
      performance with{" "}

      <span className="text-white">AI-driven insights</span>.

    </p>

    <p className="reveal-text mt-6 lg:mt-10 text-zinc-500 text-[15px] lg:text-[16px] font-medium">
      Automate keyword research, SERP analysis, competitor tracking, and performance
      monitoring
      <br className="hidden lg:block" />
      so your team can focus on SEO strategy and growth.
    </p>
  </div>
</div>


<section id="testimonials" className='bg-white abc'>

  <div className='flex flex-col justify-center items-center text-center pt-30'>
     <button className='text-[14px] font-medium text-[#E7000B]'>Testimonial</button>
    <p className='reveal-text text-[48px] text-zinc-950 font-bold'>What SEO Team Say About <br/><span className='text-red-600'>Ignorre SEO</span></p>
    <p className='reveal-text text-[16px] text-zinc-500 font-medium mt-5'>Learn how ignorre SEO helps teams improve rankings, traffic, and search performance.</p>
  </div>
   <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
      {testimonials.map((item, i) => (
        <div
          key={i}
          className={`zoom-card relative bg-white border border-zinc-200 rounded-2xl p-7 shadow-2xl ${item.rotate}`}
        >
          {/* PIN */}
          <BsPinAngleFill
            className={`absolute -top-4 right-5 -translate-x-1/4 text-4xl ${item.pin}`}
          />

          {/* CONTENT */}

          <p className="font-bold text-[#E7000B] text-[16px]">{item.name}</p>


          <p className="mt-2 text-[16px] font-medium text-zinc-600">
            {item.text}
          </p>


          <p className="mt-3 text-[16px] font-bold text-[#E7000B]">

            {item.role}
          </p>
        </div>
      ))}
    </div>
</section>


<section id="pricing" className='bg-black abc mt-30 pb-20'>

  {/* HEADER */}
  <div
    className="
      slide-up
      flex flex-col
      lg:flex-row
      items-center
      justify-center
      pt-24 lg:pt-30
      gap-10 lg:gap-100
      px-4
      text-center lg:text-left
    "
  >
    <div>

      <button className="text-[14px] font-medium text-[#E7000B]">
        Pricing
      </button>
      <p className="reveal-text text-[32px] sm:text-[40px] lg:text-[48px] text-white font-bold mt-3">

        Flexible <span className="text-red-600">SEO Plans</span>
      </p>
    </div>

    <div className="flex flex-col items-center lg:items-start">
      <div className="flex">
        <img src={p5} alt="" className="h-12 lg:h-15" />
        <img src={p4} alt="" className="h-12 lg:h-15 -ml-6" />
        <img src={p3} alt="" className="h-12 lg:h-15 -ml-6" />
        <img src={p2} alt="" className="h-12 lg:h-15 -ml-6" />
        <img src={p1} alt="" className="h-12 lg:h-15 -ml-6" />
        <p className="text-red-600 text-[20px] lg:text-[24px] ml-4 mt-3 font-medium">
          10,000+
        </p>
      </div>
      <p className="text-[16px] lg:text-[20px] text-zinc-600 font-medium mt-4 text-center lg:text-left">
        SEO professionals onboarded every month
      </p>
    </div>
  </div>

  {/* TOGGLE */}
 <div className="w-full flex justify-center px-4 mt-15">
  <div
    className="
      inline-flex
      items-center
      relative
      bg-zinc-100
      border
      border-zinc-200
      rounded-full
      p-2
      text-[16px]
      font-medium
      mx-auto
    "
  >
    {/* Sliding Background */}
    <div
      className={`absolute top-1 bottom-1 w-1/2 bg-red-600 rounded-full transition-all duration-300 ${
        active === "monthly" ? "left-1" : "left-1/2"
      }`}
    />

    {/* Monthly Button */}
    <button
      onClick={() => setActive("monthly")}
      className={`relative z-10 px-4 sm:px-6 py-1 rounded-full transition-colors ${
        active === "monthly"
          ? "text-white"
          : "text-zinc-400"
      }`}
    >
      Monthly
    </button>

    {/* Annually Button */}
    <button
      onClick={() => setActive("annually")}
      className={`relative z-10 px-4 sm:px-6 py-1 rounded-full transition-colors ${
        active === "annually"
          ? "text-white"
          : "text-zinc-400"
      }`}
    >
      Annually
    </button>
  </div>
</div>

  {/* PRICING CARDS */}
  <div
    className="
      slide-up
      grid grid-cols-1
      md:grid-cols-2
     lg:grid-cols-2 xl:flex
      justify-center
      items-center
      gap-8 md:gap-5
      mt-12 lg:mt-20
      px-4 
    "
  >
     <div className="price-card border border-zinc-200 w-full sm:w-[90%] md:w-[380px] lg:w-95 h-auto lg:h-155 flex flex-col gap-5 shadow-2xl rounded-xl p-5 bg-white">
        <p className='text-[24px] font-semibold text-zinc-950'>Starter</p>
        <p className='text-[14px] font-medium text-zinc-500'>Ideal for freelancers, startups, and small websites.</p>
        <div className='flex gap-4'>
          <p className='text-[48px] font-bold text-zinc-950'>
           ${pricing[active].starter}
          </p>
          <p className='text-[14px] font-medium text-zinc-500 mt-7'>(billed monthly)</p>
        </div>
        <p className='text-[16px] text-zinc-500 font-medium'>Plan includes:</p>
       <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>AI-powered keyword research</p></div>
         <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>Basic SERP analysis</p></div>
        <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>Limited competitor tracking</p></div>
       <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>Site audit (basic)</p></div>
         <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>Track up to 250 keywords</p></div>
         <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>1 SEO project</p></div>
        <div className='flex items-center justify-center'>

          <button className='text-[16px] text-white rounded-2xl w-80 h-13 bg-[#E7000B] hover:brightness-110 transition'>Choose This</button>
        </div>
      </div>

       <div className="price-card w-full sm:w-[90%] md:w-[380px] lg:w-95 h-auto lg:h-155 flex flex-col gap-5 shadow-2xl rounded-xl p-5 bg-[#E7000B]">
        <p className='text-[24px] text-white font-bold'>Pro</p>
        <p className='text-[14px] text-white font-medium'>Best for growing businesses and SEO teams.</p>
        <div className='flex gap-4'>
          <p className='text-[48px] text-white font-bold'>
           ${pricing[active].pro}
            </p>
          <p className='text-[14px] text-white font-medium mt-6'>(billed monthly)</p>
        </div>
        <p className='text-[16px] text-white'>Plan includes:</p>
         <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-white font-medium'>Advanced AI SEO insights</p></div>
        <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-white font-medium'>Full competitor analysis</p></div>
         <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-white font-medium'>Content optimization with search intent</p></div>
        <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-white font-medium'>Track up to 2,000 keywords</p></div>
         <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-white font-medium'>5 SEO projects</p></div>
        <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-white font-medium'>Team collaboration & user management</p></div>
        <div className='flex items-center justify-center'>
          <button className='text-[16px] text-[#E7000B] rounded-2xl w-80 h-13 border-blue-700 bg-white hover:brightness-110 transition'>Choose This</button>
        </div>
      </div>

        <div className="price-card border border-zinc-200 w-full sm:w-[90%] md:w-[380px] lg:w-95 h-auto lg:h-155 flex flex-col gap-5 shadow-2xl rounded-xl p-5 bg-white">
        <p className='text-[24px] text-zinc-950 font-semibold'>Business</p>
        <p className='text-[14px] text-zinc-500 font-medium'>Built for agencies and large organizations.</p>
        <div className='flex gap-5'>
          <p className='text-[48px] text-zinc-950 font-bold'>Custom</p>
          <p className='text-[14px] text-zinc-500 mt-8'>(billed monthly)</p>
        </div>
        <p className='text-[16px]'>Plan includes:</p>
        <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>Unlimited keyword tracking</p></div>
      <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>Advanced site audits</p></div>
        <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>Custom SEO workflows</p></div>
       <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>API & data export access</p></div>
        <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>Dedicated account manager</p></div>
         <div className='flex gap-2'><IoCheckboxSharp size={20} className='text-white bg-zinc-950'/> <p className='text-[16px] text-zinc-500 font-medium'>Enterprise-grade security & SLA</p></div>
        <div className='flex items-center justify-center'>

          <button className='text-[16px] text-white rounded-2xl w-80 h-13 bg-[#E7000B] hover:brightness-110 transition'>Choose This</button>

        </div>
      </div>
    </div>

 <div className="flex justify-center items-center mt-10 px-4">
    <div
      className="
        slide-up flex flex-col lg:flex-row border border-zinc-300 p-5 bg-white gap-8 lg:gap-18 rounded-2xl shadow-2xl w-full sm:w-[95%] lg:w-auto">
      {/* LEFT */}
      <div className="text-center lg:text-left">
        <p className="text-[22px] lg:text-[24px] font-medium text-zinc-950">Education</p>
        <p className="text-[15px] lg:text-[17px] text-zinc-500 font-medium mt-2">
          Ideal for students, educators, and academic
          <br className="hidden lg:block" />
          researchers learning SEO.
        </p>

        <button className="mt-4 text-[16px] text-white rounded-2xl w-full sm:w-50 h-13 bg-[#E7000B] hover:brightness-110 transition">

          Apply Now
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-6">
          <p className="text-[16px] font-medium text-zinc-950">Plan includes:</p>
          <div className="flex gap-2 ">
            <IoCheckboxSharp size={20} className="text-white bg-zinc-950" />
            <p className="text-[16px] text-zinc-500 font-medium">
              Access to AI-powered SEO research tools
            </p>
          </div>
          <div className="flex gap-2">
            <IoCheckboxSharp size={20} className="text-white bg-zinc-950" />
            <p className="text-[16px] text-zinc-500 font-medium">
              Keyword research & SERP analysis
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:mt-10">
          <div className="flex gap-2">
            <IoCheckboxSharp size={20} className="text-white bg-zinc-950" />
            <p className="text-[16px] text-zinc-500 font-medium">
              SEO use cases for research projects & case studies
            </p>
          </div>
          <div className="flex gap-2">
            <IoCheckboxSharp size={20} className="text-white bg-zinc-950" />
            <p className="text-[16px] text-zinc-500 font-medium">
              Up to 25 GB storage for SEO reports & exports
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<div className='bg-white abc'>
  {/* TEXT SECTION */}
  <div
    className="
      slide-up
      flex flex-col
      lg:flex-row
      justify-center
      items-center
      text-center lg:text-start
      gap-10 md:gap-16 lg:gap-100
      pt-24 lg:pt-50
      px-4
    "
  >
    <div>

      <button className="text-[14px] font-medium text-[#E7000B]">

        SEO
      </button>

      <p className="reveal-text text-[32px] sm:text-[40px] lg:text-[48px] font-bold mt-4 text-zinc-950">
        <span className="text-red-600">Backbone</span> of Every <br className="hidden lg:block" />
        SEO Strategy
      </p>
    </div>

    <div className="flex flex-col gap-6 items-center lg:items-start">
      <p className="reveal-text text-[15px] lg:text-[16px] text-zinc-500 font-medium text-center lg:text-start">
        Ignorre SEO analyzes real-time search trends,
        <br className="hidden lg:block" />
        keyword intent, SERP competition, and on-page
        <br className="hidden lg:block" />
        ranking signals — so every decision is backed by data.
      </p>


      <button className="text-[16px] text-white rounded-2xl w-full sm:w-50 h-13 bg-[#E7000B] hover:brightness-110 transition">

        Start SEO Analysis
      </button>
    </div>
  </div>

  {/* IMAGES SECTION */}
  <div
    className="
      flex flex-col
      sm:flex-row
    
      gap-6 md:gap-5
      items-center
      justify-center
      mt-12 lg:mt-20
      px-4 lg:flex
    "
  >
    <img
      src={seo1}
      alt=""
      className="h-48 sm:h-56 lg:h-50 w-full sm:w-96 md:w-70 md:h-50 lg:w-90 xl:w-120 xl:h-60 rounded-full object-cover lg:ml-15"
    />
    <img
      src={seo2}
      alt=""
      className="h-48 sm:h-56 lg:h-60 md:h-50 rounded-full object-cover"
    />
    <img
      src={seo3}
      alt=""
      className="h-48 sm:h-56 lg:h-50 w-full sm:w-96 md:w-70 md:h-50  lg:w-90 xl:w-120 xl:h-60 rounded-full object-cover"
    />
  </div>
</div>


<div className='bg-black lg:mt-30 abc lg:pb-20'>
  {/* HEADER */}
  <div className="slide-up flex flex-col justify-center items-center text-center pt-24 lg:pt-20  px-4">
    <button className="text-[14px] font-medium text-[#E7000B]">
      Why ignorre SEO
    </button>

    <p className="reveal-text text-[32px] sm:text-[40px] lg:text-[48px] font-bold mt-4 text-white">
      Why ignorre SEO
      <br className="hidden sm:block" />
      <span className="text-red-600"> Stands Out</span>
    </p>


    <p className="reveal-text text-[15px] lg:text-[16px] font-medium mt-3 text-center max-w-3xl text-zinc-500">

      An AI-powered SEO platform built for keyword research, competitor intelligence,
      <br className="hidden lg:block" />
      and real-time search insights — all in one place.
    </p>
  </div>

  {/* COMPARISON SECTION */}
  <div
    className="
      slide-up
      comparison-section
      grid grid-cols-1
      md:grid-cols-1
      lg:flex
      justify-center
      items-center
      gap-8 md:gap-12 lg:gap-15
      mt-12 lg:mt-15
      px-4
    "
  >
    {/* IGNORRE SEO CARD */}
    <div className="h-auto w-full sm:w-[95%] md:w-[520px] lg:w-[500px] border border-zinc-200 rounded-2xl shadow-2xl p-5 lg:p-7 bg-white">

      <p className="text-[22px] lg:text-[24px] text-zinc-950 mb-7 font-bold">

        Ignorre SEO
      </p>
      <p className="text-[15px] lg:text-[16px] text-zinc-500 font-medium">
        All-in-One AI-Powered SEO & Search Intelligence
      </p>


      <div className="flex flex-wrap gap-4 mt-6 lg:mt-6">

        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-white bg-red-600">
          AI Keyword Research
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          SERP & Competitor Analysis
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-white bg-black">
          Real-Time Ranking Tracking
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-white bg-red-600">
          Search Intent Analysis
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-white bg-red-600">
          Content Optimization for SEO
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Unified SEO Dashboard
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Trend-Based Search Updates
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-white bg-black">
          Flexible Pricing
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-white bg-red-600">
          Team Collaboration
        </button>
      </div>
    </div>

    {/* TRADITIONAL SEO CARD */}
    <div className="h-auto w-full sm:w-[95%] md:w-[520px] lg:w-[500px] border border-zinc-200 rounded-2xl shadow-2xl p-5 lg:p-7 bg-white">

      <p className="text-[22px] lg:text-[24px] text-zinc-950 mb-4 font-bold">

        Traditional SEO Tools
      </p>
      <p className="text-[15px] lg:text-[16px] text-zinc-500 font-medium">
        Multiple Tools for SEO & Analytics
      </p>


      <div className="flex flex-wrap gap-5 mt-6 lg:mt-5">

        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Require multiple tools for SEO
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Slow or delayed data
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Limited AI insights
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Manual keyword research
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Fragmented SEO workflows
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Limited collaboration
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Extra fees for scaling
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          Complex & clunky interfaces
        </button>
        <button className="text-[14px] lg:text-[15px] font-medium rounded-3xl px-4 py-2 text-black bg-zinc-200">
          No unified search intelligence
        </button>
      </div>
    </div>
  </div>
</div>


<section id="faq" className='bg-white abc'>
  {/* HEADER */}
  <div className="flex flex-col justify-center items-center pt-24 lg:pt-50 text-center px-4">

    <button className="text-[14px] font-medium text-[#E7000B]">

      FAQs
    </button>

    <p className="reveal-text text-[32px] sm:text-[40px] lg:text-[48px] text-zinc-950 font-bold mt-4">
      Everything You Need to Know About
      <br className="hidden sm:block" />
      <span className="text-red-600"> Ignorre SEO</span>
    </p>

    <p className="reveal-text text-[15px] lg:text-[16px] text-zinc-500 font-medium mt-4 max-w-3xl">
      Answers to common questions about ignorre SEO, AI-powered search, and ranking
      optimization.
    </p>
  </div>

  {/* FAQ LIST */}
  <div className="faq-section max-w-6xl mx-auto mt-12 lg:mt-20 space-y-4 px-4 lg:px-0">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border border-zinc-200 rounded-xl overflow-hidden"
      >
        {/* QUESTION */}
        <button
          onClick={() => toggleFAQ(index)}
          className="
            w-full
            flex
            justify-between
            items-center
            px-4 sm:px-6 lg:px-8
            py-4
            text-left
            text-[18px] sm:text-[20px] lg:text-[18px]
            font-medium
            text-zinc-800
            bg-white
            hover:bg-zinc-50
            transition
          "
        >
          {faq.question}
          {activeIndex === index ? (
            <TfiMinus className="text-zinc-950 shrink-0" />
          ) : (
            <TfiPlus className="text-zinc-950 shrink-0" />
          )}
        </button>

        {/* ANSWER */}
        <div
          className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-out bg-white ${
            activeIndex === index
              ? "max-h-40 py-4 opacity-100"
              : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="p-2 sm:p-4 text-[15px] lg:text-[16px] text-zinc-500">
            {faq.answer}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



 <section className="w-full pt-24 lg:pt-50 lg:mt-30 lg:pb-20 bg-black flex items-center justify-center abc">

  <div
    className="
      slide-up
      relative
      w-full
      max-w-7xl
      grid
      grid-cols-1
      lg:grid-cols-1
      xl:grid-cols-2
      gap-10 lg:gap-10
      px-4
    "
  >
    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left lg:ml-20">

      <button className="text-[14px] font-medium text-[#E7000B]">
        Support
      </button>

      <h1 className="reveal-text text-[32px] sm:text-[40px] lg:text-[48px] leading-tight font-bold text-white mt-4">

        We’re Here to Help
        <br className='hidden '/> 
        <span className="text-red-600"> You Succeed with SEO</span>
      </h1>

      <p className="reveal-text mt-4 text-[15px] lg:text-[16px] text-zinc-500 font-medium">
        Get help with onboarding, SEO setup, pricing, and
        <br className="hidden lg:block" />
        technical questions from our expert support team.
      </p>

      {/* Office hours */}

      <div className="mt-8 lg:mt-10 text-zinc-500">
        <p className="font-semibold  mb-2">Office Hours</p>
        <p className=" text-[15px] lg:text-[16px] font-medium">

          Monday to Friday: 9:00 AM - 6:00 PM <br />
          Saturday: 10:00 AM - 2:00 PM <br />
          Sunday: Closed
        </p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="relative flex justify-center lg:justify-end">
      <div
        className="
          relative
          bg-white
          w-full
          sm:max-w-[520px]
          lg:w-[660px]
          h-auto
          lg:h-[490px]
          rounded-2xl
          shadow-2xl
          border border-zinc-200
          p-6 lg:p-8
          z-10
          lg:mr-20
        "
      >
        {/* Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-zinc-950 mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full h-11 px-4 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-zinc-950 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full h-11 px-4 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-zinc-950 mb-2">
            How can we help?
          </label>
          <textarea
            placeholder="Enter your message here..."
            className="w-full h-28 px-4 py-3 border border-zinc-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Submit */}
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition w-full sm:w-auto">
          Submit
        </button>
      </div>
    </div>
  </div>
</section>


     <section className="w-full flex justify-center py-20 lg:py-32 bg-white pt-16 lg:pt-30 px-4 abc">
  <div
    className="
      slide-up
      relative
      w-full
      max-w-[1100px]
      lg:w-[1100px]
      rounded-[24px]
      px-6 sm:px-10 lg:px-20
      py-10 sm:py-12 lg:py-16
      flex
      flex-col
      lg:flex-row
      items-start
      lg:items-center
      justify-between
      gap-10 lg:gap-0
      bg-gradient-to-br
      from-white
      via-white
      to-zinc-100
    "
  >
    {/* Directional Border Overlay */}
    <div
      className="pointer-events-none absolute inset-0 rounded-[24px]"
      style={{
        background: `

          linear-gradient(to right, #E7000B, rgba(47,107,255,0.25)) top / 100% 1.5px no-repeat,
          linear-gradient(to bottom, #E7000B, rgba(47,107,255,0.25)) left / 1.5px 100% no-repeat,
          linear-gradient(to right, rgba(214,226,255,0.8), rgba(214,226,255,0.3)) bottom / 100% 1.5px no-repeat,
          linear-gradient(to bottom, rgba(214,226,255,0.8), rgba(214,226,255,0.3)) right / 1.5px 100% no-repeat
        `,
      }}
    />

    {/* SVG BORDER (DESKTOP SCALE PRESERVED) */}
    <svg
      className="pointer-events-none absolute inset-0 hidden lg:block"
      width="100%"
      height="100%"
      viewBox="0 0 1100 420"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="topGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E7000B" />
          <stop offset="100%" stopColor="rgba(47,107,255,0.25)" />
        </linearGradient>

        <linearGradient id="leftGrad" x1="0" y1="0" x2="0" y2="1">

          <stop offset="0%" stopColor="#E7000B" />

          <stop offset="100%" stopColor="rgba(47,107,255,0.25)" />
        </linearGradient>
      </defs>

      <path d="M24 1 H1076" stroke="url(#topGrad)" strokeWidth="1.5" fill="none" />
      <path d="M1 24 V396" stroke="url(#leftGrad)" strokeWidth="1.5" fill="none" />

      <path d="M24 1 C8 1 1 8 1 24" stroke="#E7000B" strokeWidth="1.5" fill="none" />

    </svg>

    {/* LEFT CONTENT */}
    <div className="max-w-md text-center lg:text-left">
      <h1 className="reveal-text text-[32px] sm:text-[38px] lg:text-[44px] leading-tight font-bold text-zinc-950">
        Try <span className="text-red-600">Ignorre SEO</span>
        <br />
        Today
      </h1>

      <p className="reveal-text mt-4 text-[15px] lg:text-[16px] text-zinc-600 2xl:mb-5">
        Join thousands of SEO professionals improving
        <br className="hidden lg:block" />
        rankings, traffic, and search visibility.
      </p>

      <button
        className="
          mt-6 lg:mt-8 
          bg-red-600
          text-white
          px-8
          py-3
          rounded-xl
          text-[16px]
          font-medium
          hover:brightness-110
          transition
        "
      >
        Start SEO Analysis
      </button>
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex flex-col gap-5">
      {[
        "Start your 14-day free trial — no credit card required.",
        "Analyze keywords, SERPs, and competitors in minutes.",
        "Boost rankings and organic traffic with AI-powered insights",
      ].map((text, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-md bg-zinc-950">
            <FaCheckSquare size={14} className="text-white" />
          </div>
          <p className="text-[15px] lg:text-[16px] text-zinc-800">
            {text}
          </p>
        </div>
      ))}
    </div>

    {/* FLOATING ICON — DESKTOP ONLY */}
    <div className="absolute -top-20 right-16 floating hidden lg:block">
      <div className="relative">
        <img src={img} alt="" />
      </div>
    </div>
  </div>
</section>


<Footer />


 
    </>
  )
}

export default Home
