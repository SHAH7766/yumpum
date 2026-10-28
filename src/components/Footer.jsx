import React, { useState, useEffect } from 'react';
import { ArrowUp, MapPin, Phone, MessageCircle, Heart } from 'lucide-react';
import { siteInfo, phones, locations } from '../data/siteData';
import { useLang } from '../context/LangContext';
import { useScrollDirection } from '../hooks/useScrollDirection';

export const Footer = () => {
  const { t } = useLang();
  const { scrollProgress } = useScrollDirection();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setShowScrollTop(scrollProgress > 0.2);
  }, [scrollProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-[#FFF8EC] pt-16 pb-24 px-4 lg:px-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Col */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#E8262B] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
              YP
            </div>
            <div>
              <span className="text-3xl font-black tracking-wider uppercase text-[#E8262B]">
                {siteInfo.name}
              </span>
              <span className="block text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                {siteInfo.tagline}
              </span>
            </div>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {siteInfo.about}
          </p>
          <div className="flex items-center space-x-3 pt-2">
            <span className="text-xs bg-[#FFC929]/20 text-[#FFC929] px-3 py-1 rounded-full font-bold">
              ⭐ {siteInfo.googleRating} Google Rating ({siteInfo.googleReviewsCount} Reviews)
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-black uppercase text-[#FFC929] tracking-wider">
            {t("Quick Links", "فوری لنکس")}
          </h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            {['Deals', 'Menu', 'Build Pizza', 'Party / Daig', 'Why Us', 'Reviews', 'Contact'].map((link, idx) => {
              const href = `#${link.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-')}`;
              return (
                <li key={idx}>
                  <a href={href} className="hover:text-[#E8262B] transition">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Locations */}
        <div className="space-y-4">
          <h3 className="text-lg font-black uppercase text-[#FFC929] tracking-wider">
            {t("Our Locations", "ہماری شاخیں")}
          </h3>
          <div className="space-y-3 text-sm text-neutral-400">
            {locations.map((loc) => (
              <div key={loc.id} className="space-y-1">
                <span className="block font-bold text-white">{loc.name}</span>
                <p className="text-xs">{loc.address}</p>
              </div>
            ))}
            <p className="text-xs font-mono text-[#FFC929] pt-2">Hours: {siteInfo.hoursDisplay}</p>
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="space-y-4">
          <h3 className="text-lg font-black uppercase text-[#FFC929] tracking-wider">
            {t("Contact & Orders", "رابطہ اور آرڈرز")}
          </h3>
          <div className="space-y-2">
            {phones.map((p, idx) => (
              <a
                key={idx}
                href={p.type === 'whatsapp' ? `https://wa.me/923268414405` : `tel:${p.intl}`}
                className="flex items-center justify-between bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl text-xs font-mono transition"
              >
                <span className="text-neutral-400">{p.label}</span>
                <span className="text-white font-bold">{p.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
        <p>© {new Date().getFullYear()} YuM PuM Shahdara Lahore. All rights reserved.</p>
        <p className="flex items-center space-x-1 mt-4 md:mt-0">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#E8262B] fill-current" />
          <span>for authentic taste lovers</span>
        </p>
      </div>

      {/* Back to Top Ring */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-4 md:bottom-8 md:right-24 z-30 w-12 h-12 rounded-full bg-[#E8262B] text-white flex items-center justify-center shadow-2xl transition hover:scale-110 active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
          {/* Circular Progress SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-white/30"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#FFC929]"
              strokeDasharray={`${scrollProgress * 100}, 100`}
              strokeWidth="3"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </button>
      )}
    </footer>
  );
};
