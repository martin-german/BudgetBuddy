'use client';

import React, { createContext, useContext, useState, useLayoutEffect } from 'react';

import en from '../json/en.json';
import hu from '../json/hu.json';

import { Language, Translations } from '../types/type';

const translations: Record<Language,  Translations> = { en, hu };

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
} | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language | null>(null);

  useLayoutEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
   setLanguage(savedLang || 'en');
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  if (!language) return null;

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    console.error('useLanguage must be used within LanguageProvider'); 
    throw new Error('useLanguage must be used within LanguageProvider');
  }else return context;
};
