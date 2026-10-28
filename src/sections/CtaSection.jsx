import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export const CtaSection = () => {
  return (
    <section className="py-20 px-4 lg:px-12 bg-gradient-to-r from-[#E8262B] to-[#FFC929] text-[#141414] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
        <div className="inline-flex items-center space-x-1 bg-black text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-lg">
          <Sparkles className="w-4 h-4 text-[#FFC929]" />
          <span>Open Until 3:00 AM Daily</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white drop-shadow-md">
          Hungry? Let's get you sorted.
        </h2>

        <p className="text-lg md:text-xl text-neutral-900 font-bold max-w-2xl mx-auto">
          Order fresh wood-fired pizzas, juicy BBQ, or authentic karahi right now on WhatsApp.
        </p>

        <div className="pt-4 flex justify-center">
          <a
            href="https://wa.me/923268414405?text=Hi%20YuM%20PuM,%20I%20want%20to%20order%20now!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141414] hover:bg-neutral-900 text-white font-black px-10 py-5 rounded-2xl shadow-2xl flex items-center space-x-3 transform hover:scale-105 active:scale-95 transition text-lg"
          >
            <MessageCircle className="w-6 h-6 text-green-400" />
            <span>Order on WhatsApp (0326-8414405)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
