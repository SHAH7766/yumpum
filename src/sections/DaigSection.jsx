import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Flame } from 'lucide-react';
import { useLang } from '../context/LangContext';

const daigItems = [
  {
    name: "Chicken Korma (10kg)",
    price: "Rs. 15,000",
    desc: "Authentic wedding style chicken korma cooked in large bulk daig.",
    image: "/images/chicken-korma.jpg"
  },
  {
    name: "Chicken Korma (12kg)",
    price: "Rs. 17,000",
    desc: "Extra large gathering chicken korma daig.",
    image: "/images/chicken-korma.jpg"
  },
  {
    name: "Chicken Biryani (Rice 10kg + Chicken 8kg)",
    price: "Rs. 17,000",
    desc: "Massive party daig of aromatic chicken biryani with tender meat.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Chicken Biryani (Rice 12kg + Chicken 8kg)",
    price: "Rs. 18,000",
    desc: "Extra rice party daig for large events, weddings, and parties.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  }
];

export const DaigSection = () => {
  const { t } = useLang();

  return (
    <section id="daig" className="py-20 px-4 lg:px-12 bg-white dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1 bg-[#FFC929]/20 text-[#FFC929] px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider">
            <Flame className="w-4 h-4" />
            <span>{t("Bulk Orders & Weddings", "شادیوں اور تقریبات کے لیے")}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {t("Daig on Demand", "دیک آن ڈیمانڈ")}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto text-sm">
            Traditional Lahori bulk cooking for your parties, family gatherings, and weddings. Book directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {daigItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-neutral-100 dark:bg-[#1f2028] rounded-3xl overflow-hidden shadow-xl border border-black/5 dark:border-white/5 flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#FFC929] text-black font-black text-xs px-3 py-1.5 rounded-2xl shadow-lg">
                  {item.price}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-black uppercase">{item.name}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                </div>

                <a
                  href={`https://wa.me/923268414405?text=Hi%20YuM%20PuM,%20I%20want%20to%20book%20a%20party%20order%20for%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#E8262B] hover:bg-[#d01f24] text-white font-black py-3 rounded-2xl flex items-center justify-center space-x-2 shadow-lg transition text-xs uppercase"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
