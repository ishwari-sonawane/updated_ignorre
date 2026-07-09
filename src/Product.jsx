import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
// Using React Icons for better compatibility and variety
import { 
  FiGlobe, 
  FiServer, 
  FiMail, 
  FiBarChart2, 
  FiCpu, 
  FiLayers, 
  FiShield, 
  FiLock, 
  FiDatabase,
  FiTwitter,
  FiLinkedin,
  FiInstagram 
} from 'react-icons/fi';
import { IoGridOutline } from 'react-icons/io5';

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

const Product = () => {
  const services = [
    { icon: FiGlobe, title: "Domain Registration", path: "/domain", description: "Search, register, renew, and manage domains with complete control from one dashboard.", buttonText: "Explore Domain Registration" },
    { icon: FiLayers, title: "DNS Management", path: "/dns", description: "Configure DNS records instantly with fast propagation and advanced routing options.", buttonText: "Explore DNS Management" },
    { icon: FiMail, title: "Email Management", path: "/email", description: "Professional email solutions with spam protection and business-grade reliability.", buttonText: "Explore Email Management" },
    { icon: FiBarChart2, title: "SEO & Growth Tools", path: "/seo", description: "Boost your website visibility with smart SEO monitoring and optimization insights.", buttonText: "Explore SEO & Growth Tools" },
    { icon: FiCpu, title: "AI", path: "/ai", description: "AI-powered dashboard to manage all your domains, hosting, servers insights.", buttonText: "Explore AI" },
    { icon: FiServer, title: "VPS & Cloud Servers", description: "High-performance VPS hosting built for developers, startups, and scaling businesses.", status: "Coming Soon" },
    { icon: FiShield, title: "Security & SSL", description: "Protect domains, servers, and customer data with SSL automation and threat monitoring.", status: "Coming Soon" },
    { icon: FiLock, title: "SSL Certificates", description: "Enable HTTPS instantly with automated SSL certificates and full encryption security.", status: "Coming Soon" },
    { icon: FiDatabase, title: "Dedicated Hosting", description: "Enterprise-grade dedicated servers for maximum speed, power, and reliability.", status: "Coming Soon" },

    // { icon: IoGridOutline, title: "Subscription Hub", description: "Manage all domain, hosting, and server subscriptions in one unified billing dashboard.", status: "Coming Soon" },

    { icon: IoGridOutline, title: "Subscription Hub", description: "Manage all domain, hosting, and server subscriptions in one unified billing dashboard.", status: "Coming Soon" },

  ];

  // const navigate = useNavigate();
  return (
    <>
      <ScrollToTop />
    <div className="bg-white min-h-screen font-sans selection:bg-purple-500/30">
      {/* Header Section */}
      <header className="pt-24 pb-16 px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-4 block "
        >
          Products
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-zinc-950 mb-6"
        >
          Everything You Need in <span className='text-[#E7000B]'>One Platform</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-zinc-500 text-lg"
        >
          ignore.com provides domains, hosting, servers, and subscription management — all accessible from one unified dashboard.
        </motion.p>
      </header>

      {/* Services Grid */}
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

      {/* CTA Section */}
      <section className="border-t border-white/5 py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4">Manage Everything From One Dashboard</h2>
        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Whether you're launching a new website or managing hundreds of domains and servers, ignore makes infrastructure simple, secure, and scalable.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105">
          Get Started with ignore
        </button>
      </section>

      {/* Footer */}
  
    </div>
    <Footer />
    </>
  );
};

export default Product;