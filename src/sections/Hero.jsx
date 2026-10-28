import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, Star, Sparkles } from 'lucide-react';
import { siteInfo } from '../data/siteData';

const heroDishes = [
  { name: "Loaded Cheese Pizza", image: "/images/hero-pizza.jpg", tag: "Wood-fired crust" },
  { name: "Juicy Malai Boti", image: "/images/hero-malai-boti.jpg", tag: "Charcoal smoked" },
  { name: "Spicy Chicken Karahi", image: "/images/hero-karahi.jpg", tag: "Pure desi ghee" },
  { name: "Crispy Zinger Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80", tag: "Extra crunchy fillet" },
  { name: "Refreshing Mint Margarita", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80", tag: "Ice cold & fresh" }
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroDishes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-4 lg:px-12 flex items-center justify-center overflow-hidden bg-[#141414] text-white">
      {/* Background glow and embers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E8262B]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFC929]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Text Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Rating Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <div className="flex text-[#FFC929]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold">{siteInfo.googleRating} ★ · {siteInfo.googleReviewsCount} Google Reviews</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none">
            Hot. Fresh. <span className="text-[#E8262B] underline decoration-[#FFC929]">Yum.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 max-w-xl mx-auto lg:mx-0 font-medium">
            {siteInfo.tagline}. Serving Shahdara Lahore with legendary BBQ, wood-fired pizzas, authentic karahi, and midnight cravings until 3:00 AM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a
              href="https://wa.me/923268414405?text=Hi%20YuM%20PuM,%20I%20want%20to%20order%20from%20the%20website!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#E8262B] hover:bg-[#d01f24] text-white font-black px-8 py-4 rounded-2xl shadow-2xl flex items-center justify-center space-x-3 transition transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#menu"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center transition"
            >
              View Full Menu
            </a>
          </div>
        </div>

        {/* Right Rotating Dish Showcase */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-[#E8262B]/40 via-[#141414] to-[#FFC929]/40 p-3 flex items-center justify-center shadow-2xl border-2 border-[#FFC929]/30 ring-4 ring-[#E8262B]/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: -5 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl flex items-center justify-center"
              >
                <img
                  src={heroDishes[currentIndex].image}
                  alt={heroDishes[currentIndex].name}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end items-center pb-12 px-6 text-center">
                  <span className="text-xs font-mono text-[#FFC929] uppercase font-extrabold tracking-widest bg-black/60 px-3 py-1 rounded-full border border-[#FFC929]/30 backdrop-blur-md mb-2 shadow-md">
                    {heroDishes[currentIndex].tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white drop-shadow-xl max-w-[280px]">
                    {heroDishes[currentIndex].name}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicator Dots */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              {heroDishes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-6 bg-[#FFC929]' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Floating Sparkle Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FFC929] to-[#ffa500] text-black font-black text-xs px-4 py-2 rounded-2xl shadow-2xl flex items-center space-x-1.5 border border-white/20 animate-bounce">
              <Sparkles className="w-4 h-4" />
              <span>Open till 3 AM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
