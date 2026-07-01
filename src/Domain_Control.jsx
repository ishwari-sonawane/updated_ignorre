import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";


const Domain_Control = () => {
  const [active, setActive] = useState(null);

  const features = [
    {
      title: "Domain Registration",
      desc: "Register and manage domain names quickly from a centralized platform.",
    },
    {
      title: "DNS Management",
      desc: "Control DNS records with a simple and secure interface.",
    },
    {
      title: "Domain Transfers",
      desc: "Transfer domains easily without downtime or complexity.",
    },
    {
      title: "Auto Renewal",
      desc: "Never miss a renewal with automated billing and reminders.",
    },
    {
      title: "WHOIS Privacy",
      desc: "Protect personal information with domain privacy services.",
    },
    {
      title: "SSL Protection",
      desc: "Secure your domains and websites with SSL integration.",
    },
  ];

  const benefits = [
    "Manage Unlimited Domains",
    "Fast DNS Updates",
    "Automatic Renewals",
    "Enterprise Security",
    "Real-Time Monitoring",
    "Centralized Dashboard",
  ];

  const faqs = [
    {
      q: "Can I manage multiple domains?",
      a: "Yes, Ignorre allows you to manage all your domains from a single dashboard.",
    },
    {
      q: "Does Ignorre support domain transfers?",
      a: "Yes, you can easily transfer domains and manage them without interruptions.",
    },
    {
      q: "Are renewals automated?",
      a: "Yes, automatic renewal options help ensure your domains never expire unexpectedly.",
    },
    {
      q: "Is WHOIS protection available?",
      a: "Yes, WHOIS privacy protection helps keep your personal information secure.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20 lg:py-24 2xl:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center px-4 py-2 text-[#e90011] text-xs sm:text-sm md:text-base font-semibold tracking-wide bg-red-50 rounded-full">
            DOMAIN CONTROL
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            All Your Domains.
            <span className="block text-[#e90011] mt-2">
              One Powerful Hub.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Register, manage, renew, transfer, and secure all your domains from
            a single centralized dashboard built for businesses, agencies, and
            hosting providers.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-[#e90011] text-white rounded-xl font-medium transition hover:bg-red-700">
              Manage Domains
            </button>

            <Link to="/features">
  <button className="w-full sm:w-auto px-8 py-3 border border-slate-300 hover:border-[#e90011] hover:text-[#e90011] rounded-xl font-medium transition">
    Learn More
  </button>
</Link>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            { value: "50K+", label: "Domains Managed" },
            { value: "99.99%", label: "DNS Uptime" },
            { value: "24/7", label: "Monitoring" },
            { value: "200+", label: "Extensions" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center transition-transform hover:-translate-y-1"
            >
              <h3 className="text-3xl font-bold text-[#e90011]">
                {item.value}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-black py-16 md:py-24 lg:mt-10 2xl:mt-19">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Everything You Need
            </h2>

            <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              Powerful tools to manage domains efficiently and securely from one
              place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-800 shadow-sm  transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="mt-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Built for Modern Infrastructure
            </h2>

            <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Built to simplify domain management for modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 md:p-6 flex items-center gap-4 hover:border-red-200 transition shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-red-50 flex items-center justify-center text-[#e90011] font-bold">
                  ✓
                </div>
                <p className="font-medium text-slate-800 text-sm sm:text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 mb-4"
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="max-w-4xl mx-auto space-y-3 mt-10">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-zinc-200 bg-white rounded-xl overflow-hidden text-left shadow-sm"
              >
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left font-bold text-[15px] sm:text-[16px] text-zinc-950 hover:bg-slate-50 transition"
                >
                  <span className="pr-4">{item.q}</span>
                  <span className="transition text-xl shrink-0 text-zinc-500">
                    {active === i ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>

                <div
                  className={`px-4 sm:px-6 text-[14px] sm:text-[16px] text-zinc-500 overflow-hidden transition-all duration-300 ease-in-out block ${
                    active === i
                      ? "max-h-[500px] py-4 border-t border-zinc-100 opacity-100"
                      : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  {item.a}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Domain_Control;