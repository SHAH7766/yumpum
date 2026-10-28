import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Flame } from 'lucide-react';
import { fastFoodDeals, pizzaFlavors } from '../data/siteData';
import { useCart } from '../context/CartContext';
import { useLang } from '../context/LangContext';

export const Deals = () => {
  const { addToCart } = useCart();
  const { t } = useLang();
  const [selectedFlavors, setSelectedFlavors] = useState({});

  const handleFlavorChange = (dealId, flavor) => {
    setSelectedFlavors(prev => ({ ...prev, [dealId]: flavor }));
  };

  const handleAddDeal = (deal) => {
    const chosenFlavor = deal.includesPizza ? (selectedFlavors[deal.id] || pizzaFlavors[0]) : null;
    addToCart(
      {
        id: deal.id,
        name: `${deal.name}: ${deal.contents}`,
        prices: { regular: deal.price },
        image: deal.image
      },
      { id: 'regular', label: 'Regular Deal', price: deal.price },
      1,
      deal.price,
      chosenFlavor
    );
  };

  return (
    <section id="deals" className="py-20 px-4 lg:px-12 bg-neutral-100 dark:bg-[#16171d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1 bg-[#E8262B]/10 text-[#E8262B] px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider">
            <Flame className="w-4 h-4" />
            <span>{t("Hot & Saving Offers", "خصوصی بچت آفرز")}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {t("Fast Food Deals", "فাস্ট فوڈ ڈیلز")}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto text-sm">
            Unbeatable bundle offers loaded with pizzas, burgers, fries, and drinks. Verified flyer prices.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fastFoodDeals.map((deal) => {
            const currentFlavor = selectedFlavors[deal.id] || pizzaFlavors[0];
            return (
              <motion.div
                key={deal.id}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-[#1f2028] rounded-3xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5 flex flex-col justify-between relative group"
              >
                {/* Sticker Price */}
                <div className="absolute top-4 right-4 z-10 bg-[#FFC929] text-black font-black text-base px-4 py-2 rounded-2xl shadow-lg rotate-3">
                  Rs. {deal.price}
                </div>

                <div className="relative h-52 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-mono uppercase bg-[#E8262B] text-white px-3 py-1 rounded-full font-bold">
                      {deal.name}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-base font-bold text-neutral-800 dark:text-neutral-200">
                      {deal.contents}
                    </p>

                    {/* Pizza Flavor Selector if Deal includes pizza */}
                    {deal.includesPizza && (
                      <div className="mt-4 space-y-1">
                        <label className="text-[11px] font-bold uppercase text-neutral-400">Select Pizza Flavor:</label>
                        <select
                          value={currentFlavor}
                          onChange={(e) => handleFlavorChange(deal.id, e.target.value)}
                          className="w-full bg-neutral-100 dark:bg-black/40 px-3 py-2 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E8262B]"
                        >
                          {pizzaFlavors.map(flavor => (
                            <option key={flavor} value={flavor}>{flavor}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddDeal(deal)}
                    className="w-full bg-[#E8262B] hover:bg-[#d01f24] text-white font-black py-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg transition active:scale-98"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Deal to Cart</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
