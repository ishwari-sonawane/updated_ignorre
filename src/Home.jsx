import React from 'react'
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import Header from './Header.jsx'
import Footer from "./Footer.jsx";
import { GoArrowRight } from "react-icons/go";
import { IoGiftOutline } from "react-icons/io5";
import { FiGlobe,  FiLayers, FiMail, FiSliders } from 'react-icons/fi';
import { TiArrowRight } from "react-icons/ti";
import { FiZap, FiShield, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import h1 from './assets/h1.jpg'
import h2 from './assets/h2.jpg'
import h3 from './assets/h3.jpg'
import h4 from './assets/h4.jpg'
import h5 from './assets/h5.jpg'
import h6 from './assets/h6.jpg'
import ScrollToTop from './ScrollToTop.jsx';




const Home = () => {

const texts = ["Domain", "Search", ".com"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

const ServiceCard = ({ icon: Icon, title, description, status, buttonText, path }) => {
  const navigate = useNavigate(); // ✅ FIX

  return (
    <motion.div 
      whileHover={{ y: -5, borderColor: 'rgba(139, 92, 246, 0.5)' }}
      className="bg-white border border-white/10 rounded-2xl p-8 flex flex-col h-full transition-colors duration-300"
    >
      <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
        <Icon className="text-red-600 text-2xl" />
      </div>

      <h3 className="text-xl font-semibold text-zinc-950 mb-3">{title}</h3>

      <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      {status === 'Coming Soon' ? (
        <div className="text-zinc-500 font-medium py-2 px-4 bg-black/5 rounded-lg w-fit text-sm">
          Coming Soon
        </div>
      ) : (
        <button 
          onClick={() => {
            console.log("clicked"); // 🔍 debug
            if (path) {
              navigate(path);
            }
          }}
          className="text-zinc-950 text-sm font-medium border border-black/35 py-2 px-4 rounded-lg hover:bg-black/5 transition-all w-fit"
        >
          {buttonText}
        </button>
      )}
    </motion.div>
  );
};

   const services = [
      { icon: FiGlobe, title: "Domain Registration", path: "/", description: "Search, register, renew, and manage domains with complete control from one dashboard.", buttonText: "Explore Domain Registration" },
      { icon: FiLayers, title: "DNS Management", path: "/dns", description: "Configure DNS records instantly with fast propagation and advanced routing options.", buttonText: "Explore DNS Management" },
      { icon: FiMail, title: "Email Management", path: "/email", description: "Professional email solutions with spam protection and business-grade reliability.", buttonText: "Explore Email Management" },
   ];

 const features = [
    {
      title: "Instant Domain Control",
      metric: "1-click",
      metricLabel: "DOMAIN ACTIONS",
      description: "Search, register, transfer, and manage all your domains from one powerful dashboard. Update DNS, renewals, and ownership settings instantly — without complexity.",
      icon: <FiZap className="text-red-600" />,
      iconBg: "bg-red-500/10",
    },
    {
      title: "Enterprise-Grade Security",
      metric: "99.9%",
      metricLabel: "SECURE UPTIME",
      description: "Keep your websites protected with SSL automation, AI threat detection, firewall monitoring, and secure backups — ensuring maximum uptime and trust for your business.",
      icon: <FiShield className="text-red-500" />,
      iconBg: "bg-red-500/10",
    },
  ];

   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

    const [billingCycle, setBillingCycle] = useState('monthly');
  
    // Animation Variants
    const containerVariants1 = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
        },
      },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
      },
    };
  
    const plans = [
      {
        title: "Starter",
        desc: "Best for individuals and personal domain projects",
        monthly: 19,
        yearly: 190,
        features: [
          "1 domain + DNS management",
          "Free SSL certificate",
          "Basic hosting included",
          "Automated renewals & alerts",
          "Email support",
          "Access to Ignore dashboard",
        ],
        isPopular: false,
      },
      {
        title: "Professional",
        desc: "Perfect for startups, agencies & growing businesses",
        monthly: 59,
        yearly: 590,
        features: [
          "Up to 10 domains & subscriptions",
          "High-performance hosting + backups",
          "Smart workflow automation",
          "Advanced analytics & renewal insights",
          "Priority support",
          "Team collaboration tools",
          "API access + integrations",
          "Central billing hub",
        ],
        isPopular: true,
      },
      {
        title: "Enterprise",
        desc: "For companies managing servers & large-scale infrastructure",
        monthly: 199,
        yearly: 890,
        features: [
          "Unlimited domains, hosting & servers",
          "Dedicated VPS & custom server plans",
          "Enterprise-grade security + SSO",
          "24/7 dedicated support team",
          "Custom onboarding & migrations",
          "Full API + automation suite",
          "Multi-team access & permissions",
          "Advanced monitoring & SLA uptime",
          "Custom billing & invoicing",
        ],
        isPopular: false,
      },
    ];

    const testimonials = [
  {
    name: "Aarav Mehta",
    role: "XYZ",
    content: "Ignorre made domain and hosting management unbelievably simple. Everything is now in one dashboard.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sarah Khan",
    role: "XYZ",
    content: "Managing multiple client domains was chaos before. Ignorre gives me full control with renewals + DNS in one place.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Ignorre.com provide?",
      answer: "Ignorre.com is an all-in-one platform for domain registration, hosting, VPS servers, SSL security, and subscription management — all accessible from one unified dashboard.",
    },
    {
      question: "What’s included in the free trial?",
      answer: "Every plan comes with a 14-day free trial that gives you full access to domain tools, hosting features, server monitoring, and the Ignorre subscription dashboard — no credit card required.",
    },
    {
      question: "Can I manage multiple domains in one account?",
      answer: "Yes. Ignorre is built for individuals, agencies, and businesses that manage multiple domains. You can track renewals, DNS settings, and billing for all domains in one place.",
    },
    {
      question: "Do you provide hosting and VPS servers together?",
      answer: "Absolutely. You can purchase shared hosting, business hosting, or VPS servers separately — or manage them together under one subscription hub inside your dashboard.",
    },
    {
      question: "Is my domain and hosting data secure?",
      answer: "Yes. We use enterprise-grade security including SSL automation, firewall monitoring, encrypted billing, and AI-based threat detection to keep your infrastructure protected.",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Of course. You can change your plan anytime from the dashboard. Upgrades apply instantly, and billing is automatically prorated based on your usage.",
    },
    {
      question: "Do you offer refunds if I’m not satisfied?",
      answer: "Yes. Ignorre offers a 30-day money-back guarantee. If our service isn’t the right fit, you can request a full refund within 30 days of purchase.",
    },
    {
      question: "Do you support businesses with custom enterprise solutions?",
      answer: "Yes. For companies managing large-scale infrastructure, we offer custom VPS setups, dedicated support, advanced security, and tailored billing options. Contact our team for enterprise plans.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
// put these states at the TOP inside Home()

const navigate = useNavigate();
const [query, setQuery] = useState("");
const [status, setStatus] = useState("idle");
const [results, setResults] = useState([]);
const [placeholder, setPlaceholder] = useState(
  "Register a domain name to start"
);
const resultsRef = useRef(null);


// use this exact search logic

useEffect(() => {
  if (!query.trim()) {
    setStatus("idle");
    setResults([]);
    return;
  }

  const timer = setTimeout(() => {
    setStatus("checking");

    const extensions = [
      ".com",
      ".net",
      ".org",
      ".io",

    ];

    const fakeResults = extensions.map((ext) => ({
      domain: `${query}${ext}`,
      status: Math.random() > 0.5 ? "available" : "taken",
    }));

    setResults(fakeResults);
    setStatus("done");
  }, 500);

  return () => clearTimeout(timer);
}, [query]);



  return (
    <>
      <ScrollToTop />
    {/* <Header /> */}
    <div className='bg-white abc flex flex-col items-center justify-center overflow-x-hidden'>
<section className="w-full min-h-[95vh] flex items-center justify-center bg-white abc py-12">
  <div className="text-center max-w-4xl w-full px-4 sm:px-6">

    {/* Heading */}
    <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[72px] font-extrabold leading-tight text-zinc-950 text-center">
      Get Started Your{" "}
      <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text transition-all duration-500">
        {texts[index]}
      </span>
    </h1>

    {/* SEARCH BAR */}
    <div className="mt-8 flex justify-center">
      <div className="w-full max-w-4xl flex flex-col items-center">

        {/* SEARCH BOX */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden z-10 relative">
          <input
            type="text"
            value={query}
            onChange={(e) =>
              setQuery(
                e.target.value
                  .replace(/\..*$/, "")
                  .toLowerCase()
                  .trim()
              )
            }
            placeholder="Register a domain name to start"
            className="flex-1 px-6 py-5 text-sm outline-none min-w-0"
          />

          <button
            onClick={() => navigate('/advanced-search')}
            className="bg-white text-zinc-700 px-5 py-5 text-sm font-medium whitespace-nowrap border-x border-zinc-200 hover:bg-zinc-50 hover:border-zinc-400 cursor-pointer transition-all duration-200 flex items-center gap-2"
          >
            <FiSliders className="text-zinc-400 shrink-0" size={16} />
            Advanced
          </button>

          <button className="bg-red-600 text-white px-10 py-5 text-sm font-semibold whitespace-nowrap">
            Search
          </button>
        </div>

        {/* RESULT BOX */}
        {status !== "idle" && (
          <div className="w-full max-w-2xl mt-6">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-md overflow-hidden">

              {status === "checking" && (
                <div className="px-6 py-4 text-sm text-zinc-500">
                  Checking domain availability...
                </div>
              )}

              {status === "done" &&
                results.map((item) => (
                  <div
                    key={item.domain}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 py-5 border-b border-zinc-200 last:border-b-0 gap-2 min-h-[70px]"
                  >
                    {/* domain name */}
                    <span className="text-zinc-600 font-medium break-all text-left">
                      {item.domain}
                    </span>

                    {/* status */}
                    <span
                      className={`font-semibold whitespace-nowrap sm:ml-4 text-left sm:text-right ${
                        item.status === "available"
                          ? "text-green-600"
                          : item.status === "taken"
                          ? "text-red-500"
                          : "text-zinc-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}

      </div>
    </div>

    {/* Subtext */}
    <p className="mt-6 text-zinc-500 text-sm md:text-base">
      Instant domain search and availability check.
      <br />
      Secure your brand name in seconds.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
        Get started for free <GoArrowRight size={16} />
      </button>

      <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
        <IoGiftOutline size={16} /> Explore
      </button>
    </div>

    {/* Avatars */}
    <div className="mt-10 flex justify-center">
      <div className="flex -space-x-3 flex-wrap justify-center">
        <img src={h1} className="w-10 h-10 rounded-full border-2 border-white" />
        <img src={h2} className="w-10 h-10 rounded-full border-2 border-white" />
        <img src={h3} className="w-10 h-10 rounded-full border-2 border-white" />
        <img src={h4} className="w-10 h-10 rounded-full border-2 border-white" />
        <img src={h5} className="w-10 h-10 rounded-full border-2 border-white" />
        <img src={h6} className="w-10 h-10 rounded-full border-2 border-white" />
      </div>
    </div>

    {/* Stars */}
    <div className="mt-4 flex justify-center text-yellow-400 text-lg">
      ★★★★★
    </div>

    {/* Footer Text */}
    <p className="mt-2 text-zinc-500 text-sm">
      Trusted by thousands of enterprises
    </p>

  </div>
</section>

  <div className="bg-black w-full flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <header className="pt-24 pb-16 px-6 text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[#E8000F] font-semibold text-sm tracking-wider uppercase mb-6 block "
      >
        Products
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Everything You Need in <span className='bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text transition-all duration-500'>One Platform</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-zinc-500 text-lg "  
            >
              ignore.com provides domains, hosting, servers, and subscription management — all accessible from one unified dashboard.
            </motion.p>
          </header>
                <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>
      <a href="/product"> <button className="-mt-5 mb-10 sm:mb-15 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-3">
          Know More <TiArrowRight className='text-[30px]'/>
        </button></a> 
  </div>


        <div className="bg-black w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mt-20 mb-10 px-4">
        <span className="text-[#E8000F] text-sm font-semibold tracking-wide uppercase abc ">
          Features
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-8 mb-6 tracking-tight text-white abc leading-tight">
          Everything You Need to Power Your <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text transition-all duration-500">Online Business</span>
        </h2>
        <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Ignorre.com brings domains, hosting, servers, and subscriptions together in one intelligent platform — built for speed, security, and effortless scaling.
        </p>
      </div>
       <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full abc"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", borderColor: 'rgba(139, 92, 246, 0.5)' }}
                  className="bg-white border border-zinc-100 rounded-2xl p-8 transition-colors duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className={`p-3 rounded-lg ${feature.iconBg} text-2xl`}>
                        {feature.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zinc-950 ">{feature.metric}</div>
                        <div className="text-[10px] text-zinc-400 font-bold tracking-widest uppercase abc">
                          {feature.metricLabel}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl text-zinc-950 font-bold mb-4 abc">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed abc">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
             <a href="/features"> <button className="mt-10 sm:mt-15 mb-10 sm:mb-15 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-3">
          Explore More <TiArrowRight className='text-[30px]'/>
        </button></a> 
        </div>


               <div className="min-h-screen bg-white text-white py-20 px-4 font-sans selection:bg-red-500/30 overflow-x-hidden abc">
                    {/* Header Section */}
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="max-w-4xl mx-auto text-center mb-16"
                    >
                      <p className="text-[#EC001A] font-medium text-sm mb-4 tracking-wide uppercase">Plans</p>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-zinc-950">
                        Plans Built for Domains,<br className="sm:hidden" /><span className='bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text transition-all duration-500'> Hosting & Servers</span>
                      </h1>
                      <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ">
                        Whether you're launching your first domain or managing infrastructure at scale, ignore gives you one dashboard for everything. Start free upgrade anytime.
                      </p>
                    </motion.div>
              
                    {/* Toggle Section */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center mb-16"
                    >
                      <div className="flex items-center gap-4 bg-white p-1.5 rounded-full border border-white/5 relative shadow-sm">
                        <button
                          onClick={() => setBillingCycle('monthly')}
                          className={`relative z-10 px-6 py-2 text-sm font-medium transition-all duration-300 ${
                            billingCycle === 'monthly' ? 'text-white' : 'text-zinc-500'
                          }`}
                        >
                          Monthly
                          {billingCycle === 'monthly' && (
                            <motion.div 
                              layoutId="activeTab"
                              className="absolute inset-0 bg-black rounded-full -z-10 shadow-xl"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </button>
                        
                        <div className="flex items-center gap-2 relative">
                          <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`relative z-10 px-6 py-2 text-sm font-medium transition-all duration-300 ${
                              billingCycle === 'yearly' ? 'text-white' : 'text-zinc-500'
                            }`}
                          >
                            Yearly
                            {billingCycle === 'yearly' && (
                              <motion.div 
                                layoutId="activeTab"
                                className="absolute inset-0 bg-black rounded-full -z-10 shadow-xl"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                          </button>
                          <span className="bg-red-600/10 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-red-500/20">
                            -20%
                          </span>
                        </div>
                      </div>
                    </motion.div>
              
                    {/* Pricing Cards Grid */}
                    <motion.div 
                      variants={containerVariants1}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
                    >
                      {plans.map((plan, idx) => (
                        <motion.div
                          key={idx}
                          variants={itemVariants}
                          whileHover={{ y: -10, transition: { duration: 0.3 } }}
                          className={`relative flex flex-col p-6 sm:p-8 lg:p-10 rounded-[2.5rem] transition-all duration-500 border ${
                            plan.isPopular 
                              ? 'bg-white border-red-600 shadow-[0_0_40px_-15px_rgba(220,38,38,0.2)]' 
                              : 'bg-white border-zinc-100 shadow-sm'
                          }`}
                        >
                          {plan.isPopular && (
                            <motion.div 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-bold tracking-widest uppercase px-5 py-1.5 rounded-full z-10 flex items-center gap-1"
                            >
                              <span className="text-[14px] abc">☆</span> Most Popular
                            </motion.div>
                          )}
              
                          <div className="mb-6">
                            <h3 className={`text-3xl font-bold mb-4 ${plan.isPopular ? 'text-gray-100' : 'text-gray-100'}`}>
                              {/* Note: In your code text-white/90 was used on white bg. I kept logic but ensured it's bold like screenshot */}
                              <span className="text-zinc-950">{plan.title}</span>
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-8">{plan.desc}</p>
                            
                            <div className="flex items-baseline gap-1">
                              <motion.span 
                                key={billingCycle}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-950 tracking-tighter inline-block"
                              >
                                ${billingCycle === 'monthly' ? plan.monthly : plan.yearly}
                              </motion.span>
                              <span className="text-zinc-400 font-medium text-xl">/{billingCycle === 'monthly' ? 'mon' : 'yr'}</span>
                            </div>
                          </div>
              
                          {/* Horizontal Divider from Screenshot */}
                          <div className="w-full h-[1px] bg-zinc-100 my-8" />
              
                          <ul className="space-y-5 mb-10 flex-grow">
                            {plan.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-4 text-[15px] text-zinc-500 font-medium">
                                <div className="mt-1">
                                  <FaCheck className="text-zinc-950 text-[14px]" />
                                </div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
              
                          <button className={`w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 border ${
                            plan.isPopular 
                              ? 'bg-black text-white border-black' 
                              : 'bg-black text-white border-black'
                          }`}>
                            Get Started
                          </button>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                    <a href="/features"> <button className="mt-5 mb-35 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-3">
          Get Your Plan Now <TiArrowRight className='text-[30px]'/>
        </button></a> 

        <div className="bg-black w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto px-4 mb-0 text-center z-10 ">
        <a href="#" className="text-zinc-500 text-xs font-bold tracking-wider uppercase abc  mx-auto py-2 rounded-full px-6">
         Testimonials
        </a>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tight text-white abc">
          Trusted by <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 abc">Thousands</span>
        </h2>
        <p className="text-zinc-500 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed abc">
          Discover why businesses choose ignorre.com for domains, hosting,
          servers, and subscription management — all from one powerful dashboard.
        </p>
      </div>
    
  <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

    {testimonials.map((item, index) => (
      <div
        key={index}
        className="
          bg-white
          
          rounded-2xl
          p-6
          shadow-lg
          hover:shadow-xl
          transition-all duration-300
          min-h-[250px]
          flex flex-col justify-between
        "
      >
        {/* Quote */}
        <p
          className="
            text-zinc-500
            text-[16px]
            sm:text-[18px]
            leading-relaxed
            font-medium
          "
        >
          “{item.content}”
        </p>

        {/* User Info */}
        <div className="flex items-center gap-4 mt-8">
          <img
            src={item.avatar}
            alt={item.name}
            className="
              w-14 h-14
              rounded-full
              object-cover
              border border-zinc-800
            "
          />

          <div>
            <h3
              className="
                text-zinc-950
                text-[18px]
                sm:text-[20px]
                font-semibold
              "
            >
              {item.name}
            </h3>

            <p
              className="
                text-zinc-500
                text-[14px]
                sm:text-[15px]
              "
            >
              {item.role}
            </p>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>
 <a href="/testimonial"> <button className="mt-0 mb-10 sm:mb-15 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-3">
          Read More <TiArrowRight className='text-[30px]'/>
        </button></a> 
        </div>


        <div className="min-h-screen bg-white text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <p className="text-[#E8000F] font-medium mb-4 text-sm uppercase tracking-wide abc">
                  Customer Support
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-950 abc">
                  Everything You <span className='bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text transition-all duration-500'>Need to Know</span>
                </h1>
                <p className="text-zinc-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed abc">
                  Questions about domains, hosting, servers, or managing subscriptions? 
                  Here are the most common answers from Ignorre customers.
                </p>
              </div>
      
              {/* FAQ Accordion List */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-zinc-200 rounded-lg overflow-hidden transition-all duration-300 bg-white"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-sm md:text-base pr-4 text-zinc-950 font-bold abc">
                        {faq.question}
                      </span>
                      <FiChevronDown 
                        className={`flex-shrink-0 transition-transform duration-300 text-zinc-950 ${
                          openIndex === index ? 'rotate-180' : 'rotate-0'
                        }`} 
                      />
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openIndex === index ? 'max-h-48' : 'max-h-0'
                      }`}
                    >
                      <div className="p-5 pt-0 text-zinc-500 text-sm md:text-base leading-relaxed abc">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
      
              {/* Footer Section */}
              <div className="mt-12 text-center">
                <p className="text-zinc-500 text-[16px] font-semibold abc">
                  Still have questions?{' '}
                  <br />
                  
                 <a href="/contact">
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-105 mt-2">
         Contact Our Support Team
        </button>
        </a>
                </p>
              </div>
            </div>
          </div>


        </div>
    <Footer />

    </>
  )
}

export default Home;
