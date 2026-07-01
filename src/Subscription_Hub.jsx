import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

const Subscription_Hub = () => {
  const lifecycleSteps = [
    {
      title: "Choose Plan",
      desc: "Select the hosting, monitoring, or automation services that fit your needs.",
    },
    {
      title: "Activate Services",
      desc: "Instantly activate and configure your subscriptions.",
    },
    {
      title: "Manage Billing",
      desc: "Track invoices, payments, and billing cycles from one place.",
    },
    {
      title: "Track Usage",
      desc: "Monitor resource consumption and service activity.",
    },
    {
      title: "Auto Renewal",
      desc: "Keep services active with automatic renewals and reminders.",
    },
  ];

  const benefits = [
    "Centralized Subscription Control",
    "Automated Renewals",
    "Transparent Billing",
    "Instant Plan Upgrades",
    "Real-Time Service Visibility",
    "Enterprise-Grade Reliability",
  ];

  const features = [
    "Subscription Tracking",
    "Invoice Management",
    "Usage Analytics",
    "Renewal Reminders",
    "Payment History",
    "Multi-Service Management",
  ];

  const managementBlocks = [
    {
      title: "Manage Plans",
      desc: "Upgrade, downgrade, or customize your hosting subscriptions with complete flexibility.",
    },
    {
      title: "Track Renewals",
      desc: "Stay informed about upcoming renewals and avoid service interruptions.",
    },
    {
      title: "Monitor Payments",
      desc: "Access payment records, invoices, and transaction history anytime.",
    },
  ];

  // Reusable animation configurations for "every time" scrolling
  const fadeUpAnim = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.1 }, // once: false ensures it triggers every scroll
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <div className="min-h-screen bg-white overflow-hidden">
        {/* Hero */}
        <section className="py-16 md:py-20 lg:py-28 2xl:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Left */}
              <motion.div {...fadeUpAnim}>
                <span className="inline-flex px-4 py-2 rounded-full bg-red-50 text-[#e90011] text-xs sm:text-sm font-semibold tracking-wide">
                  SUBSCRIPTION HUB
                </span>

                <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                  Simplify Every
                  <span className="block text-[#e90011]">
                    Subscription Journey
                  </span>
                </h1>

                <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Manage hosting plans, domains, monitoring services, renewals,
                  invoices, and payments from one centralized subscription
                  platform.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                  <button className="w-full sm:w-auto px-8 py-3 bg-[#e90011] text-white rounded-xl font-medium transition hover:bg-red-700">
                    Get Started
                  </button>

                 <Link to="/features">
  <button className="px-7 py-3 w-full sm:w-auto text-center border border-slate-300 rounded-xl font-medium hover:border-[#e90011] hover:text-[#e90011] transition">
    Explore More
  </button>
</Link>
                </div>
              </motion.div>

              {/* Right Status Card */}
              <motion.div
                {...slideInRight}
                className="bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 p-6 sm:p-8 shadow-sm"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Subscription Status
                </h3>

                <div className="space-y-5 sm:space-y-6 mt-6 sm:mt-8">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-slate-500">
                      Active Services
                    </span>
                    <span className="font-semibold text-slate-900 text-sm sm:text-base">
                      12
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-slate-500">
                      Next Renewal
                    </span>
                    <span className="font-semibold text-slate-900 text-sm sm:text-base">
                      Jul 15, 2026
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-slate-500">
                      Payment Status
                    </span>
                    <span className="text-green-600 font-semibold text-sm sm:text-base">
                      Paid
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-slate-500">
                      Auto Renewal
                    </span>
                    <span className="text-blue-600 font-semibold text-sm sm:text-base">
                      Enabled
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Lifecycle */}
        <section className="py-16 md:py-24 bg-black lg:mt-10 2xl:mt-25">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div className="text-center" {...fadeUpAnim}>
              <span className="text-[#e90011] font-semibold tracking-wide text-sm sm:text-base">
                SUBSCRIPTION LIFECYCLE
              </span>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                From Signup To Renewal
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mt-10 md:mt-14">
              {lifecycleSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-6 hover:shadow-lg transition"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#e90011] text-white flex items-center justify-center font-bold text-sm sm:text-base">
                    {index + 1}
                  </div>

                  <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Features */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
              {/* Benefits Box */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 p-6 sm:p-8 hover:shadow-sm transition"
              >
                <span className="text-[#e90011] font-semibold tracking-wide text-sm sm:text-base">
                  BENEFITS
                </span>

                <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                  Why Use Subscription Hub?
                </h2>

                <div className="space-y-4 mt-6 sm:mt-8">
                  {benefits.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start sm:items-center gap-3 sm:gap-4"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-red-50 text-[#e90011] flex items-center justify-center font-bold text-sm">
                        ✓
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features Box */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5 }}
                className="bg-black rounded-3xl sm:rounded-[32px] p-6 sm:p-8"
              >
                <span className="text-[#e90011] font-semibold tracking-wide text-sm sm:text-base">
                  FEATURES
                </span>

                <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold text-white">
                  Powerful Management Tools
                </h2>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  {features.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-slate-800/80 hover:bg-slate-700 transition rounded-xl sm:rounded-2xl p-4 sm:p-5 text-white text-sm sm:text-base"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Management Blocks */}
        <section className="pb-16 md:pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {managementBlocks.map((block, index) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl sm:rounded-[32px] border border-slate-200 p-6 sm:p-8 hover:shadow-lg transition"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {block.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {block.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Subscription_Hub;