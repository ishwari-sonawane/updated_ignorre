import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  // Animation Variants
  const containerVariants = {
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


  return (  

    <>
    <ScrollToTop />
    <div className="min-h-screen bg-white text-white py-20 px-4 font-sans selection:bg-red-500/30 overflow-x-hidden abc">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16 px-4"
      >


        <p className="text-[#e90011] font-medium text-[14px] mb-4 tracking-wide uppercase">Plans</p>

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
        variants={containerVariants}
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
    <Footer />
    </>
  );
};

export default PricingPage;