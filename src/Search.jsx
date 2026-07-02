import React from 'react'
import { useEffect, useState, useRef } from "react";

const Search = () => {
  // Main Search State
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("idle");
  const [results, setResults] = useState([]);
  const [activeTab, setActiveTab] = useState("register");

  // Modal/Panel States
  const [isBulkTransferOpen, setIsBulkTransferOpen] = useState(false);
  const [isBeastModeOpen, setIsBeastModeOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const resultsRef = useRef(null);

  // Simulated search functionality
  useEffect(() => {
    if (!query.trim() || isBeastModeOpen || isBulkTransferOpen) {
      setStatus("idle");
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      setStatus("checking");

      const extensions = [".com", ".net", ".org", ".io"];

      const fakeResults = extensions.map((ext) => ({
        domain: `${query}${ext}`,
        status: Math.random() > 0.5 ? "available" : "taken",
      }));

      setResults(fakeResults);
      setStatus("done");
    }, 500);

    return () => clearTimeout(timer);
  }, [query, isBeastModeOpen, isBulkTransferOpen]);

  const toggleCategory = (category) => {
    setExpandedCategory(
      expandedCategory === category ? null : category
    );
  };



  const BulkTransferModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 transition-all">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative transform transition-all">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Bulk Transfer</h2>
          <button 
            onClick={() => setIsBulkTransferOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600 mb-4">
            We support transfers of domains with the extensions like: .com, .net, .org, .us, .info, .biz, .me, .co and much more. <a href="#" className="text-blue-600 hover:underline">View all available extensions</a>
          </p>
          <textarea 
            className="w-full h-48 p-4 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-mono resize-none"
            placeholder={`Transfer up to 50 domains at once. Enter one name per line.\nIf you have an Auth code, enter it after the domain, separated by a comma.\n\nExample:\nmydomain.com\nmydomain.net, Auth`}
          ></textarea>
        </div>
        <div className="p-6 bg-gray-50 flex justify-center border-t border-gray-100">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-sm transition-colors">
            Start Transfer
          </button>
        </div>
      </div>
    </div>
  );

  // --- MODAL: BEAST MODE (With Blur Effect) ---
  const BeastModePanel = () => {
    const tldCategories = ["Popular", "International", "Academic & Education", "Finance", "Professional", "Businesses", "Audio & Video", "Arts & Culture", "Marketing", "Products", "Services", "Short", "New"];

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 sm:p-8 transition-all">
        <div className="bg-gray-50 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col overflow-hidden relative">
          
          {/* Header */}
          <div className="bg-white px-8 pt-6 pb-2 border-b border-gray-200 shrink-0">
            <div className="flex justify-between items-center mb-2">
              <div className="flex space-x-6 overflow-x-auto">
                {["Domains", "Auctions", "Premium", "Generator", "Beast Mode", "Favorites"].map((tab) => (
                  <button key={tab} className={`text-sm font-semibold pb-2 border-b-2 whitespace-nowrap ${tab === "Beast Mode" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-800"}`}>
                    {tab}
                  </button>
                ))}
              </div>
              <button onClick={() => setIsBeastModeOpen(false)} className="text-gray-500 hover:text-gray-800 font-medium text-sm flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors">
                Close <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
              <div className="mb-8">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Enter up to 5,000 domains or keywords to get started</label>
                <textarea className="w-full h-24 p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h3 className="text-gray-700 text-sm font-semibold mb-3">Price Range</h3>
                    <div className="flex items-center space-x-4">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-2 text-gray-500">$</span>
                        <input type="number" defaultValue={0} className="w-full border border-zinc-300 rounded p-2 pl-8 text-sm outline-none focus:border-blue-500" />
                      </div>
                      <span className="text-gray-500 text-sm">to</span>
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-2 text-gray-500">$</span>
                        <input type="number" defaultValue={500000} className="w-full border border-zinc-300 rounded p-2 pl-8 text-sm outline-none focus:border-blue-500" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-gray-700 text-sm font-semibold mb-3 flex items-center">Transform</h3>
                      <label className="flex items-center space-x-2 mb-2 text-sm text-gray-600"><input type="checkbox" className="rounded text-blue-600" /> <span>Use Domain Hacks</span></label>
                      <label className="flex items-center space-x-2 mb-2 text-sm text-gray-600"><input type="checkbox" className="rounded text-blue-600" /> <span>Drop Last Vowel</span></label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600"><input type="checkbox" className="rounded text-blue-600" /> <span>Pluralize Nouns</span></label>
                    </div>
                    <div>
                      <h3 className="text-gray-700 text-sm font-semibold mb-3 flex items-center">Options</h3>
                      <label className="flex items-center space-x-2 mb-2 text-sm text-gray-600"><input type="checkbox" defaultChecked className="rounded text-blue-600" /> <span>Show Premiums</span></label>
                      <label className="flex items-center space-x-2 text-sm text-gray-600"><input type="checkbox" className="rounded text-blue-600" /> <span>Hide Unavailable</span></label>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="relative flex-1 mr-4">
                      <input type="text" placeholder="Search 571 TLDs..." className="w-full border border-zinc-300 rounded p-2 text-sm outline-none focus:border-blue-500" />
                    </div>
                    <button className="text-sm font-semibold text-gray-600 border border-zinc-300 rounded px-4 py-2 hover:bg-gray-50">Select All</button>
                  </div>
                  
                  <div className="border border-zinc-200 rounded-lg max-h-72 overflow-y-auto">
                    {tldCategories.map((category) => (
                      <div key={category} className="border-b border-zinc-200 last:border-0">
                        <button 
                          onClick={() => toggleCategory(category)}
                          className="w-full flex justify-between items-center p-3 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {category}
                          <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedCategory === category ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-zinc-200 pt-6 flex justify-center">
                <button className="bg-[#66c2a5] hover:bg-[#58a88f] text-white font-bold py-3 px-12 rounded shadow-sm text-lg transition-colors">
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full  py-16 px-4 min-h-[10vh] flex justify-center relative">
      
      {/* Background container to show blur contrast */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        
        {/* TABS */}
        <div className="flex bg-black p-1 rounded-full mb-6 z-10 relative">
          <button
            onClick={() => { setActiveTab("register"); setQuery(""); }}
            className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === "register" ? "bg-white text-black shadow-sm" : "text-white hover:text-blue-100"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => { setActiveTab("transfer"); setQuery(""); }}
            className={`px-8 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeTab === "transfer" ? "bg-white text-black shadow-sm" : "text-white hover:text-blue-100"
            }`}
          >
            Transfer
          </button>
        </div>

        {/* SEARCH BOX */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden z-10 relative items-stretch">
          <input
            type="text"
            value={query}
            onChange={(e) =>
              setQuery(
                e.target.value
                  .replace(/\..*$/, "")
                  .toLowerCase()
                  .trim()
              )
            }
            placeholder={activeTab === "register" ? "Register a domain name to start" : "Enter your domain to transfer"}
            className="flex-1 px-6 py-5 text-sm outline-none min-w-0"
          />

          <div className="flex flex-row items-stretch border-t sm:border-t-0 border-zinc-100">
            {activeTab === "register" ? (
              <button 
                onClick={() => setIsBeastModeOpen(true)}
                className="px-6 py-5 text-sm font-semibold text-gray-500 hover:text-gray-800 hover:bg-pink-50 transition-colors whitespace-nowrap"
              >
                Beast Mode
              </button>
            ) : (
              <button 
                onClick={() => setIsBulkTransferOpen(true)}
                className="px-6 py-5 text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-zinc-50 transition-colors whitespace-nowrap"
              >
                Bulk transfer
              </button>
            )}

            <button className="bg-red-600 hover:bg-red-700 transition-colors text-white px-10 py-5 text-sm font-semibold whitespace-nowrap">
              {activeTab === "register" ? "Search" : "Transfer"}
            </button>
          </div>
        </div>

        {/* RESULT BOX */}
        {status !== "idle" && !isBeastModeOpen && !isBulkTransferOpen && (
          <div className="w-full max-w-2xl mt-6 z-10 relative">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-md overflow-hidden">
              {status === "checking" && (
                <div className="px-6 py-4 text-sm text-zinc-500">
                  Checking domain availability...
                </div>
              )}

              {status === "done" &&
                results.map((item) => (
                  <div
                    key={item.domain}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 py-5 border-b border-zinc-200 last:border-b-0 gap-2 min-h-[70px]"
                  >
                    <span className="text-zinc-600 font-medium break-all text-left">
                      {item.domain}
                    </span>

                    <span
                      className={`font-semibold whitespace-nowrap sm:ml-4 text-left sm:text-right ${
                        item.status === "available"
                          ? "text-green-600"
                          : item.status === "taken"
                          ? "text-red-500"
                          : "text-zinc-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* MODALS RENDERED HERE (They will cover the screen and blur everything behind them) */}
      {isBulkTransferOpen && <BulkTransferModal />}
      {isBeastModeOpen && <BeastModePanel />}
      
    </div>
  )
};

export default Search;

