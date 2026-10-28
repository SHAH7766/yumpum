import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { phones } from '../data/siteData';
import { useCart } from '../context/CartContext';

export const MobileBottomBar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [callSheetOpen, setCallSheetOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141414]/95 backdrop-blur-md border-t border-white/10 px-4 py-2 flex items-center justify-around shadow-2xl">
        {/* Call Sheet Trigger */}
        <button
          onClick={() => setCallSheetOpen(true)}
          className="flex flex-col items-center text-white/80 hover:text-[#FFC929] transition py-1"
        >
          <Phone className="w-5 h-5 text-[#FFC929] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/923268414405?text=Hi%20YuM%20PuM,%20I%20want%20to%20order!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-white/80 hover:text-green-400 transition py-1"
        >
          <MessageCircle className="w-5 h-5 text-green-400 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Cart Drawer Trigger */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center text-white/80 hover:text-[#E8262B] transition py-1"
        >
          <ShoppingBag className="w-5 h-5 text-[#E8262B] mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Cart</span>
          {totalItems > 0 && (
            <span className="absolute top-0 right-2 bg-[#FFC929] text-black font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Call Bottom Sheet */}
      <AnimatePresence>
        {callSheetOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-[#1f2028] text-white rounded-t-3xl p-6 shadow-2xl border-t border-white/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black uppercase text-[#FFC929]">Select Call Line</h3>
              <button
                onClick={() => setCallSheetOpen(false)}
                className="text-white/60 hover:text-white text-xl font-bold p-1"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col space-y-3 mb-6">
              {phones.map((p, i) => (
                <a
                  key={i}
                  href={p.type === 'whatsapp' ? `https://wa.me/923268414405` : `tel:${p.intl}`}
                  className="flex items-center justify-between bg-black/40 px-4 py-3 rounded-2xl hover:bg-[#E8262B]/20 transition border border-white/5"
                  onClick={() => setCallSheetOpen(false)}
                >
                  <span className="text-sm font-semibold">{p.label}</span>
                  <span className="font-mono text-[#FFC929] font-bold">{p.number}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
