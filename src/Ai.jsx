import React, { useState, useEffect, useRef } from "react";
import useScrollReveal from "./useScrollReveal";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import h2 from './assets/h2.jpg';
import h3 from './assets/h3.jpg';
import h4 from './assets/h4.jpg';
import h5 from './assets/h5.jpg';
import aibussiness from './assets/aibussiness.png';
import aichat from './assets/aichat.png';
import sdh from './assets/sdh.png';
import aidetection from './assets/aidetection.png';
import cg from './assets/cg.png';
import exploremore from './assets/exploremore.png';
import { LuBrain } from "react-icons/lu";
import waves from './assets/waves.png';
import hand from './assets/hand.jpg';
import arrow from './assets/arrow.png';
import logo1 from './assets/logo1.svg';
import logo2 from './assets/logo2.svg';
import logo3 from './assets/logo3.svg';
import logo4 from './assets/logo4.svg';
import logo5 from './assets/logo5.svg';
import logo6 from './assets/logo6.svg';
import logo7 from './assets/logo7.svg';
import logo8 from './assets/logo8.svg';
import logo9 from './assets/logo9.svg';
import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img4 from './assets/img4.jpeg';
import sum1 from './assets/sum1.svg';
import sum2 from './assets/sum2.svg';
import sum3 from './assets/sum3.svg';
import sum4 from './assets/sum4.svg';
import sum5 from './assets/sum5.svg';
import ip1 from './assets/ip1.svg';
import ip2 from './assets/ip2.svg';
import ip3 from './assets/ip3.svg';
import ip4 from './assets/ip4.svg';
import ip5 from './assets/ip5.svg';
import ai1 from './assets/ai1.jpeg';
import ai2 from './assets/ai2.jpeg';
import ai3 from './assets/ai3.jpg';
import supportcenter from './assets/supportcenter.jpg';
import robot from './assets/robot.jpeg';
import man from './assets/man.jpeg';
import laptop from './assets/laptop.jpeg';
import home from './assets/home.jpg';
import about from './assets/about.jpg';
import feature from './assets/feature.jpeg';
import pricing from './assets/pricing.jpeg';
import blog from './assets/blog.jpeg';
import contact from './assets/contact.jpeg';
import conversation from './assets/conversation.png';
import { CiRoute } from "react-icons/ci";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import ignorre from './assets/ignorre.png'
import ceo from './assets/ceo.jpeg'
// import Togglebutton from "./Togglebutton.jsx";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./Footer.jsx"
import FloatingSupportContact from "./FloatingSupportContact .jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




function Home() {

  useScrollReveal();

  // const sectionRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start start", "end end"],
  // });
  // const card2Y = useTransform(scrollYProgress, [0.1, 0.3], [800, 0]);
  // const card3Y = useTransform(scrollYProgress, [0.3, 0.5], [800, 0]);
  // const card4Y = useTransform(scrollYProgress, [0.5, 0.7], [800, 0]);

  const cards = [
    {
      id: 1,
      img: ai1,
      name: "Natalie Chen",
      role: "Chief Strategy Officer, InsightLoop",
      text: "With AI-powered insights, our team makes data-driven decisions in a fraction of the time. It’s like having a strategist built into our workflow.",
      stat1: "4x",
      desc1: "Faster Decision-Making",
      stat2: "+65%",
      desc2: "Improvement in strategic accuracy",
    },
    {
      id: 2,
      img: ai2,
      name: "Alex Rivera",
      role: "Product Manager, ZyloTech",
      text: <> We cut manual work by 70% and boosted task output 3.5× with their <br /> AI automation—like gaining a tireless team member.The system takes over repetitive tasks and frees our team to focus on strategy and problem-solving.</>,
      stat1: "+70%",
      desc1: "Reduction in manual work",
      stat2: "3.5x",
      desc2: "Increase in automation efficiency",
    },
    {
      id: 3,
      img: ai3,
      name: "Jenna Li",
      role: "Operations Director, NeoLabs",
      text: "Integrating their AI planning system cut our turnaround time in half. We now deliver projects twice as fast, with smoother collaboration and better resource use.",
      stat1: "2x",
      desc1: "Faster project delivery",
      stat2: "+50%",
      desc2: "Improvement in client satisfaction",
    },
  ];
  const loopCards = [cards[cards.length - 1], ...cards, cards[0]];

  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);


  gsap.registerPlugin(ScrollTrigger);
 const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // ❌ No animation on mobile
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // Box1 visible
      gsap.set(cards[0], { y: 0, opacity: 1 });

      // Box2–4 start from bottom
      gsap.set(cards.slice(1), { y: 600, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(cards.length - 1) * 120}%`,
          scrub: true,
          pin: true,
        },
      });

      const d = 1;

      tl.to(cards[1], { y: 0, opacity: 1, duration: d, ease: "power3.out" });
      tl.to(
        cards[2],
        { y: 0, opacity: 1, duration: d, ease: "power3.out" },
        `-=${d * 0.75}`
      );
      tl.to(
        cards[3],
        { y: 0, opacity: 1, duration: d, ease: "power3.out" },
        `-=${d * 0.75}`
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

const cardsData = [
  { id: "01", desc: "Explore & Experiment", text: <>Test ideas using AI Chat, Ignorre <br/>Search, and the Playground.</>, img: img1 },
  { id: "02", desc: "Choose the Right Models", text: <>Compare models by speed<br/>quality, and cost.</>, img: img2 },
  { id: "03", desc: "Build & Integrate", text: <>Deploy with OpenAI-compatible<br/>APIs, agents, and workflows.</>, img: img3 },
  { id: "04", desc: "Optimize & Scale", text: <>Monitor performance, switch<br/>models, and scale easily.</>, img: img4 },
];


  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  // ✅ Handle infinite loop logic
  useEffect(() => {
    if (current === loopCards.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(1);
      }, 600);
      return () => clearTimeout(timer);
    } else if (current === 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(loopCards.length - 2);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setIsTransitioning(true);
    }
  }, [current, loopCards.length]);

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of customer queries does AI Chat Support handle?",
      answer:
        "Ignorre AI Chat Support handles general inquiries, FAQs, customer support questions, appointment scheduling, and product-related requests with natural, human-like responses—24/7.",
    },
    {
      question: "Can Smart Document Handling process handwritten notes or scanned PDFs?",
      answer:
        "Yes. Our AI extracts data from typed documents and scanned PDFs. For handwritten notes, accuracy depends on legibility but improves significantly using our OCR-enhanced processing.",
    },
    {
      question: "How can AI Business Insights improve my decision-making?",
      answer:
        "Ignorre AI analyzes internal and external data to uncover trends, predict outcomes, and deliver actionable insights—helping teams make faster, smarter, data-driven decisions.",
    },
    {
      question: "Is AI Detection & Tagging customizable for different industries?",
      answer:
        "Absolutely. Our AI models are trained on domain-specific datasets and can be customized for industries such as legal, finance, healthcare, e-commerce, and SaaS.",
    },
    {
      question: "What kind of content can the AI generate?",
      answer:
        "Ignorre AI can generate blogs, emails, reports, product descriptions, summaries, meeting notes, and marketing copy—fully tailored to your brand voice and audience.",
    },
    {
      question: "How secure is the data used for AI analysis?",
      answer:
        "All data is encrypted in transit and at rest. Ignorre AI follows enterprise-grade security standards and complies with GDPR and other global data protection regulations.",
    },
    {
      question: "Can I integrate Ignorre AI with tools like Notion, Slack, or Google Workspace?",
      answer:
        "Yes. Ignorre AI integrates seamlessly with popular tools like Notion, Slack, Google Workspace, and more through APIs and native connectors.",
    },
    {
      question: "How long does it take to implement and deploy Ignorre AI?",
      answer:
        "Most customers complete setup and onboarding within 1–2 weeks. Full enterprise deployments, including customization, are typically completed within a month.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [open, setOpen] = useState(false);

  const [hovered, setHovered] = useState(null);

  const items = [
    { name: "HOME", color: "#5e6ed8", image: home, text: "Discover how AI can elevate your bussiness - from insight to action" },
    { name: "ABOUT", color: "#5e6ed8", image: about, text: "We specialize in building custom AI solutions tailored to your business needs." },
    { name: "FEATURE", color: "#5e6ed8", image: feature, text: "Explore the tools and automations that power smarter decision-making." },
    { name: "PRICING", color: "#5e6ed8", image: pricing, text: "Flexible plans designed for startups to scale with confidence." },
    { name: "BLOG", color: "#5e6ed8", image: blog, text: "Stay updated with insights, trends, and real-world AI use cases." },
    { name: "CONTACT", color: "#5e6ed8", image: contact, text: "Ready to transform your workflow? Let’s talk about what AI can do for you." },
  ];

  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricing2 = {
    starter: billingCycle === "monthly" ? 299 : 249,
    pro: billingCycle === "monthly" ? 599 : 479,
  };


  const SLIDE_WIDTH = 100; // vw

  const slides = [
    {
      image: ai1,
      title: (
        <span className="text-lg text-zinc-600 ">
          Ignorre AI helped us eliminate repetitive tasks and streamline operations across teams. What used to take hours is now handled automatically, allowing us to focus on strategy, innovation, and faster execution.
        </span>
      ),
      name: "Natalie Chen",
      desc: "Chief Strategy Officer, InsightLoop",
      bgText: "Facts & Numbers",
      num1: "4x",
      desc1: "Faster Decision-Making",
      num2: "+65%",
      desc2: "Improvement in strategic accuracy",
    },
    {
      image: ai2,
      title: "With Ignorre’s AI-powered insights, our decision-making became significantly faster and more accurate. It feels like having an always-on analyst that turns complex data into clear actions.",
      name: "Alex Rivera",
      desc: "Product Manager, ZyloTech",
      bgText: "Facts & Numbers",
      num1: "+70%",
      desc1: "Reduction in manual work",
      num2: "3.5x",
      desc2: "Increase in automation efficiency",
    },
    {
      image: ai3,
      title: "Integrating Ignorre AI into our workflow reduced delivery time dramatically. Collaboration improved, bottlenecks disappeared, and projects now move forward with greater clarity and speed.",
      name: "Jenna Li",
      desc: "Operations Director, NeoLabs",
      bgText: "Facts & Numbers",
      num1: "2x",
      desc1: "Faster project delivery",
      num2: "+50%",
      desc2: "Improvement in client satisfaction",
    },
  ];

  // duplicate slides for seamless looping
  const loopSlides = [...slides, ...slides];


  const controls = useAnimation();

  useEffect(() => {
    let index = 0;

    const run = async () => {
      while (true) {
        // pause 4 seconds
        await controls.start({
          x: `-${index * SLIDE_WIDTH}vw`,
          transition: { duration: 0 },
        });

        await new Promise((r) => setTimeout(r, 4000));

        // slide animation
        index++;

        await controls.start({
          x: `-${index * SLIDE_WIDTH}vw`,
          transition: { duration: 0.8, ease: "easeInOut" },
        });

        // invisible reset when reaching cloned end
        if (index === slides.length) {
          index = 0;
          await controls.start({
            x: "0vw",
            transition: { duration: 0 },
          });
        }
      }
    };

    run();
  }, [controls]);


  

  // useEffect(() => {
  //   const media = window.matchMedia(query);
  //   const listener = () => setMatches(media.matches);
  //   media.addEventListener("change", listener);
  //   return () => media.removeEventListener("change", listener);
  // }, [query]);

  // return matches;

   const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width:1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

 const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 640) setDevice("mobile");
      else if (window.innerWidth >= 640 && window.innerWidth < 1024) setDevice("tablet");
      else setDevice("desktop");
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  
// const InsightsArticles = () => {
  // const [device, setDevice] = useState({
  //   isMobile: false,
  //   isTablet: false,
  //   isLaptop: false,
  //   isDesktop: false,
  // });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setDevice({
        isMobile: w < 640,
        isTablet: w >= 640 && w < 1024,
        isLaptop: w >= 1024 && w < 1440,
        isDesktop: w >= 1440,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isLaptop} = device;

  return (
    <>

<div className="relative min-h-0 lg:min-h-screen w-full overflow-x-hidden bg-white Gfont abc">
  <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

    {/* Ternary layout */}
    {isMobile ? (
      /* ================= MOBILE VIEW ================= */
      <div className="slide-up flex flex-col items-center justify-center pt-16 pb-12">

        {/* Rating + badges */}
        <div className="flex mt-4 space-x-2">
          <img src={h2} className="w-10 h-10 rounded-full object-cover" />
          <img src={h3} className="w-10 h-10 rounded-full object-cover" />
          <img src={h4} className="w-10 h-10 rounded-full object-cover" />
          <img src={h5} className="w-10 h-10 rounded-full object-cover" />
        </div>

        <div className="flex items-center text-sm font-medium text-zinc-600 drop-shadow-md">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>

        <p className="text-xs font-semibold">
          Trusted by 120+ Businesses
        </p>

        {/* Headings */}
        <h1 className="text-[32px] font-semibold text-zinc-950 leading-tight">
          The Unified AI Platform
          <br />
          for Chat, Search & Agents
        </h1>

        <p className="text-[14px] leading-relaxed mt-2">
          From real-time AI conversations to deep research search…
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          <a href="/pricing">
            <button className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold">
              Get Started Free
            </button>
          </a>

          <a href="/feature">
            <button className="group flex items-center gap-2 px-6 py-3 bg-white border-2 border-black rounded-full shadow-lg font-semibold text-black">
              Browse Features
              <MdOutlineArrowOutward size={20} />
            </button>
          </a>
        </div>
      </div>

    ) : isTablet ? (
      /* ================= TABLET VIEW ================= */
      <div className="slide-up flex flex-col md:flex-row items-center justify-center min-h-screen py-16">

        {/* Left content */}
        <div className="relative z-10 flex flex-col items-start justify-center w-full">

          <div className="flex flex-row space-x-2 mb-3">
            <img src={h2} className="w-12 h-12 rounded-full" />
            <img src={h3} className="w-12 h-12 rounded-full" />
            <img src={h4} className="w-12 h-12 rounded-full" />
            <img src={h5} className="w-12 h-12 rounded-full" />
          </div>

          <div className="flex items-center text-sm font-medium text-zinc-600 drop-shadow-md mb-2">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <p className="ml-2">Trusted by 120+ Businesses</p>
          </div>

          <h1 className="text-[45px] font-semibold text-zinc-950">
            The Unified AI Platform
          </h1>

          <h1 className="text-[45px] font-semibold text-zinc-950">
            for Chat, Search & Agents
          </h1>

          <p className="text-[16px] mt-2">
            From real-time AI conversations to deep research…
          </p>

          {/* Tablet CTA */}
          <div className="flex gap-3 mt-4">
            <a href="/pricing">
              <button className="px-6 py-3 bg-gradient-to-tr from-red-600 to-red-700 text-white rounded-full font-semibold">
                Get Started Free
              </button>
            </a>

            <a href="/feature">
              <button className="group flex items-center gap-2 px-6 py-3 border-2 border-black rounded-full bg-white shadow-lg font-semibold text-black">
                Browse Features
                <MdOutlineArrowOutward size={20} />
              </button>
            </a>
          </div>
        </div>
      </div>

    ) : (
      /* ================= DESKTOP / LARGE DESKTOP ================= */
      <div className="slide-up flex flex-col lg:flex-row items-center justify-between min-h-screen py-16 pt-50">

        {/* LEFT SECTION */}
        <div className="relative z-10 flex flex-col items-start justify-center w-full lg:w-[60%]">

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5">
            <div className="flex flex-row -mb-4">
              <img src={h2} alt="" className="w-12 h-12 rounded-full object-cover" />
              <img src={h3} alt="" className="w-12 h-12 rounded-full object-cover -ml-4" />
              <img src={h4} alt="" className="w-12 h-12 rounded-full object-cover -ml-4" />
              <img src={h5} alt="" className="w-12 h-12 rounded-full object-cover -ml-4" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center text-sm font-medium text-zinc-600 drop-shadow-md">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>

              <p>Trusted by 120+ Businesses</p>
            </div>
          </div>

          <div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] text-zinc-950 font-semibold">
              The Unified AI Platform
            </h1>

            <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[70px] text-zinc-950 font-semibold">
              for Chat, Search & Agents
            </h1>

            <p className="text-[15px] sm:text-[16px] md:text-[18px] max-w-2xl">
              From real-time AI conversations to deep research search,
              autonomous agents, and developer-ready APIs — ignorre.ai helps
              teams build faster, smarter, and at scale.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="group inline-flex items-center gap-0">
              <a href="/pricing">
                <button className="text-white px-6 py-3 rounded-full font-semibold tracking-widest shadow-lg bg-gradient-to-tr from-red-600 to-red-700">
                  Get Started Free
                </button>
              </a>

              <button className="text-white p-3.5 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-tr from-red-600 to-red-700">
                <MdOutlineArrowOutward size={20} />
              </button>
            </div>

            <a href="/feature">
              <button className="group flex items-center gap-2 text-black px-6 py-3 rounded-full font-semibold tracking-widest shadow-lg bg-white border-2 border-black">
                Browse Features
                <MdOutlineArrowOutward size={20} />
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT METRICS SECTION */}
        <div className="hidden lg:flex flex-col w-full lg:w-auto items-center lg:items-start mt-12 lg:mt-0 pt-30">
          <div className="h-30 w-60 bg-white rounded-lg p-3 shadow-lg flex flex-col justify-start items-start">
            <h1 className="text-[50px]">98%</h1>
            <p className="text-[18px]">Client Satisfaction Rate</p>
          </div>

          <div className="flex flex-row w-auto">
            <div className="h-30 w-60 bg-white rounded-lg p-3 m-2 shadow-lg flex flex-col justify-start items-start">
              <h1 className="text-[50px]">3x</h1>
              <p className="text-[18px]">Faster Insights</p>
            </div>

            <div
              className="h-30 w-60 rounded-lg p-3 m-2 shadow-lg flex flex-col justify-start items-start"
              style={{
                background:
                  "linear-gradient(142deg, rgba(92, 96, 191, 0.7) 30%, rgba(70, 113, 215, 0.7) 50%)"
              }}
            >
              <h1 className="text-[50px]">40%</h1>
              <p className="text-[18px]">Cost Savings</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

    
{/* <Togglebutton /> */}
{/* <FloatingSupportContact /> */}

      {/* Second Page */}

  <div className="w-full bg-black Gfont abc overflow-x-hidden">
  <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

    {isMobile ? (
      /* ========================== MOBILE VIEW ============================ */
      <div className="flex flex-col py-12">

        {/* LEFT BLOCK */}
        <div className="w-full">
          <div className="flex flex-row items-center gap-2 text-red-600 text-[16px] font-semibold">
            <IoSettingsOutline size={25} />
            <p>Features</p>
          </div>

          <div className="mt-6 text-[14px] text-zinc-500">
            <p>
              Experience how ignorre.ai brings together
              <br />
              conversational AI, real-time search,
              <br />
              and powerful AI tools into one unified platform.
            </p>
          </div>

          <div
            className="w-full max-w-[420px] mx-auto p-3 mt-10 bg-white backdrop-blur-md rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.3)]"
            // style={{
            //   background:
            //     "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
            // }}
          >
            <img src={aibussiness} alt="" />
            <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">
              Developer APIs
            </h1>
            <p className="text-[15px] text-zinc-950">
              Integrate AI quickly using OpenAI-compatible APIs.
            </p>
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="w-full mt-14">
          <div className="font-semibold text-[28px] text-white">
            <h1>
              Unlock Powerful AI Capabilities for Effortless Building
            </h1>
          </div>

            {/* Grid cards stacked */}
            <div className="grid grid-cols-1 gap-6 mt-10">
              {/* Chat */}
              <div className="bg-white rounded-lg p-3 mt-10 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.3)]"
                // style={{ background: "radial-gradient(circle, rgba(200,210,255,0.9) 0%, rgba(245,245,255,1) 60%)" }}
                >
                <img src={aichat} alt="" />
                <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">AI Chat</h1>
                <p className="text-[15px] text-zinc-950">Chat naturally with powerful AI models.</p>
              </div>

              {/* Comparison */}
              <div className="bg-white rounded-lg p-3 mt-10 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.3)]"
                // style={{ background: "radial-gradient(circle, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)" }}
                >
                <img src={sdh} alt="" />
                <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">Model Comparison</h1>
                <p className="text-[15px] text-zinc-950">Compare models by quality, speed & cost.</p>
              </div>

              {/* Playground */}
              <div className="bg-white/90 rounded-lg p-3 mt-10 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.3)]"
                // style={{ background: "radial-gradient(circle, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)" }}
                >
                <img src={aidetection} alt="" />
                <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">AI Playground</h1>
                <p className="text-[15px] text-zinc-950">Test prompts, tune models, experiment safely.</p>
              </div>

              {/* Ignorre search */}
              <div className="bg-white rounded-lg p-3 mt-10 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.3)]"
                // style={{ background: "radial-gradient(circle, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)" }}
                >
                <img src={ignorre} alt="" />
                <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">Ignorre Search</h1>
                <p className="text-[15px] text-zinc-950">Real-time, web-aware search answers.</p>
              </div>

              {/* Agents */}
              <div className="bg-white rounded-lg p-3 mt-10 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.3)]"
                // style={{ background: "radial-gradient(circle, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)" }}
                >
                <img src={cg} alt="" />
                <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">AI Agents</h1>
                <p className="text-[15px] text-zinc-950">Autonomous agents to execute tasks.</p>
              </div>

              {/* Explore More */}
              <div className="bg-white/10 rounded-lg mt-10 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.3)] relative">
                <img src={exploremore} alt="" />
                <div className="flex flex-col absolute bottom-7 right-2 gap-3 group cursor-pointer">
                  <a href="/feature">
                    <div className="flex items-center">
                      <p className="text-[18px] text-zinc-950 font-semibold">Explore More</p>
                      <MdOutlineArrowOutward size={20} className="ml-1 group-hover:rotate-45 transition-all text-zinc-950" />
                    </div>
                  </a>
                  <div className="w-[130px] h-[1.5px] bg-zinc-950"></div>
                </div>
              </div>

            </div>
          </div>
        </div>


          ) : isTablet ? (
      /* ========================== TABLET VIEW ============================ */
      <div className="flex flex-col md:flex-row items-start justify-between py-12">

        {/* LEFT */}
        <div className="w-full md:w-[35%] flex flex-col justify-center">

          <div className="flex flex-row items-center gap-2 text-red-600 text-[18px] font-semibold">
            <IoSettingsOutline size={22} />
            <p>Features</p>
          </div>

          <div className="mt-8 text-[16px] text-zinc-500">
            <p>
              Experience how ignorre.ai brings together
              <br />
              conversational AI, real-time search, and
              <br />
              powerful AI tools into one unified platform.
            </p>
          </div>

          <div
            className="w-full max-w-[360px] h-[320px] p-4 mt-12 bg-white backdrop-blur-md rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.3)]"
            // style={{
            //   background:
            //     "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
            // }}
          >
            <img src={aibussiness} alt="" />
            <h1 className="text-[22px] font-semibold mb-4 mt-4 text-zinc-950">
              Developer APIs
            </h1>
            <p className="text-[14px] text-zinc-950">
              Integrate AI quickly using OpenAI-compatible APIs.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-[62%] mt-10 md:mt-0">

          <div className="font-semibold text-[28px] text-white md:mb-41 lg:mb-25">
            <h1>
              Unlock Powerful AI Capabilities for
              <br />
              Effortless Building
            </h1>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            <div
              className="w-full h-80 bg-white backdrop-blur-md rounded-lg p-4 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(200,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
            >
              <img src={aichat} alt="" />
              <h1 className="text-[22px] font-semibold mb-3 mt-4 text-zinc-950">AI Chat</h1>
              <p className="text-[14px] text-zinc-950">
                Chat naturally with powerful AI models for work, learning, and problem-solving.
              </p>
            </div>
            <div className="w-full h-80 bg-white backdrop-blur-md rounded-lg p-4 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
              >
              <img src={sdh} alt="" />
              <h1 className="text-[22px] font-semibold mb-3 mt-4 text-zinc-950">Model Comparison</h1>
              <p className="text-[14px] text-zinc-950">
                Compare models by quality, speed, and cost to choose the best fit.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="w-full h-80 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
              >
              <img src={aidetection} alt="" />
              <h1 className="text-[22px] font-semibold mb-3 mt-4 text-zinc-950">AI Playground</h1>
              <p className="text-[14px] text-zinc-950">
                Test prompts, tune models, and experiment safely before deploying.
              </p>
            </div>
            <div className="w-full h-80 bg-white backdrop-blur-md rounded-lg p-4 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
              >
              <img src={ignorre} alt="" />
              <h1 className="text-[22px] font-semibold mb-3 mt-4 text-zinc-950">Ignorre Search</h1>
              <p className="text-[14px] text-zinc-950">
                Get real-time, web-aware answers with accurate sources in seconds.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="w-full h-80 bg-white backdrop-blur-md rounded-lg p-4 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
              >
              <img src={cg} alt="" />
              <h1 className="text-[22px] font-semibold mb-3 mt-4 text-zinc-950">AI Agents</h1>
              <p className="text-[14px] text-zinc-950">
                Build autonomous agents that plan, reason, and execute tasks for you.
              </p>
            </div>
            <div className="w-full h-80 bg-white/10 backdrop-blur-md rounded-lg p-4 shadow-[0_0_25px_rgba(0,0,0,0.3)] relative">
              <img src={exploremore} alt="" />
              <div className="flex flex-col absolute bottom-6 right-3 gap-2 group cursor-pointer">
                <a href="/feature" className="group inline-block">
                  <div className="flex items-center">
                    <p className="text-[16px] text-zinc-950 font-sans font-semibold">
                      Explore More
                    </p>
                    <MdOutlineArrowOutward size={18}
                      className="mt-1 ml-1 transform transition-transform duration-300 group-hover:rotate-45 cursor-pointer text-zinc-950"
                    />
                  </div>
                </a>
                <div className="w-[120px] h-[1.5px] bg-zinc-950"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


     ) : (
      /* ========================== DESKTOP / LAPTOP ============================ */
      <div className="flex flex-col xl:flex-row items-start justify-between min-h-screen py-16">

        {/* LEFT */}
        <div className="slide-up w-full xl:w-[30%] flex flex-col justify-center">

          <div className="flex flex-row items-center gap-2 text-red-600 text-[20px] font-semibold">
            <IoSettingsOutline size={25} />
            <p>Features</p>
          </div>

          <div className="mt-12 text-[18px] text-zinc-500">
            <p>
              Experience how ignorre.ai brings together
              <br />
              conversational AI, real-time search, and
              <br />
              powerful AI tools into one unified platform.
            </p>
          </div>

          <div
            className="w-full max-w-[420px] p-3 mt-16 bg-white backdrop-blur-md rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.3)]"
            // style={{
            //   background:
            //     "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
            // }}
          >
            <img src={aibussiness} alt="" />
            <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">
              Developer APIs
            </h1>
            <p className="text-[15px] text-zinc-950">
              Integrate AI quickly using OpenAI-compatible APIs.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="slide-up w-full xl:w-[65%] mt-14 xl:mt-0">

          <div className="font-semibold text-[26px] sm:text-[34px] xl:text-[44px] text-white">
            <h1>
              Unlock Powerful AI Capabilities for
              <br />
              Effortless Building
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-10 mt-13">
            <div
              className="w-full h-93 bg-white backdrop-blur-md rounded-lg p-5 mt-10 shadow-[0_0_25px_rgba(0,0,0,0.3)] pt-5"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(200,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
            >
              <img src={aichat} alt="" />
              <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">AI Chat</h1>
              <p className="text-[15px] text-zinc-950">
                Chat naturally with powerful AI models for work, learning, and problem-solving.
              </p>
            </div>
            <div className="w-full h-93 bg-white backdrop-blur-md rounded-lg p-5 mt-10  shadow-[0_0_25px_rgba(0,0,0,0.3)] pt-5"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
              >
              <img src={sdh} alt="" />
              <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">Model Comparison</h1>
              <p className="text-[15px] text-zinc-950">
                Compare models by quality, speed, and cost to choose the best fit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-10">
            <div className="w-full h-93 bg-white/90 backdrop-blur-md rounded-lg p-5 mt-10 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
              >
              <img src={aidetection} alt="" />
              <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">AI Playground</h1>
              <p className="text-[15px] text-zinc-950">
                Test prompts, tune models, and experiment safely before deploying.
              </p>
            </div>
            <div className="w-full h-93 bg-white backdrop-blur-md rounded-lg p-5 mt-10 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
              >
              <img src={ignorre} alt="" />
              <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">Ignorre Search</h1>
              <p className="text-[15px] text-zinc-950">
                Get real-time, web-aware answers with accurate sources in seconds.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-10">
            <div className="w-full h-93 bg-white backdrop-blur-md rounded-lg p-5 mt-10 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
              // style={{
              //   background: "radial-gradient(circle at center, rgba(195,210,255,0.9) 0%, rgba(245,245,255,1) 60%)",
              // }}
              >
              <img src={cg} alt="" />
              <h1 className="text-[26px] font-semibold mb-5 mt-5 text-zinc-950">AI Agents</h1>
              <p className="text-[15px] text-zinc-950">
                Build autonomous agents that plan, reason, and execute tasks for you.
              </p>
            </div>
            <div className="w-full h-93 bg-white/10 backdrop-blur-md rounded-lg  mt-10  shadow-[0_0_25px_rgba(0,0,0,0.3)] relative">
              <img src={exploremore} alt="" />
              <div className="flex flex-col absolute bottom-7 right-2 gap-3 group cursor-pointer">
                <a href="/feature" className="group inline-block">
                  <div className="flex items-center">
                    <p className="text-[18px] text-zinc-950 font-sans font-semibold">
                      Explore More
                    </p>

                    {/* Arrow rotates on hover */}
                    <MdOutlineArrowOutward
                      size={20}
                      className="mt-1 ml-1 transform transition-transform duration-300 group-hover:rotate-45 cursor-pointer text-zinc-950"
                    />
                  </div>
                </a>
                {/* Underline */}
                <div className="w-[130px] h-[1.5px] bg-zinc-950"></div>
              </div>

            </div>
          </div>
             </div>
      </div>
    )}
  </div>
</div>

     

      {/* third page */}

         {isMobile ? (
        /* ------------------- 📱 MOBILE VIEW ------------------- */
        <div className="min-h-screen w-full bg-white Gfont px-4 abc">
          <div className="text-center max-w-5xl mx-auto">
            <div className="text-red-600 pb-10 text-[18px] font-semibold">
              <p className="pt-30">
               Why Choose ignorre.ai
              </p>
            </div>

            <div>
              <h1 className="text-[28px] font-semibold mb-5 text-zinc-950">
                The Unified AI Platform Built for <span className="text-red-600">Modern Teams</span>
              </h1>
              <p className="text-[14px] text-zinc-950 px-2">
                ignorre.ai brings chat, real-time search, AI agents, model comparison, and OpenAI-compatible APIs into a<span className="hidden lg:inline"><br /></span> single, powerful platform—so teams can move faster and build smarter
              </p>
            </div>
          </div>

          {/* STACK EVERYTHING VERTICALLY */}
          <div className="w-full flex flex-col justify-center items-center gap-10">
            {/* <div className="h-70 w-full rounded-lg overflow-hidden mt-5">
              <img src={waves} alt="" className="h-full mx-auto" />
            </div> */}

             <div className="w-full lg:w-230 sm:mt-15 lg:ml-10 flex flex-col justify-between rounded-lg">

            <div className="w-full flex flex-col lg:flex-row gap-5 mb-5">

              <div className="h-full w-full lg:w-165 border border-zinc-200 rounded-2xl overflow-hidden bg-white mt-5">
                <img src={hand} alt="" className="h-50 w-50 ml-auto lg:ml-110 rounded-xl" />
                <h1 className="-mt-45 ml-6 text-[50px] font-bold leading-tight text-zinc-950">98%</h1>
                <h3 className="ml-6 text-[26px] font-semibold text-[#E8000F] leading-tight">User Satisfaction</h3>
                <p className="lg:mt-40 mt-10 ml-6 text-zinc-950 text-[18px]">98% of users report improved productivity and better results using ignorre.ai for chat, search, and AI workflows.</p>
              </div>

              <div
                className="relative h-full w-full lg:w-70 rounded-2xl overflow-hidden p-5 bg-gradient-to-br from-red-600 via-red-700 to-red-800"
              >
                {/* Blurred background image layer */}
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-10  h-50 w-50 lg:mt-40"
                  style={{
                    backgroundImage: `url(${arrow})`,
                  }}
                ></div>

                {/* Content layer */}
                <div className="relative z-10 ">
                  <h1 className="text-[50px] text-white">3x</h1>
                  <p className="text-[26px] text-white font-semibold">Faster Workflows </p>
                  <p className="text-[18px] text-white mt-12">Users achieve up to 3× faster research, decision-making, and execution by combining AI chat, search, and agents.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5">
              <div
                className="relative h-full w-full lg:w-70 rounded-2xl overflow-hidden p-5 border border-zinc-200 bg-white">
                {/* Content layer */}
                <div className="relative z-10 ">
                  <h1 className="text-[50px] text-zinc-950 font-bold">120+</h1>
                  <p className="text-[26px] text-[#E8000F] font-semibold">Teams Onboarded</p>
                  <p className="text-[18px] text-black mt-20">Over 120 teams and builders actively use ignorre.ai to deploy AI-powered solutions.</p>
                </div>
              </div>

              <div className="h-full w-full sm:w-165 border border-zinc-200 rounded-2xl overflow-hidden relative bg-zinc-900">
                <h1 className="ml-6 mt-5 text-[50px] font-bold leading-tight text-white">50+</h1>
                <h3 className="ml-6 text-[26px] font-semibold text-[#E8000F] leading-tight">Long-Term Teams</h3>

                {/* Continuous horizontal swiper (icon marquee) */}
                <div className="relative w-full overflow-hidden mt-10">
                  <div className="flex animate-marquee whitespace-nowrap">
                    {/* Repeat the icons for smooth looping */}
                    <img src={logo1} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-.5" />
                    <img src={logo2} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo3} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo4} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo5} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo6} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo7} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo8} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo9} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo1} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                  </div>
                </div>

                <p className="mt-15 ml-6 text-white text-[18px] mb-5">
                  More than 50 teams rely on ignorre.ai as their long-term AI platform for production use.
                </p>
              </div>
            </div>

            <div className="flex flex-col group cursor-pointer ml-0 lg:ml-185 mt-10 items-center md:items-start">
              <a href="/about">
                <div className="flex items-center">
                  <p className="text-[18px] text-[#E8000F] font-sans font-semibold mb-2">
                    Get to Know More
                  </p>
                  {/* Arrow rotates on hover */}
                  <MdOutlineArrowOutward
                    size={20}
                    className="-mt-1 ml-1 transform transition-transform duration-300 group-hover:rotate-45 cursor-pointer text-[#E8000F]"
                  />
                </div>

              </a>
              {/* Underline */}
              <div className="w-[165px] h-[1.5px] bg-zinc-950"></div>
            </div>

          </div>
          </div>
        </div>
      ) : isTablet ? (
        /* ------------------- 📲 TABLET VIEW ------------------- */
        <div className="min-h-screen w-full bg-white Gfont px-6 abc">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-red-600 pb-10 text-[18px] font-semibold">
              <p className="pt-30">
                Why Choose ignorre.ai
              </p>
            </div>

            <h1 className="text-[34px] font-semibold mb-5 text-zinc-950">
              The Unified AI Platform Built for <span className="text-red-600">Modern Teams</span>
            </h1>
            <p className="text-[16px] text-zinc-950">
              ignorre.ai brings chat, real-time search, AI agents, model comparison, and OpenAI-compatible APIs into a<span className="hidden lg:inline"><br /></span> single, powerful platform—so teams can move faster and build smarter
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-10">
            {/* <div className="h-96 w-full rounded-lg overflow-hidden mt-5">
              <img src={waves} alt="" className="h-full mx-auto" />
            </div> */}

            <div className="w-full lg:w-230 sm:mt-15 lg:ml-10 flex flex-col justify-between rounded-lg">

            <div className="w-full flex flex-col lg:flex-row gap-5 mb-5">

              <div className="h-full w-full lg:w-165 border border-zinc-200 rounded-2xl overflow-hidden bg-white mt-5">
                <img src={hand} alt="" className="h-50 w-50 ml-auto lg:ml-110 rounded-xl" />
                <h1 className="-mt-45 ml-6 text-[50px] font-bold leading-tight text-zinc-950">98%</h1>
                <h3 className="ml-6 text-[26px] font-semibold text-[#E8000F] leading-tight">User Satisfaction</h3>
                <p className="lg:mt-40 mt-10 ml-6 text-zinc-950 text-[18px]">98% of users report improved productivity and better results using ignorre.ai for chat, search, and AI workflows.</p>
              </div>

              <div
                className="relative h-full w-full lg:w-70 rounded-2xl overflow-hidden p-5 bg-gradient-to-br from-red-600 via-red-700 to-red-800"
              >
                {/* Blurred background image layer */}
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-10  h-50 w-50 lg:mt-40"
                  style={{
                    backgroundImage: `url(${arrow})`,
                  }}
                ></div>

                {/* Content layer */}
                <div className="relative z-10 ">
                  <h1 className="text-[50px] text-white">3x</h1>
                  <p className="text-[26px] text-white font-semibold">Faster Workflows </p>
                  <p className="text-[18px] text-white mt-12">Users achieve up to 3× faster research, decision-making, and execution by combining AI chat, search, and agents.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5">
              <div
                className="relative h-full w-full lg:w-70 rounded-2xl overflow-hidden p-5 border border-zinc-200 bg-white">
                {/* Content layer */}
                <div className="relative z-10 ">
                  <h1 className="text-[50px] text-zinc-950 font-bold">120+</h1>
                  <p className="text-[26px] text-[#E8000F] font-semibold">Teams Onboarded</p>
                  <p className="text-[18px] text-black mt-20">Over 120 teams and builders actively use ignorre.ai to deploy AI-powered solutions.</p>
                </div>
              </div>

              <div className="h-full w-full sm:w-165 border border-zinc-200 rounded-2xl overflow-hidden relative bg-zinc-900">
                <h1 className="ml-6 mt-5 text-[50px] font-bold leading-tight text-white">50+</h1>
                <h3 className="ml-6 text-[26px] font-semibold text-[#E8000F] leading-tight">Long-Term Teams</h3>

                {/* Continuous horizontal swiper (icon marquee) */}
                <div className="relative w-full overflow-hidden mt-10">
                  <div className="flex animate-marquee whitespace-nowrap">
                    {/* Repeat the icons for smooth looping */}
                    <img src={logo1} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-.5" />
                    <img src={logo2} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo3} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo4} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo5} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo6} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo7} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo8} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo9} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo1} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                  </div>
                </div>

                <p className="mt-15 ml-6 text-white text-[18px] mb-5">
                  More than 50 teams rely on ignorre.ai as their long-term AI platform for production use.
                </p>
              </div>
            </div>

            <div className="flex flex-col group cursor-pointer ml-0 lg:ml-185 mt-10 items-center md:items-start">
              <a href="/about">
                <div className="flex items-center">
                  <p className="text-[18px] text-[#E8000F] font-sans font-semibold mb-2">
                    Get to Know More
                  </p>
                  {/* Arrow rotates on hover */}
                  <MdOutlineArrowOutward
                    size={20}
                    className="-mt-1 ml-1 transform transition-transform duration-300 group-hover:rotate-45 cursor-pointer text-[#E8000F]"
                  />
                </div>

              </a>
              {/* Underline */}
              <div className="w-[165px] h-[1.5px] bg-zinc-950"></div>
            </div>

          </div>
          </div>
        </div>
      ) : (
        /* ------------------- 🖥 DESKTOP VIEW (ANIMATION ON) ------------------- */
        <div className="min-h-screen lg:h-320 w-full bg-white Gfont px-4 lg:px-0 abc">
          {/* ★ KEEP SLIDE UP ANIMATION ONLY ON DESKTOP */}
          <div className="slide-up text-center max-w-5xl mx-auto">
            <div className="text-red-600 pb-10 text-[18px] font-semibold">
              <p className="pt-30">
                Why Choose ignorre.ai
              </p>
            </div>
            <div>
              <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-semibold mb-5 text-zinc-950">
                The Unified AI Platform Built for <span className="text-red-600">Modern Teams</span>
              </h1>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-zinc-950 px-2">
                ignorre.ai brings chat, real-time search, AI agents, model comparison, and OpenAI-compatible APIs into a<span className="hidden lg:inline"><br /></span> single, powerful platform—so teams can move faster and build smarter
              </p>
            </div>
          </div>

          {/* ORIGINAL FULL DESKTOP CODE BELOW — NO STYLE CHANGES */}
          <div className="slide-up w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0">
            <div className="hidden sm:flex lg:flex h-70 sm:h-96 lg:h-175 w-full sm:w-80 ml-0 lg:ml-10 mt-5 rounded-lg overflow-hidden lg:-mt-4">
              <img src={waves} alt="" className="h-full" />
            </div>

            <div className="w-full lg:w-230 sm:mt-15 lg:ml-10 flex flex-col justify-between rounded-lg">
             <div className="w-full flex flex-col lg:flex-row gap-5 mb-5">

              <div className="h-full w-full lg:w-165 border border-zinc-200 rounded-2xl overflow-hidden bg-white mt-5">
                <img src={hand} alt="" className="h-50 w-50 ml-auto lg:ml-110 rounded-xl" />
                <h1 className="-mt-45 ml-6 text-[50px] font-bold leading-tight text-zinc-950">98%</h1>
                <h3 className="ml-6 text-[26px] font-semibold text-[#E8000F] leading-tight">User Satisfaction</h3>
                <p className="lg:mt-40 mt-10 ml-6 text-zinc-950 text-[18px]">98% of users report improved productivity and better results using ignorre.ai for chat, search, and AI workflows.</p>
              </div>

              <div
                className="relative h-full w-full lg:w-70 rounded-2xl overflow-hidden p-5 bg-gradient-to-br from-red-600 via-red-700 to-red-800"
              >
                {/* Blurred background image layer */}
                <div
                  className="absolute inset-0 bg-center bg-cover opacity-10  h-50 w-50 lg:mt-40"
                  style={{
                    backgroundImage: `url(${arrow})`,
                  }}
                ></div>

                {/* Content layer */}
                <div className="relative z-10 ">
                  <h1 className="text-[50px] text-white">3x</h1>
                  <p className="text-[26px] text-white font-semibold">Faster Workflows </p>
                  <p className="text-[18px] text-white mt-12">Users achieve up to 3× faster research, decision-making, and execution by combining AI chat, search, and agents.</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5">
              <div
                className="relative h-full w-full lg:w-70 rounded-2xl overflow-hidden p-5 border border-zinc-200 bg-white">
                {/* Content layer */}
                <div className="relative z-10 ">
                  <h1 className="text-[50px] text-zinc-950 font-bold">120+</h1>
                  <p className="text-[26px] text-[#E8000F] font-semibold">Teams Onboarded</p>
                  <p className="text-[18px] text-black mt-20">Over 120 teams and builders actively use ignorre.ai to deploy AI-powered solutions.</p>
                </div>
              </div>

              <div className="h-full w-full sm:w-165 border border-zinc-200 rounded-2xl overflow-hidden relative bg-zinc-900">
                <h1 className="ml-6 mt-5 text-[50px] font-bold leading-tight text-white">50+</h1>
                <h3 className="ml-6 text-[26px] font-semibold text-[#E8000F] leading-tight">Long-Term Teams</h3>

                {/* Continuous horizontal swiper (icon marquee) */}
                <div className="relative w-full overflow-hidden mt-10">
                  <div className="flex animate-marquee whitespace-nowrap">
                    {/* Repeat the icons for smooth looping */}
                    <img src={logo1} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-.5" />
                    <img src={logo2} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo3} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo4} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo5} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo6} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo7} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo8} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo9} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                    <img src={logo1} alt="icon" className="h-15 w-15 mx-4 filter grayscale invert opacity-70" />
                  </div>
                </div>

                <p className="mt-15 ml-6 text-white text-[18px] mb-5">
                  More than 50 teams rely on ignorre.ai as their long-term AI platform for production use.
                </p>
              </div>
            </div>

            <div className="flex flex-col group cursor-pointer ml-0 lg:ml-185 mt-10 items-center md:items-start">
              <a href="/about">
                <div className="flex items-center text-zinc-950">
                  <p className="text-[18px] text-[#E8000F] font-sans font-semibold mb-2">
                    Get to Know More
                  </p>
                  {/* Arrow rotates on hover */}
                  <MdOutlineArrowOutward
                    size={20}
                    className="-mt-1 ml-1 transform transition-transform duration-300 group-hover:rotate-45 cursor-pointer text-[#E8000F]"
                  />
                </div>

              </a>
              {/* Underline */}
              <div className="w-[165px] h-[1.5px] bg-zinc-950"></div>
            </div>
            </div>
          </div>
        </div>
      )}

     

      {/* fourth page */}

      <div className="bg-white Gfont abc pb-100 sm:pb-10">

      <div className="slide-up text-center">
        <div className="text-red-600 pb-5 text-[18px] font-semibold">
          <p className="pt-30">
            {/* <CiRoute size={25} className="block mx-auto lg:ml-215 -mb-7 mr-60" /> */}
            Our Process
          </p>
        </div>
        <h1 className="text-[26px] sm:text-[32px] lg:text-[44px] text-zinc-950 font-sans font-semibold mb-5 mt-5 abc">
          From Idea to AI in <span className="text-red-600">Production</span>
        </h1>
        <p className="text-zinc-950 text-[14px] sm:text-[16px] lg:text-[18px] font-sans px-3">
          ignorre.ai simplifies how teams adopt AI — from experimenting with models to deploying agents,
          <br /> search, and APIs in production with speed and confidence.
        </p>
      </div>

      

       <section
      ref={sectionRef}
      className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8"
    >
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-8 
          items-start
        "
      >
        {cardsData.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="flex flex-col items-start gap-0"
          >
            {/* text */}
            <div className="text-start text-black ml-3 mb-5">
              <div className="text-[50px] font-bold text-zinc-950">{card.id}</div>
              <div className="text-[18px] opacity-80 text-[#E8000F] font-bold">{card.desc}</div>
              <p className="text-[15px] opacity-60 mt-1">{card.text}</p>
            </div>

            {/* image box */}
            <div className="
              w-[90vw] max-w-[320px]
              sm:w-[260px]
              lg:w-[230px]
              xl:w-[290px]
              h-[260px] lg:h-[400px]
              bg-white rounded-2xl overflow-hidden">
              <img
                src={card.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>

      
    </div>

    



    <div className="bg-white min-h-screen w-full overflow-x-hidden Gfont abc md:mt-0 -mt-100 mb-20">
  <div
    className="
      max-w-7xl
      mx-auto
      w-full
      flex flex-col xl:flex-row
      items-center xl:items-start
      justify-between
      px-4 sm:px-6 lg:px-8
      pt-20 sm:pt-10 lg:pt-16
    "
  >

    {/* LEFT SECTION */}
    <div
      className="
        slide-up
        w-full xl:w-1/2
        flex flex-col
        justify-center
        gap-4
      "
    >
      <div className="flex items-center justify-center xl:justify-start gap-2 text-[18px] text-red-600 font-semibold">
        <FaHeadset size={18} />
        <p>Support Center</p>
      </div>

      <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] font-semibold text-zinc-950 text-center xl:text-left">
        Answers to Common <span className="text-red-600">Questions</span>
      </h1>

      <p className="text-[16px] sm:text-[18px] text-zinc-950 text-center xl:text-left">
        We’ve gathered the most frequently asked questions to help you
        <br className="hidden lg:block" />
        better understand our AI services, pricing, and integration
        <br className="hidden lg:block" />
        process.
      </p>

      {/* HELP CARD */}
      <div
        className="
          flex
          flex-col sm:flex-row
          w-full
          max-w-[540px]
          bg-zinc-900
          rounded-3xl
          mt-5
          p-3
          group
          cursor-pointer
          mx-auto xl:mx-0
        "
      >
        <div>
          <img
            src={supportcenter}
            alt=""
            className="h-40 sm:h-full w-full sm:w-70 rounded-xl object-cover"
          />
        </div>

        <div className="text-white p-5">
          <p className="font-semibold text-[15px]">
            Need more help?
          </p>

          <p className="text-[15px] mt-2">
            We’re here to answer any
            <br />
            questions you may have
            <br />
            and help you get the most
            <br />
            out of Ignorre AI.
          </p>

          <a href="/contact">
            <div className="flex items-center mt-5">
              <p className="text-[18px] text-[#E8000F] font-semibold">
                Ask a Question
              </p>

              <MdOutlineArrowOutward
                size={20}
                className="ml-1 transform transition-transform duration-300 group-hover:rotate-45 cursor-pointer text-[#E8000F]"
              />
            </div>
          </a>

          <div className="w-[160px] h-[1.5px] bg-white mt-1"></div>
        </div>
      </div>
    </div>

    {/* RIGHT SECTION */}
    <div
      className="
        slide-up
        w-full xl:w-1/2
        flex flex-col
        justify-center
        mt-10 xl:mt-0
      "
    >
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-zinc-200 rounded-2xl mb-4 overflow-hidden shadow-sm"
        >
          <button
            className="w-full text-left p-5 bg-white flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-[16px] sm:text-lg text-zinc-950">
              {faq.question}
            </span>

            <span className="text-zinc-950 text-2xl font-bold">
              {openIndex === index ? "-" : "+"}
            </span>
          </button>

          {/* Answer Section */}
          {openIndex === index && (
            <div className="p-5 bg-white text-zinc-500 text-base transition-all duration-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>

  </div>
</div>

{/* ninth page */}

    <div className="min-h-screen bg-black Gfont abc overflow-x-hidden">
  <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

    {/* HEADING SECTION */}
    <div
      className="
        slide-up
        w-full
        flex flex-col lg:flex-row
        items-center lg:items-start
        justify-between
        pt-10 lg:pt-20
        text-center lg:text-left
      "
    >
      {/* Left Small Heading */}
      <div className="flex items-center gap-3 text-[#E8000F] text-[16px] sm:text-[18px] font-semibold mt-5">
        <FaEye />
        <p>Insights and Articles</p>
      </div>

      {/* Right Main Heading */}
      <div className="mt-6 lg:mt-0 lg:max-w-[850px]">
        <h1 className="text-[30px] sm:text-[38px] lg:text-[44px] font-semibold text-white">
          Discover the Future of AI in <span className="text-[#E8000F]">Business</span>
        </h1>

        <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-zinc-500 mt-3">
          Stay informed with expert-written articles on AI transformation,
          <br className="hidden lg:block" />
          SaaS strategies, and startup innovation. Learn how to drive
          growth with the right technology.
        </p>
      </div>
    </div>

    {/* --- CONTENT WRAPPER (TERNARY VIEW) --- */}
    {isDesktop ? (
      /* --------------------- DESKTOP VIEW --------------------- */
      <div className="slide-up flex flex-col xl:flex-row justify-center items-center gap-6 mt-10">

        {/* LEFT LARGE CARD */}
        <div className="h-[400px] w-full xl:w-[700px] bg-white flex rounded-2xl shadow-lg cursor-pointer overflow-hidden relative group">
          <img
            src={robot}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-700"></div>

          <div className="relative z-10 flex flex-col justify-end p-6 text-white h-full">
            <p className="text-[12px]">August 13, 2025</p>

            <h2 className="text-[28px] font-bold">
              How AI is Revolutionizing
              <br />
              Customer Support in 2025
            </h2>

            <p className="text-[16px] mt-2 font-medium">
              See how AI chatbots and NLP enhance support with speed
              <br />
              and personalization
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full xl:w-[700px] flex flex-col sm:flex-row gap-5">

          {/* CARD 1 */}
          <div className="flex-1 p-5 h-[400px] group rounded-2xl border border-zinc-200 bg-white">
            <img
              src={man}
              alt=""
              className="transition-transform duration-700 ease-in-out group-hover:scale-110 rounded-2xl h-[200px] w-full object-cover"
            />

            <p className="text-[12px] mt-6">July 27, 2025</p>

            <h1 className="text-[15px] font-semibold text-zinc-950">
              Building a Lean AI-Ready Startup:
              <br />
              Tips for Founder
            </h1>

            <p className="text-[15px] text-zinc-950">
              Help startups adopt AI early with
              <br />
              budget-friendly, scalable solution.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="flex-1 p-5 group rounded-2xl border border-zinc-200 bg-white">
            <img
              src={laptop}
              alt=""
              className="transition-transform duration-700 ease-in-out group-hover:scale-110 rounded-2xl h-[200px] w-full object-cover"
            />

            <p className="text-[12px] mt-6">July 30, 2025</p>

            <h1 className="text-[15px] font-semibold text-zinc-950">
              5 Must-Have SaaS Integrations to
              Supercharge Your Workflow
            </h1>

            <p className="text-[15px] text-zinc-950">
              Streamline team operations by
              <br />
              integrating AI with essential SaaS tools.
            </p>
          </div>

        </div>
      </div>
    ) : (
      /* -------------------- MOBILE / TABLET / LAPTOP VIEW -------------------- */
      <div className="slide-up flex flex-col justify-center items-center gap-6 mt-10">

        {/* LARGE CARD */}
        <div className="h-[400px] w-full max-w-[900px] bg-white flex rounded-2xl shadow-lg cursor-pointer overflow-hidden relative group">
          <img
            src={robot}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10 flex flex-col justify-end p-6 text-white h-full">
            <p className="text-[12px]">August 13, 2025</p>

            <h2 className="text-[28px] font-bold">
              How AI is Revolutionizing
              <br />
              Customer Support in 2025
            </h2>

            <p className="text-[16px] mt-2 font-medium">
              AI chatbots & NLP enhance customer support
            </p>
          </div>
        </div>

        {/* SMALL CARDS */}
        <div className="flex flex-col lg:flex-row w-full max-w-[900px] gap-5">

          <div className="rounded-2xl border border-zinc-200 p-5 bg-white flex-1">
            <img src={man} alt="" className="rounded-2xl w-full h-50 object-cover" />

            <p className="text-[12px] mt-6">July 27, 2025</p>

            <h1 className="text-[15px] font-semibold text-zinc-950">
              Building a Lean AI-Ready Startup
            </h1>

            <p className="text-[15px] text-zinc-950">
              Help startups adopt AI early with scalable solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-5 bg-white flex-1">
            <img src={laptop} alt="" className="rounded-2xl w-full h-50 object-cover" />

            <p className="text-[12px] mt-6">July 30, 2025</p>

            <h1 className="text-[15px] font-semibold text-zinc-950">
              5 Must-Have SaaS Integrations
            </h1>

            <p className="text-[15px] text-zinc-950">
              Streamline operations by integrating AI with SaaS tools.
            </p>
          </div>

        </div>
      </div>
    )}

    {/* BUTTON */}
    <a href="#">
      <div className="flex items-center justify-right group mt-10 text-[#E8000F]">
        <p className="text-[18px] font-semibold">
          Discover More
        </p>

        <MdOutlineArrowOutward
          size={20}
          className="mt-1 ml-1 transform transition-transform duration-300 group-hover:rotate-45"
        />
      </div>
    </a>

    <div className="w-[130px] h-[1.5px] bg-zinc-950 mx-auto mt-3 mb-10"></div>

  </div>
</div>

      {/* last page */}
      <div className="min-h-screen lg:min-h-0 xl:-mt-15 lg:mt-0 Gfont lg:mb-0 bg-white abc">
        <div className="relative h-auto lg:h-[800px] w-full overflow-hidden">

          {/* Centered Content */}
          <div className="flex justify-center items-center relative z-10 h-full text-center">
            <div className="flex flex-col items-center justify-center 
        w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto max-w-4xl
        px-6 sm:px-10 py-10 sm:py-16
        bg-white 
        rounded-3xl 
        mx-auto my-20 lg:my-0">
              <div className="flex lg:-mt-0 gap-2 text-[#E8000F]"><LuMessageCircleMore size={25} /> <p className="text-[16px] lg:text-[18px]">Let’s Connect</p></div>
              <h1 className="mt-5 lg:mt-5 text-[30px] md:text-[36px] lg:text-[44px] font-semibold text-zinc-950">Start the Conversation <span className="text-[#E8000F]">Today</span></h1>
              <p className="mt-6 lg:mt-5 text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-zinc-500">“At CX24, we believe every business deserves the power of AI—whether you're just starting or<br /> scaling fast. My team and I are here to support your vision and help you move forward with<br /> confidence.”</p>
              <div className="mt-8 lg:mt-10">
                <img src={ceo} alt="" className="rounded-full object-cover h-12 w-12 lg:h-15 lg:w-15" />
              </div>
              <h5 className="text-[14px] lg:text-[15px] font-semibold mt-4 lg:mt-5 text-[#E8000F]">Anup Gosavi</h5>
              <p className="text-[14px] lg:text-[15px] text-zinc-500">Founder & CEO of CX24 Digital Technology Pvt Ltd.</p>
              <div className="flex flex-col lg:flex-row mt-5 lg:mt-10 gap-4 lg:gap-4">
                <div className="group inline-flex items-center gap-0 self-center lg:self-auto">
                  {/* Main CTA Button */}
                 <a href="/contact">
                  <button
                    className="text-white px-6 py-3 text-[16px] lg:text-[18px] rounded-full font-semibold font-sans tracking-widest shadow-lg transition-all duration-500 bg-[#E8000F]">
                    Get Started Now
                  </button>
                 </a>

                  {/* Arrow Button */}
                  <button
                    className="text-white p-3 lg:p-3.5 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 bg-gradient-to-tr from-red-600 to-red-700 group-hover:from-zinc-800 group-hover:to-zinc-800">
                    <MdOutlineArrowOutward
                      size={20}
                      className="transition-transform duration-500 group-hover:rotate-44"
                    />
                  </button>
                </div>
               <a href="/contact">
                <button className="group flex items-center gap-2 text-[16px] lg:text-[18px] text-zinc-950 px-6 py-3 font-sans rounded-full font-semibold tracking-widest shadow-lg transition-all duration-500 bg-white hover:bg-gray-700 hover:text-white hover:border-none self-center lg:self-auto border border-zinc-500">
                  Talk to Us
                  <MdOutlineArrowOutward
                    size={20}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </button>
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    <Footer />





    </>
  );
}

export default Home;
