import React, { createContext, useContext, useState, useEffect } from 'react';

const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('yumpum_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('yumpum_theme', isDarkMode ? 'dark' : 'light');
    } catch (e) {}

    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleColorMode = (event) => {
    const nextState = !isDarkMode;

    // Use View Transitions API if supported
    if (document.startViewTransition && event) {
      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        setIsDarkMode(nextState);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        document.documentElement.animate(
          {
            clipPath: nextState ? clipPath : [...clipPath].reverse()
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: nextState ? '::view-transition-new(root)' : '::view-transition-old(root)'
          }
        );
      });
    } else {
      setIsDarkMode(nextState);
    }
  };

  return (
    <ColorModeContext.Provider value={{ isDarkMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
