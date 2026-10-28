import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Copy, Check, ExternalLink, Globe } from 'lucide-react';
import { locations, phones, siteInfo } from '../data/siteData';
import { useLang } from '../context/LangContext';
import { useOpenNow } from '../hooks/useOpenNow';

export const ContactSection = () => {
  const { t } = useLang();
  const { isOpen, statusText } = useOpenNow();
  const [activeLocIndex, setActiveLocIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const activeLoc = locations[activeLocIndex];

  const handleCopy = (number, idx) => {
    navigator.clipboard.writeText(number);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 lg:px-12 bg-white dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1 bg-[#E8262B]/10 text-[#E8262B] px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>{t("Visit Or Call Us", "ملاقات یا رابطہ")}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            {t("Contact & Locations", "رابطہ اور شاخیں")}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto text-sm">
            Two fully equipped branches in Shahdara Lahore, open daily from 11:00 AM to 3:00 AM.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-neutral-100 dark:bg-[#1f2028] rounded-2xl">
            {locations.map((loc, idx) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocIndex(idx)}
                className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition ${
                  activeLocIndex === idx
                    ? 'bg-[#E8262B] text-white shadow-lg'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {loc.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Location Details & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-neutral-100 dark:bg-[#1f2028] p-8 rounded-3xl shadow-xl border border-black/5 dark:border-white/5 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase bg-[#FFC929] text-black font-bold px-3 py-1 rounded-full">
                  {statusText}
                </span>
                <span className="text-xs font-bold text-neutral-400">Hours: {activeLoc.hours}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black uppercase">{activeLoc.name}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {activeLoc.address}
                </p>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <a
                  href={activeLoc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E8262B] hover:bg-[#d01f24] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg transition"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-6 h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 relative">
            <iframe
              title={activeLoc.name}
              src={activeLoc.mapEmbedUrl}
              className="w-full h-full border-0 filter dark:invert dark:hue-rotate-180 dark:contrast-125"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>

        {/* Three Glass Phone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {phones.map((p, idx) => {
            const isCopied = copiedIndex === idx;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-neutral-100 dark:bg-[#1f2028] p-8 rounded-3xl shadow-xl border border-black/5 dark:border-white/5 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-[#E8262B] font-bold">{p.label}</span>
                  <h3 className="text-2xl font-mono font-black">{p.number}</h3>
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href={p.type === 'whatsapp' ? `https://wa.me/923268414405` : `tel:${p.intl}`}
                    className="flex-1 bg-[#E8262B] hover:bg-[#d01f24] text-white py-3 rounded-2xl font-black text-xs uppercase text-center shadow-lg transition flex items-center justify-center space-x-2"
                  >
                    {p.type === 'whatsapp' ? <MessageCircle className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
                    <span>{p.type === 'whatsapp' ? 'Chat' : 'Call'}</span>
                  </a>

                  <button
                    onClick={() => handleCopy(p.number, idx)}
                    className="p-3 rounded-2xl bg-white dark:bg-black/40 hover:bg-neutral-200 transition text-neutral-700 dark:text-neutral-300 border border-black/10 dark:border-white/10"
                    title="Copy number"
                  >
                    {isCopied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
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
