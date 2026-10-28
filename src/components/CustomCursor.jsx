import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target.closest('button, a, input, select, [data-cursor]');
      if (target) {
        setIsPointer(true);
        if (target.dataset.cursor) {
          setCursorText(target.dataset.cursor);
        } else if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          setCursorText('View');
        } else {
          setCursorText('');
        }
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-4 h-4 bg-[#E8262B] rounded-full shadow-md mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 flex items-center justify-center border border-[#FFC929] rounded-full bg-[#FFC929]/20 backdrop-blur-xs text-[10px] font-bold text-[#FFC929]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          width: cursorText ? 64 : 48,
          height: cursorText ? 64 : 48,
          opacity: isPointer ? 1 : 0.6
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {cursorText && <span className="uppercase tracking-wider">{cursorText}</span>}
      </motion.div>
    </>
  );
};
