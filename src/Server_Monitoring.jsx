import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

const Server_Monitoring = () => {
  const metrics = [
    {
      value: "99.99%",
      title: "Server Uptime",
    },
    {
      value: "24/7",
      title: "Live Monitoring",
    },
    {
      value: "< 5s",
      title: "Alert Response",
    },
    {
      value: "150+",
      title: "Servers Protected",
    },
  ];

  const monitoringFeatures = [
    {
      title: "CPU Monitoring",
      description:
        "Track processor usage across all servers in real time.",
    },
    {
      title: "Memory Monitoring",
      description:
        "Monitor RAM consumption and identify performance bottlenecks.",
    },
    {
      title: "Disk Monitoring",
      description:
        "Keep storage resources optimized and prevent outages.",
    },
    {
      title: "Network Analytics",
      description:
        "Track bandwidth, latency, and traffic performance.",
    },
    {
      title: "Instant Alerts",
      description:
        "Receive notifications when thresholds are exceeded.",
    },
    {
      title: "Security Monitoring",
      description:
        "Monitor suspicious activities and protect infrastructure.",
    },
  ];

  const healthChecks = [
    "Real-Time Server Status",
    "Performance Tracking",
    "Automated Health Checks",
    "Resource Utilization Reports",
    "Downtime Prevention",
    "Infrastructure Visibility",
  ];

  // Reusable animation configuration for "every time" scrolling
  const fadeUpAnim = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20 lg:py-24 2xl:py-32">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          {...fadeUpAnim}
        >
          <span className="inline-flex items-center px-4 py-2 text-[#e90011] bg-red-50 rounded-full text-sm sm:text-[14px] font-medium tracking-wide">
            SERVER MONITORING
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Monitor Infrastructure
            <span className="block text-[#e90011]">
              Before Problems Happen
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed px-4 sm:px-0">
            Gain complete visibility into server health, uptime,
            performance, and security from a centralized monitoring
            platform powered by Ignorre.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 px-4 sm:px-0">
            <button className="w-full sm:w-auto px-8 py-3 bg-[#e90011] text-white rounded-xl font-medium transition hover:bg-red-700">
              Start Monitoring
            </button>
            <Link to="/features">
  <button className="px-7 py-3 w-full sm:w-auto text-center border border-slate-300 rounded-xl font-medium hover:border-[#e90011] hover:text-[#e90011] transition">
    Explore More
  </button>
</Link>
          </div>
        </motion.div>
      </section>

      {/* Metrics Strip */}
      {/* <section className="-mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {metrics.map((item) => (
                <div
                  key={item.title}
                  className="p-8 text-center border-b lg:border-b-0 lg:border-r last:border-r-0 border-slate-200"
                >
                  <h3 className="text-4xl font-bold text-black">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Monitoring Center */}
      {/* <section className="py-24">
        ... (Kept commented as per original code) ...
      </section> */}

      {/* Features */}
      <section className="bg-black py-16 md:py-24 2xl:mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            {...fadeUpAnim}
          >
            <span className="text-[#e90011] font-semibold tracking-wide text-sm sm:text-base">
              MONITORING TOOLS
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white leading-tight">
              Everything You Need To Stay Online
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-14">
            {monitoringFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-slate-700/50 bg-slate-900/50 rounded-3xl p-6 sm:p-8 hover:bg-slate-800 transition duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Checklist */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div {...fadeUpAnim}>
              <span className="text-[#e90011] font-medium tracking-wide text-sm sm:text-base">
                HEALTH CHECKS
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Proactive Monitoring For Every Server
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Identify issues before they impact customers and
                maintain reliable infrastructure around the clock.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {healthChecks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md transition flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-[#e90011] shrink-0 text-sm">
                    ✓
                  </div>
                  <span className="font-medium text-slate-800 text-sm sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Server_Monitoring;