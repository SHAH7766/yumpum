import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoaded) onLoaded();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          onClick={() => {
            setLoading(false);
            if (onLoaded) onLoaded();
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#141414] text-[#FFF8EC] cursor-pointer"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl md:text-8xl animate-bounce">
              🍕🍔🔥
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-wider text-[#FFC929] uppercase">
              YuM PuM
            </h1>
            <p className="text-xs md:text-sm text-[#FFF8EC]/70 tracking-widest uppercase">
              Fast Food | BBQ & Pakistani Cuisine
            </p>
            <span className="text-xs text-neutral-400 mt-4">(Click anywhere to enter)</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
