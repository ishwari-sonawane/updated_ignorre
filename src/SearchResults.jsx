import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiShoppingCart, FiArrowLeft } from "react-icons/fi";
import { useMemo } from "react";
import Footer from "./Footer.jsx";

export default function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, query } = location.state || {};

  const availableCount = useMemo(
    () => (results || []).filter((r) => r.available).length,
    [results]
  );

  if (!results) {
    return (
      <>
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-zinc-400 text-lg">No search results found.</p>
            <button
              onClick={() => navigate("/advanced-search")}
              className="mt-4 px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all cursor-pointer"
            >
              Back to Advanced Search
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-zinc-50">
        <div className="max-w-[1000px] mx-auto px-4 py-8">
          <button
            onClick={() => navigate("/advanced-search")}
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors mb-6 cursor-pointer"
          >
            <FiArrowLeft size={16} />
            Back to Advanced Search
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[20px] shadow-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 25px 80px rgba(0,0,0,0.12), 0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <div className="px-8 py-6 border-b border-zinc-100 flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-xl font-bold text-zinc-950">
                  Search Results
                </h2>
                <p className="text-sm text-zinc-500 mt-0.5">
                  {query && (
                    <>
                      for &ldquo;{query}&rdquo; &mdash;{" "}
                    </>
                  )}
                  {results.length} domain{results.length !== 1 ? "s" : ""} found
                  {availableCount > 0 && (
                    <span className="text-zinc-400">
                      {" "}
                      ({availableCount} available)
                    </span>
                  )}
                </p>
              </div>
            </div>

            {results.length === 0 ? (
              <div className="px-8 py-16 text-center">
                <p className="text-zinc-400 text-lg">
                  No domains match your filters.
                </p>
                <p className="text-zinc-400 text-sm mt-1">
                  Try adjusting your search terms or filter criteria.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-zinc-100">
                {results.map((item, idx) => (
                  <motion.div
                    key={`${item.domain}-${idx}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02, duration: 0.2 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-8 py-5 gap-3 hover:bg-zinc-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-zinc-950 font-medium break-all">
                        {item.domain}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full flex-shrink-0 ${
                          item.available
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-600 border border-red-200"
                        }`}
                      >
                        {item.available ? "Available" : "Taken"}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      {item.available && item.price && (
                        <span className="text-zinc-500 text-sm whitespace-nowrap">
                          ${item.price.toFixed(2)}/yr
                        </span>
                      )}
                      {item.available ? (
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-xl hover:bg-zinc-800 transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
                        >
                          <FiShoppingCart size={14} />
                          Register
                        </motion.button>
                      ) : (
                        <button className="px-4 py-2 text-sm font-medium text-zinc-400 border border-zinc-200 rounded-xl cursor-not-allowed whitespace-nowrap">
                          Unavailable
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
