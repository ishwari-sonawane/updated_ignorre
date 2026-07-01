import React from "react";
// import { Mail, Phone, MapPin } from "lucide-react";
import { IoMailUnread } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { RiMapPin2Fill } from "react-icons/ri";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";


export default function SupportSalesSection() {
  return (
    <>
    <ScrollToTop />
    <section className="min-h-screen bg-white text-white px-6 md:px-16 lg:px-28 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-20">
          <p className="text-zinc-950 text-[14px] font-semibold inline-block pb-1">
            GET IN TOUCH
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-6 leading-tight text-zinc-950">
            Support &amp; Sales
          </h1>

          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Have questions about domains, hosting, VPS servers, or
            subscriptions?
            <br />
            Send us a message — our experts will respond quickly.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="pt-8">
            <h2 className="text-3xl font-bold text-zinc-950 md:text-zinc-950 mb-6">
              Let&apos;s Start a Conversation
            </h2>

            <p className="text-zinc-500 text-lg leading-relaxed max-w-xl mb-12">
              Whether you're looking to streamline your workflow, boost
              productivity, or transform your business operations, we're here
              to help you succeed.
            </p>

            <div className="space-y-10">
              {/* Email */}
              <div className="flex items-start gap-4">
                <IoMailUnread className="w-6 h-6 text-zinc-950 mt-1" />
                <div>
                  <p className="text-zinc-950 md:text-zinc-950 font-medium">
                    Email
                  </p>
                  <p className="text-zinc-500">support@ignorre.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhone className="w-6 h-6 text-zinc-950 mt-1" />
                <div>
                  <p className="text-zinc-950 md:text-zinc-950 font-medium">
                    Phone
                  </p>
                  <p className="text-zinc-500">+91 (0253) 4001496</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <RiMapPin2Fill className="w-6 h-6 text-zinc-950 mt-1" />
                <div>
                  <p className="text-zinc-950 md:text-zinc-950 font-medium">
                    Address
                  </p>
                  <p className="text-zinc-500 leading-relaxed">
                    VVT Avenue, Opp Ashoka Medicover,
                    <br />
                    Indira Nagar Nashik 422009, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="border border-zinc-300 rounded-3xl p-8 md:p-10 bg-white shadow-xl">
            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-950">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-zinc-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-950">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-zinc-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2 text-zinc-950">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-zinc-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-zinc-950">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Tell us more about your project or question..."
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:border-zinc-300 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-black border border-gray-900 hover:border-zinc-400 rounded-xl py-4 text-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    </>
  );
}
