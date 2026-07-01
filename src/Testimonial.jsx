import React from 'react';
import { motion } from 'framer-motion';
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

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
  {
    name: "Rohit Sharma",
    role: "XYZ",
    content: "The VPS monitoring and automation features saved us hours every week. Super clean platform.",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "XYZ",
    content: "Ignorre helped us bundle hosting, email, and SSL subscriptions together — no more juggling providers.",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "XYZ",
    content: "From domains to servers, Ignorre is the only platform we need. Fast, secure, and scalable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Lisa Thompson",
    role: "XYZ",
    content: "The subscription hub is amazing — renewals, billing, and services all managed from one screen.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Alex Martinez",
    role: "XYZ",
    content: "Setting up DNS and hosting took minutes. Ignorre’s interface feels premium.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Jennifer Park",
    role: "XYZ",
    content: "Our customers love how easy it is to manage domains + email services together. Ignorre is future-ready.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Michael Brown",
    role: "XYZ",
    content: "We reduced hosting costs by 30% while improving uptime. Ignorre delivers real value.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Naina Verma",
    role: "XYZ",
    content: "Domains, VPS, SSL, renewals — everything is perfectly organized. Ignorre is built for professionals.",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialCard = ({ item }) => (
  <div className="inline-block w-[300px] md:w-[400px] mx-3 bg-white border border-white/5 p-6 rounded-xl whitespace-normal ">
    <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed  abc">
      "{item.content}"
    </p>
    <div className="flex items-center gap-4">
      <img
        src={item.avatar}
        alt={item.name}
        className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10"
      />
      <div>
        <h4 className="font-bold text-zinc-950 text-sm md:text-base abc">{item.name}</h4>
        <p className="text-zinc-950 text-xs uppercase tracking-wider abc">{item.role}</p>
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  const extendedItems = [...items, ...items];
  
  return (
    <div className="flex overflow-hidden py-4 group">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {extendedItems.map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonial = () => {
  // Splitting data for two rows
  const row1 = testimonials.slice(0, 5);
  const row2 = testimonials.slice(5, 10);

  return (
    <>
    <ScrollToTop />
    <section className="bg-white text-white py-24 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center z-10">
        <a href="#" className="text-zinc-950 text-xs font-bold tracking-wider uppercase abc">
          Feedback From Our Users
        </a>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tight text-zinc-950 abc">
          Trusted by <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 abc">Thousands</span>
        </h2>
        <p className="text-zinc-500 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed abc">
          Discover why businesses choose ignorre.com for domains, hosting,
          servers, and subscription management — all from one powerful dashboard.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative space-y-4">
        {/* Row 1: Moving Left */}
        <MarqueeRow items={row1} direction="left" speed={35} />
        
        {/* Row 2: Moving Right */}
        <MarqueeRow items={row2} direction="right" speed={45} />
      </div>
    </section>

    <Footer />
    </>
  );
};

export default Testimonial;