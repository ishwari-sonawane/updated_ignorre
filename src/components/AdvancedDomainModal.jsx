import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSearch, FiCheck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const TLD_GROUPS = [
  { label: 'Popular', tlds: ['.com', '.net', '.org', '.ai', '.io'] },
  { label: 'Business', tlds: ['.biz', '.company', '.inc'] },
  { label: 'Technology', tlds: ['.dev', '.tech', '.app'] },
  { label: 'Country', tlds: ['.in', '.us', '.uk', '.ca', '.au'] },
  { label: 'Education', tlds: ['.edu'] },
  { label: 'Finance', tlds: ['.finance', '.bank'] },
];

const SORT_OPTIONS = [
  'Relevance',
  'Lowest Price',
  'Highest Price',
  'Alphabetical',
  'Most Popular',
];

const DOMAIN_OPTIONS = [
  'Include Premium Domains',
  'Hide Unavailable',
  'Allow Domain Hacks',
  'Allow Prefix/Suffix',
  'Plural Variations',
  'Remove Last Vowel',
];

const CHAR_TYPES = ['Letters', 'Numbers', 'Hyphens'];

const PREFIXES = ['get', 'my', 'go', 'try', 'use', 'the', 'app', 'hi', 'hey', 'lets', 'we', 'team'];
const SUFFIXES = ['hub', 'app', 'io', 'pro', 'shop', 'online', 'now', 'co', 'live', 'cloud', 'tech', 'site'];

const TLD_PRICES = {
  '.com': 9.99, '.net': 11.99, '.org': 12.99, '.ai': 49.99, '.io': 29.99,
  '.biz': 10.99, '.company': 24.99, '.inc': 34.99,
  '.dev': 14.99, '.tech': 15.99, '.app': 13.99,
  '.in': 5.99, '.us': 8.99, '.uk': 7.99, '.ca': 11.99, '.au': 12.99,
  '.edu': 24.99,
  '.finance': 39.99, '.bank': 44.99,
};

function useFocusTrap(modalRef, active) {
  useEffect(() => {
    if (!active || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusableElements = modal.querySelectorAll(focusableSelector);
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    first?.focus();

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    modal.addEventListener('keydown', handleKeyDown);
    return () => modal.removeEventListener('keydown', handleKeyDown);
  }, [active, modalRef]);
}

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <motion.label
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <div
        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
          checked
            ? 'bg-red-600 border-red-600'
            : 'border-zinc-300 group-hover:border-zinc-400'
        }`}
      >
        {checked && <FiCheck className="text-white" size={13} />}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-sm text-zinc-700 select-none">{label}</span>
    </motion.label>
  );
}

function TLDSelector({ selected, onToggle, search, onSearchChange, sortBy }) {
  const sortFn = useCallback((a, b) => {
    if (sortBy === 'Lowest Price') return TLD_PRICES[a] - TLD_PRICES[b];
    if (sortBy === 'Highest Price') return TLD_PRICES[b] - TLD_PRICES[a];
    if (sortBy === 'Alphabetical') return a.localeCompare(b);
    return 0;
  }, [sortBy]);

  const filtered = TLD_GROUPS.map((group) => ({
    ...group,
    tlds: group.tlds.filter((t) =>
      t.toLowerCase().includes(search.toLowerCase())
    ).sort(sortFn),
  })).filter((g) => g.tlds.length > 0);

  return (
    <div>
      <div className="relative mb-4">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={15} />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search TLD..."
          className="w-full pl-9 pr-3 py-2.5 text-sm border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600/40 transition-all"
        />
      </div>

      <div className="space-y-4 max-h-[320px] overflow-y-auto pr-1 no-scrollbar">
        {filtered.map((group) => (
          <div key={group.label}>
            <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.tlds.map((tld) => {
                const isSelected = selected.includes(tld);
                return (
                  <motion.button
                    key={tld}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onToggle(tld)}
                    className={`text-sm px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
                    }`}
                  >
                    <span>{tld}</span>
                    <span className={`ml-1.5 text-[11px] ${isSelected ? 'text-red-200' : 'text-zinc-400'}`}>
                      ${TLD_PRICES[tld].toFixed(2)}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

function AdvancedSearchForm({ onClose }) {
  const navigate = useNavigate();
  const [domainsText, setDomainsText] = useState('');
  const [selectedTLDs, setSelectedTLDs] = useState(['.com', '.net', '.org']);
  const [tldSearch, setTldSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [domainOptions, setDomainOptions] = useState({
    'Include Premium Domains': false,
    'Hide Unavailable': true,
    'Allow Domain Hacks': false,
    'Allow Prefix/Suffix': false,
    'Plural Variations': false,
    'Remove Last Vowel': false,
  });
  const [domainLength, setDomainLength] = useState(15);
  const [charTypes, setCharTypes] = useState({
    Letters: true,
    Numbers: false,
    Hyphens: false,
  });
  const [sortBy, setSortBy] = useState('Relevance');
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);

  const [selectedPrefixes, setSelectedPrefixes] = useState([]);
  const [selectedSuffixes, setSelectedSuffixes] = useState([]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTLD = useCallback((tld) => {
    setSelectedTLDs((prev) =>
      prev.includes(tld) ? prev.filter((t) => t !== tld) : [...prev, tld]
    );
  }, []);

  const toggleDomainOption = useCallback((label) => {
    setDomainOptions((prev) => ({ ...prev, [label]: !prev[label] }));
  }, []);

  const toggleCharType = useCallback((label) => {
    setCharTypes((prev) => ({ ...prev, [label]: !prev[label] }));
  }, []);

  const togglePrefix = useCallback((p) => {
    setSelectedPrefixes((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  }, []);

  const toggleSuffix = useCallback((s) => {
    setSelectedSuffixes((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }, []);

  const resetFilters = useCallback(() => {
    setDomainsText('');
    setSelectedTLDs(['.com', '.net', '.org']);
    setMinPrice('');
    setMaxPrice('');
    setDomainOptions({
      'Include Premium Domains': false,
      'Hide Unavailable': true,
      'Allow Domain Hacks': false,
      'Allow Prefix/Suffix': false,
      'Plural Variations': false,
      'Remove Last Vowel': false,
    });
    setDomainLength(15);
    setCharTypes({ Letters: true, Numbers: false, Hyphens: false });
    setSortBy('Relevance');
    setSelectedPrefixes([]);
    setSelectedSuffixes([]);
  }, []);

  const handleClose = useCallback(() => {
    if (onClose) onClose();
    else navigate('/');
  }, [onClose, navigate]);

  const generateResults = useCallback(() => {
    const keywords = domainsText
      .split(/[\n,]+/)
      .map((k) => k.trim().toLowerCase().replace(/[^a-z0-9-]/g, ''))
      .filter((k) => k.length > 0);
    if (keywords.length === 0 || selectedTLDs.length === 0) return;

    setTimeout(() => {
      let expandedKeywords = [...keywords];
      if (domainOptions['Allow Prefix/Suffix']) {
        for (const p of selectedPrefixes) {
          expandedKeywords.push(...keywords.map((k) => `${p}${k}`));
        }
        for (const s of selectedSuffixes) {
          expandedKeywords.push(...keywords.map((k) => `${k}${s}`));
        }
      }

      if (charTypes.Numbers) {
        const numbered = [];
        for (const kw of expandedKeywords) {
          for (let i = 1; i <= 99; i++) {
            numbered.push(`${kw}${i}`);
          }
        }
        expandedKeywords.push(...numbered);
      }

      if (charTypes.Hyphens) {
        const hyphenated = [];
        for (const kw of expandedKeywords) {
          for (let pos = 2; pos < kw.length - 1; pos++) {
            hyphenated.push(`${kw.slice(0, pos)}-${kw.slice(pos)}`);
          }
        }
        expandedKeywords.push(...hyphenated);
      }

      const generated = [];
      for (const keyword of [...new Set(expandedKeywords)]) {
        for (const tld of selectedTLDs) {
          const fullDomain = `${keyword}${tld}`;

          const available = Math.random() > 0.3;
          const basePrice = TLD_PRICES[tld] || 14.99;
          const price = available ? Number((basePrice + Math.random() * 5).toFixed(2)) : null;

          generated.push({
            domain: fullDomain,
            available,
            price: price ? Number(price.toFixed(2)) : null,
            tld,
          });
        }
      }

      const sortMap = {
        Relevance: () => 0,
        'Lowest Price': (a, b) => (a.price ?? 999) - (b.price ?? 999),
        'Highest Price': (a, b) => (b.price ?? 0) - (a.price ?? 0),
        Alphabetical: (a, b) => a.domain.localeCompare(b.domain),
        'Most Popular': (a, b) => {
          const order = ['.com', '.net', '.org', '.io', '.ai', '.dev', '.app', '.tech'];
          return order.indexOf(a.tld) - order.indexOf(b.tld);
        },
      };
      generated.sort(sortMap[sortBy] || sortMap.Relevance);

      navigate('/search-results', { state: { results: generated, query: domainsText } });
    }, 400);
  }, [domainsText, selectedTLDs, domainLength, charTypes, domainOptions, minPrice, maxPrice, sortBy, selectedPrefixes, selectedSuffixes, navigate]);

  return (
    <>
      <div className="flex-shrink-0">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h2 className="text-2xl font-bold text-zinc-950">
              Advanced Domain Search
            </h2>
            <p className="text-zinc-500 text-sm mt-1">
              Search multiple domains with advanced filters and instantly
              discover available names.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
            aria-label="Close"
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-all cursor-pointer flex-shrink-0"
          >
            <FiX size={22} />
          </motion.button>
        </div>

        <textarea
          value={domainsText}
          onChange={(e) => setDomainsText(e.target.value)}
          placeholder="Enter one or multiple domain names or keywords..."
          rows={3}
          className="w-full mt-5 p-4 text-sm border border-zinc-200 rounded-xl outline-none resize-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600/40 transition-all placeholder:text-zinc-400"
        />
      </div>

      <div className="flex-1 overflow-y-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-7">
            <div>
              <p className="text-sm font-semibold text-zinc-800 mb-3">
                Price Range
              </p>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="Min Price"
                  className="w-full px-4 py-2.5 text-sm border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600/40 transition-all"
                />
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="Max Price"
                  className="w-full px-4 py-2.5 text-sm border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600/40 transition-all"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-800 mb-3">
                Domain Options
              </p>
              <div className="space-y-3">
                {DOMAIN_OPTIONS.map((opt) => (
                  <FilterCheckbox
                    key={opt}
                    label={opt}
                    checked={domainOptions[opt]}
                    onChange={() => toggleDomainOption(opt)}
                  />
                ))}
              </div>

              <AnimatePresence>
                {domainOptions['Allow Prefix/Suffix'] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden mt-4 space-y-4"
                  >
                    <div>
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Prefixes
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {PREFIXES.map((p) => {
                          const active = selectedPrefixes.includes(p);
                          return (
                            <motion.button
                              key={p}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => togglePrefix(p)}
                              className={`text-xs px-2.5 py-1 rounded-lg border transition-all duration-200 cursor-pointer ${
                                active
                                  ? 'bg-red-600 text-white border-red-600'
                                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
                              }`}
                            >
                              {p}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        Suffixes
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {SUFFIXES.map((s) => {
                          const active = selectedSuffixes.includes(s);
                          return (
                            <motion.button
                              key={s}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => toggleSuffix(s)}
                              className={`text-xs px-2.5 py-1 rounded-lg border transition-all duration-200 cursor-pointer ${
                                active
                                  ? 'bg-red-600 text-white border-red-600'
                                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'
                              }`}
                            >
                              {s}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-800 mb-3">
                Domain Length
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xs text-zinc-400">1</span>
                <div className="flex-1 relative h-6 flex items-center">
                  <input
                    type="range"
                    min="1"
                    max="31"
                    value={domainLength}
                    onChange={(e) => setDomainLength(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-red-600
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-red-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-red-600 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0"
                  />
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-2 bg-red-600 rounded-full pointer-events-none"
                    style={{ width: `${(domainLength / 31) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-zinc-800 font-medium min-w-[30px] text-right">
                  {domainLength >= 31 ? '30+' : domainLength}
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-800 mb-3">
                Characters Allowed
              </p>
              <div className="flex gap-4">
                {CHAR_TYPES.map((ct) => (
                  <FilterCheckbox
                    key={ct}
                    label={ct}
                    checked={charTypes[ct]}
                    onChange={() => toggleCharType(ct)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-800 mb-3">
                Sort By
              </p>
              <div className="relative" ref={sortRef}>
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="w-full px-4 py-2.5 text-sm border border-zinc-200 rounded-xl outline-none text-left flex items-center justify-between bg-white hover:border-zinc-400 transition-all cursor-pointer"
                >
                  <span className="text-zinc-700">{sortBy}</span>
                  <motion.svg
                    animate={{ rotate: sortOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 text-zinc-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {sortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-white border border-zinc-200 rounded-xl shadow-lg z-10 overflow-hidden"
                    >
                      {SORT_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setSortBy(opt);
                            setSortOpen(false);
                          }}
                          className={`w-full px-4 py-2.5 text-sm text-left hover:bg-zinc-50 transition-colors cursor-pointer ${
                            sortBy === opt
                              ? 'text-red-600 font-medium'
                              : 'text-zinc-700'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-800 mb-3">
              TLD Selection
            </p>
            <TLDSelector
              selected={selectedTLDs}
              onToggle={toggleTLD}
              search={tldSearch}
              onSearchChange={setTldSearch}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 border-t border-zinc-100 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-zinc-500">
            Selected: <span className="font-semibold text-zinc-800">{selectedTLDs.length}</span> TLDs
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={resetFilters}
              className="px-5 py-2.5 text-sm font-medium text-zinc-600 border border-zinc-200 rounded-xl hover:bg-zinc-50 hover:border-zinc-400 transition-all cursor-pointer w-full sm:w-auto"
            >
              Reset Filters
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={generateResults}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-all cursor-pointer shadow-md w-full sm:w-auto"
            >
              Generate Results
            </motion.button>
          </div>
        </div>
      </div>


    </>
  );
}

export default function AdvancedDomainModal({ isOpen, onClose, mode = 'modal' }) {
  const modalRef = useRef(null);

  useFocusTrap(modalRef, mode === 'modal' && isOpen);

  useEffect(() => {
    if (mode !== 'modal') return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose, mode]);

  if (mode === 'page') {
    return (
      <div className="min-h-screen bg-zinc-50 py-8 px-4">
        <div className="max-w-[1000px] mx-auto rounded-[20px]  p-8 flex flex-col"
          // style={{
          //   boxShadow:
          //     '0 25px 80px rgba(0,0,0,0.12), 0 10px 30px rgba(0,0,0,0.05)',
          // }}
        >
          <AdvancedSearchForm onClose={onClose} />
        </div>
      </div>
    );
  }

  if (!isOpen) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Advanced Domain Search"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[1000px] max-h-[90vh] bg-white rounded-[20px] shadow-2xl flex flex-col overflow-hidden p-8"
        style={{
          boxShadow:
            '0 25px 80px rgba(0,0,0,0.2), 0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        <AdvancedSearchForm onClose={onClose} />
      </motion.div>
    </motion.div>,
    document.body
  );
}
