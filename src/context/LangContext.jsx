import React, { createContext, useContext, useState, useEffect } from 'react';

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // 'en' | 'ur'

  useEffect(() => {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'ur' : 'en'));
  };

  const t = (enText, urText) => {
    return lang === 'ur' ? (urText || enText) : enText;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
