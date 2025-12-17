"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "@/types";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("pt");

    useEffect(() => {
        const browserLanguage = navigator.language || (navigator as any).userLanguage;
        const shortLang = browserLanguage.split('-')[0] as Language;
        if (['pt', 'en', 'es'].includes(shortLang)) {
            setLanguage(shortLang);
        } else {
            setLanguage('en');
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguageContext must be used within a LanguageProvider");
    }
    return context;
};
