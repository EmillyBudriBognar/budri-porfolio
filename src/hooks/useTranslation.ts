import { useLanguageContext } from "@/context/LanguageContext";

export const useTranslation = () => {
    const { language, setLanguage } = useLanguageContext();
    return { language, setLanguage };
};
