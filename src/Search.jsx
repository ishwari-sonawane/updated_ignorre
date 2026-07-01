import React from 'react'
import { useEffect, useState, useRef } from "react";

const Search = () => {

 const [query, setQuery] = useState("");
  const suggestions = [
    { name: `${query || "yourname"}.com`, status: "available" },
    { name: `${query || "yourname"}.in`, status: "popular" },
    { name: `${query || "yourname"}.ai`, status: "premium" },
  ];

  const getColor = (status) => {
    if (status === "available") return "text-green-600";
    if (status === "popular") return "text-yellow-500";
    return "text-red-500";
  };

  useEffect(() => {
    if (!query.trim()) {
      setStatus("idle");
      setResults([]);
      return;
    }
  
    const timer = setTimeout(() => {
      setStatus("checking");
  
      const extensions = [
        ".com",
        ".net",
        ".org",
        ".io",
  
      ];
  
      const fakeResults = extensions.map((ext) => ({
        domain: `${query}${ext}`,
        status: Math.random() > 0.5 ? "available" : "taken",
      }));
  
      setResults(fakeResults);
      setStatus("done");
    }, 500);
  
    return () => clearTimeout(timer);
  }, [query]);
  //   const [query, setQuery] = useState("");
    const [status, setStatus] = useState("idle");
    const [results, setResults] = useState([]);
    const [placeholder, setPlaceholder] = useState(
      "Register a domain name to start"
    );
    const resultsRef = useRef(null);

  return (
    <div>
        <div className="mt-8 flex justify-center">
           <div className="w-full max-w-4xl flex flex-col items-center">
     
             {/* SEARCH BOX */}
             <div className="w-full max-w-2xl flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden z-10 relative">
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
                 placeholder="Register a domain name to start"
                 className="flex-1 px-6 py-5 text-sm outline-none min-w-0"
               />
     
               <button className="bg-red-600 text-white px-10 py-5 text-sm font-semibold whitespace-nowrap">
                 Search
               </button>
             </div>
     
             {/* RESULT BOX */}
             {status !== "idle" && (
               <div className="w-full max-w-2xl mt-6">
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
                         {/* domain name */}
                         <span className="text-zinc-600 font-medium break-all text-left">
                           {item.domain}
                         </span>
     
                         {/* status */}
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
         </div>
    </div>
  )
}

export default Search
