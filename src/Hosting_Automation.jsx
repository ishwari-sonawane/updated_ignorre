import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom"; 


const Hosting_Automation = () => {
  const workflow = [
    "Order Received",
    "Account Created",
    "Hosting Provisioned",
    "Email Notification Sent",
    "Services Activated",
  ];

  const automations = [
    {
      title: "Account Creation",
      description:
        "Automatically create hosting accounts when a customer places an order.",
    },
    {
      title: "Billing Automation",
      description:
        "Generate invoices, process payments, and manage renewals automatically.",
    },
    {
      title: "Auto Renewals",
      description:
        "Keep hosting plans active with scheduled renewal automation.",
    },
    {
      title: "Email Notifications",
      description:
        "Send instant notifications for purchases, invoices, and renewals.",
    },
    {
      title: "Backup Scheduling",
      description:
        "Automate backups to keep customer data safe and accessible.",
    },
    {
      title: "Resource Scaling",
      description:
        "Automatically allocate resources based on traffic and usage.",
    },
  ];

  const benefits = [
    "Reduce Manual Tasks",
    "Improve Operational Efficiency",
    "Faster Customer Onboarding",
    "Automated Billing Management",
    "Reliable Service Delivery",
    "Scale Without Complexity",
  ];

  // Reusable animation settings for "every time" scroll animations
  const scrollAnim = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.1 }, // once: false makes it animate every time
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-28 2xl:py-35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left Content */}
            <motion.div {...scrollAnim}>
              <span className="inline-flex px-4 py-2 text-[#e90011] bg-red-50 rounded-full font-medium text-sm sm:text-[14px]">
                Hosting Automation
              </span>

              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold text-slate-900 leading-tight">
                Automate Your Hosting
                <span className="block text-[#e90011]">
                  Operations End-to-End
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Streamline account provisioning, billing, renewals, backups, and
                customer notifications with Ignorre Hosting Automation. Spend less
                time managing infrastructure and more time growing your business.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                <button className="px-7 py-3 w-full sm:w-auto text-center bg-[#e90011] text-white rounded-xl font-medium transition hover:bg-red-700">
                  Start Automating
                </button>

                <Link to="/features">
  <button className="px-7 py-3 w-full sm:w-auto text-center border border-slate-300 rounded-xl font-medium hover:border-[#e90011] hover:text-[#e90011] transition">
    Explore More
  </button>
</Link>
              </div>
            </motion.div>

            {/* Right Workflow */}
            <div className="space-y-4">
              {workflow.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 flex items-center gap-4 sm:gap-5"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#e90011] text-white font-bold shrink-0 text-sm sm:text-base">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                      {step}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1">
                      Fully automated process execution.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automation Categories */}
      <section className="py-16 md:py-20 bg-black lg:mt-10 2xl:mt-19">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div className="max-w-3xl" {...scrollAnim}>
            <span className="text-[#e90011] font-medium tracking-wide text-sm sm:text-base">
              AUTOMATION MODULES
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Everything Runs Automatically
            </h2>

            <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
              Eliminate repetitive hosting tasks and deliver a better customer
              experience through automation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-14">
            {automations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 pb-20 md:pb-28 2xl:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            <motion.div {...scrollAnim}>
              <span className="text-[#e90011] font-medium tracking-wide text-sm sm:text-base">
                WHY IGNORRE
              </span>

              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Focus On Growth, Not Repetitive Tasks
              </h2>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Ignorre automates the operational side of hosting so your team
                can focus on customer acquisition and business growth.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 hover:shadow-sm transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#e90011] font-bold shrink-0">
                      ✓
                    </div>
                    <span className="font-medium text-sm sm:text-base text-slate-800">
                      {benefit}
                    </span>
                  </div>
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

export default Hosting_Automation;