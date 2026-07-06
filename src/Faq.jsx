import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiChevronDown } from 'react-icons/fi';
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const Faq = () => {
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

  return (
    <>
    <ScrollToTop />
    <div className="min-h-screen bg-white text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* <p className="text-zinc-950 font-medium mb-4 text-sm uppercase tracking-wide abc"> */}

          <p className="text-[#e90011] font-medium mb-4 text-sm uppercase tracking-wide abc">
            Customer Support
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-950 abc">
            Everything You <span className='bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text transition-all duration-500'>Need to Know</span>
          </h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed abc">
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
            
            <Link to="/contact">
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-105 mt-2">
         Contact Our Support Team
        </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Faq;