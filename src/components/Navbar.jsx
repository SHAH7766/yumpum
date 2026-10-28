import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Phone, Menu as MenuIcon, X, Sun, Moon, MapPin, Globe } from 'lucide-react';
import { siteInfo, phones } from '../data/siteData';
import { useCart } from '../context/CartContext';
import { useColorMode } from '../context/ColorModeContext';
import { useLang } from '../context/LangContext';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useOpenNow } from '../hooks/useOpenNow';

export const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { isDarkMode, toggleColorMode } = useColorMode();
  const { scrollDirection, scrollY } = useScrollDirection();
  const { isOpen, statusText } = useOpenNow();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Deals", href: "#deals" },
    { name: "Menu", href: "#menu" },
    { name: "Party / Daig", href: "#daig" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const hidden = scrollDirection === 'down' && scrollY > 120;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Announcement Bar */}
        <div className="bg-[#E8262B] text-[#FFF8EC] text-xs md:text-sm py-1.5 px-4 font-semibold flex items-center justify-center md:justify-between shadow-inner">
          <div className="flex items-center space-x-4 overflow-hidden whitespace-nowrap">
            <span className="flex items-center space-x-1">
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
              <span>{statusText}</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">Min. Delivery Order: Rs. {siteInfo.minDeliveryOrder}</span>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`backdrop-blur-md px-4 lg:px-8 py-3 transition-colors duration-300 border-b ${
            isDarkMode
              ? 'bg-[#141414]/90 border-white/10 text-white'
              : 'bg-[#FFF8EC]/90 border-black/10 text-[#141414]'
          } shadow-lg flex items-center justify-between`}
        >
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center space-x-2 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#E8262B] rounded-2xl flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg group-hover:rotate-12 transition">
              YP
            </div>
            <div>
              <span className="text-lg sm:text-2xl font-black tracking-wider uppercase text-[#E8262B] leading-tight">
                YuM PuM
              </span>
              <span className="hidden sm:block text-[9px] uppercase tracking-widest opacity-80 font-semibold">
                BBQ & Fast Food
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center space-x-6 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#E8262B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8262B] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5">
            {/* Call Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCallDropdownOpen(!callDropdownOpen)}
                className="flex items-center space-x-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 transition text-xs font-bold"
                aria-label="Call options"
              >
                <Phone className="w-3.5 h-3.5 text-[#E8262B]" />
                <span className="hidden md:inline">Call</span>
              </button>

              <AnimatePresence>
                {callDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-[#1f2028] shadow-2xl border border-black/10 dark:border-white/10 p-2 z-50"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 px-3 py-1">
                      Call & WhatsApp Lines
                    </div>
                    {phones.map((p, i) => (
                      <a
                        key={i}
                        href={p.type === 'whatsapp' ? `https://wa.me/923268414405` : `tel:${p.intl}`}
                        className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#E8262B]/10 hover:text-[#E8262B] transition text-xs font-semibold"
                        onClick={() => setCallDropdownOpen(false)}
                      >
                        <span>{p.label}</span>
                        <span className="font-mono">{p.number}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleColorMode}
              aria-label="Toggle theme"
              className="p-1.5 sm:p-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 transition text-neutral-700 dark:text-neutral-200"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-[#FFC929]" /> : <Moon className="w-4 h-4 text-[#141414]" />}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
              className="relative flex items-center space-x-1.5 bg-[#E8262B] hover:bg-[#d01f24] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold shadow-lg transition active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden md:inline">Cart</span>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-[#FFC929] text-black font-black text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mobile Menu"
              className="xl:hidden p-1.5 sm:p-2 rounded-xl bg-black/5 dark:bg-white/10 text-neutral-700 dark:text-neutral-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-[#E8262B] text-white flex flex-col justify-between p-8 pt-28 overflow-y-auto"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFC929]">
                Navigation
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl sm:text-2xl font-black uppercase tracking-wide hover:text-[#FFC929] transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 flex flex-col space-y-4">
              <div className="text-sm font-semibold">
                Call us anytime:
              </div>
              <div className="flex flex-col space-y-2">
                {phones.map((p, i) => (
                  <a
                    key={i}
                    href={p.type === 'whatsapp' ? `https://wa.me/923268414405` : `tel:${p.intl}`}
                    className="flex items-center justify-between bg-black/20 px-4 py-3 rounded-2xl font-mono text-sm font-bold"
                  >
                    <span>{p.label}</span>
                    <span className="text-[#FFC929]">{p.number}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
