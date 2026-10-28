import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Heart, Sparkles } from 'lucide-react';
import { galleryItems, siteInfo } from '../data/siteData';
import { useLang } from '../context/LangContext';

export const GallerySection = () => {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState('All');
  const [likes, setLikes] = useState({});
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'BBQ', 'Pizza', 'Karahi', 'Fast Food', 'Drinks', 'Pakistani'];

  const filteredGallery = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="gallery" className="py-20 px-4 lg:px-12 bg-white dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1 bg-[#FFC929]/20 text-[#FFC929] px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>{t("Visual Feast", "تصویری گیلری")}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {t("Food Gallery", "فوڈ گیلری")}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto text-sm">
            A glimpse into our fiery BBQ, loaded pizzas, and sizzling woks. Follow us on Instagram @yumpum.official.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex overflow-x-auto space-x-2 pb-4 mb-10 scrollbar-none justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition ${
                activeFilter === cat
                  ? 'bg-[#E8262B] text-white shadow-lg'
                  : 'bg-neutral-100 dark:bg-[#1f2028] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item) => {
            const isLiked = likes[item.id];
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setLightboxImage(item.image)}
                className="relative h-72 rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase bg-[#E8262B] text-white px-3 py-1 rounded-full font-bold">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-black text-white mt-1">{item.title}</h3>
                  </div>

                  <button
                    onClick={(e) => toggleLike(item.id, e)}
                    className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition"
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-white'}`} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Instagram CTA Card */}
        <div className="mt-16 bg-gradient-to-r from-[#E8262B] to-[#FFC929] rounded-3xl p-8 text-neutral-900 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="space-y-2 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-black uppercase tracking-tight text-white">Join Our Community</h3>
            <p className="text-sm font-semibold text-white/90">Tag us in your food stories @yumpum.official to get featured!</p>
          </div>
          <a
            href={siteInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white hover:bg-neutral-800 px-8 py-4 rounded-2xl font-black uppercase tracking-wider flex items-center space-x-2 shadow-2xl transition"
          >
            <Globe className="w-5 h-5 text-[#FFC929]" />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img src={lightboxImage} alt="Fullscreen preview" className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl object-contain" />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl hover:bg-red-500 transition"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
