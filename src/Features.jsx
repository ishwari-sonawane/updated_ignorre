import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiShield, FiUsers, FiTrendingUp } from 'react-icons/fi';
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const Features = () => {
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
    {
      title: "All Subscriptions in One Place",
      metric: "10k+",
      metricLabel: "ACTIVE CUSTOMERS",
      description: "Domains, hosting, servers, email, SSL — manage everything under one unified subscription hub. Perfect for individuals, teams, and agencies scaling fast.",
      icon: <FiUsers className="text-red-500" />,
      iconBg: "bg-emerald-500/10",
    },
    {
      title: "Smart Hosting & Renewal Insights",
      metric: "25%",
      metricLabel: "COST SAVINGS",
      description: "Track renewals, server performance, and hosting usage with predictive analytics. Ignorre helps you forecast costs, optimize resources, and stay ahead of expirations.",
      icon: <FiTrendingUp className="text-orange-500" />,
      iconBg: "bg-orange-500/10",
    }
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

  return (
    <>
    <ScrollToTop />
    <section className="bg-white text-white py-24 px-6 min-h-screen flex flex-col items-center abc">
      {/* Header Section */}
      <div className="text-center max-w-4xl mb-16">
        <span className="text-zinc-950 text-sm font-semibold tracking-wide uppercase pb-1 abc">
          Features
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-8 mb-6 tracking-tight text-zinc-950 abc leading-tight">
          Everything You Need to Power Your <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text transition-all duration-500">Online Business</span>
        </h2>
        <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Ignorre.com brings domains, hosting, servers, and subscriptions together in one intelligent platform — built for speed, security, and effortless scaling.
        </p>
      </div>

      {/* Grid Section */}
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
    </section>
    <Footer />
    </>
  );
};

export default Features;