import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Plus, Minus, Flame, Sparkles } from 'lucide-react';
import { menuCategories, menuItems } from '../data/siteData';
import { useCart } from '../context/CartContext';
import { useLang } from '../context/LangContext';

export const MenuSection = () => {
  const { addToCart } = useCart();
  const { t } = useLang();

  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortByPrice, setSortByPrice] = useState('default'); // 'default' | 'asc' | 'desc'
  const [selectedVariants, setSelectedVariants] = useState({});
  const [quantities, setQuantities] = useState({});

  const handleVariantChange = (itemId, variantKey, variantLabel, price) => {
    setSelectedVariants(prev => ({
      ...prev,
      [itemId]: { id: variantKey, label: variantLabel, price }
    }));
  };

  const handleQtyChange = (itemId, delta) => {
    setQuantities(prev => {
      const current = prev[itemId] || 1;
      const next = current + delta;
      return { ...prev, [itemId]: next > 0 ? next : 1 };
    });
  };

  // Filter items
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description?.toLowerCase().includes(searchQuery.toLowerCase());
    if (searchQuery.trim()) return matchesSearch;
    return matchesCategory;
  }).sort((a, b) => {
    if (sortByPrice === 'default') return 0;
    const priceA = Object.values(a.prices)[0] || 0;
    const priceB = Object.values(b.prices)[0] || 0;
    return sortByPrice === 'asc' ? priceA - priceB : priceB - priceA;
  });

  return (
    <section id="menu" className="py-20 px-4 lg:px-12 bg-white dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1 bg-[#FFC929]/20 text-[#FFC929] px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>{t("Explore Culinary Perfection", "شاندار مینو")}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {t("Interactive Menu", "انٹرایکٹو مینو")}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto text-sm">
            Freshly prepared pizzas, sizzling BBQ, authentic karahi, juices, and shakes.
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder={t("Search menu items (e.g. Malai Boti, Karahi)...", "مینو میں تلاش کریں...")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-100 dark:bg-[#1f2028] pl-11 pr-4 py-3 rounded-2xl text-sm font-medium border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E8262B]"
            />
          </div>

          <div className="flex items-center space-x-3 w-full md:w-auto">
            <select
              value={sortByPrice}
              onChange={(e) => setSortByPrice(e.target.value)}
              className="w-full md:w-auto bg-neutral-100 dark:bg-[#1f2028] px-4 py-3 rounded-2xl text-sm font-semibold border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E8262B]"
            >
              <option value="default">{t("Sort by: Default", "ترتیب: ڈیفالٹ")}</option>
              <option value="asc">{t("Price: Low to High", "قیمت: کم سے زیادہ")}</option>
              <option value="desc">{t("Price: High to Low", "قیمت: زیادہ سے کم")}</option>
            </select>
          </div>
        </div>

        {/* Category Sticky Tabs */}
        {!searchQuery && (
          <div className="flex overflow-x-auto space-x-2 pb-4 mb-12 scrollbar-none">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition ${
                  activeCategory === cat
                    ? 'bg-[#E8262B] text-white shadow-lg scale-105'
                    : 'bg-neutral-100 dark:bg-[#1f2028] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const priceEntries = Object.entries(item.prices);
            const defaultVariantKey = priceEntries[0][0];
            const defaultVariantLabel = priceEntries[0][0].toUpperCase();
            const defaultVariantPrice = priceEntries[0][1];

            const currentVariant = selectedVariants[item.id] || {
              id: defaultVariantKey,
              label: defaultVariantLabel,
              price: defaultVariantPrice
            };

            const qty = quantities[item.id] || 1;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-[#1f2028] rounded-3xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5 flex flex-col justify-between group"
              >
                {/* Item Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      🍽️
                    </div>
                  )}
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-[#FFC929] text-black font-black text-xs px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                      <Flame className="w-3 h-3 text-[#E8262B]" />
                      <span>Popular</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white font-mono font-bold text-sm px-4 py-1.5 rounded-2xl">
                    Rs. {currentVariant.price * qty}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-black uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {item.description || "Authentic Lahori recipe prepared with premium fresh ingredients."}
                    </p>
                  </div>

                  {/* Variant Selector Pills */}
                  {priceEntries.length > 1 && (
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-neutral-400">Size / Variant:</label>
                      <div className="flex flex-wrap gap-1.5">
                        {priceEntries.map(([vKey, vPrice]) => (
                          <button
                            key={vKey}
                            onClick={() => handleVariantChange(item.id, vKey, vKey.toUpperCase(), vPrice)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition ${
                              currentVariant.id === vKey
                                ? 'bg-[#E8262B] text-white shadow-md'
                                : 'bg-neutral-100 dark:bg-black/30 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200'
                            }`}
                          >
                            {vKey} (Rs. {vPrice})
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity Stepper & Add Button */}
                  <div className="flex items-center space-x-3 pt-2">
                    <div className="flex items-center space-x-2 bg-neutral-100 dark:bg-black/40 px-3 py-2 rounded-2xl">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        className="text-neutral-600 dark:text-neutral-300 hover:text-[#E8262B]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono text-xs font-bold w-4 text-center">{qty}</span>
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="text-neutral-600 dark:text-neutral-300 hover:text-[#E8262B]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => addToCart(item, currentVariant, qty, currentVariant.price)}
                      className="flex-1 bg-[#E8262B] hover:bg-[#d01f24] text-white font-black py-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg transition active:scale-98 text-xs uppercase tracking-wider"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
