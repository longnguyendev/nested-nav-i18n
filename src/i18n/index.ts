import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";

const defaultLang = localStorage.getItem('lang') ?? 'en'

i18n.use(i18nBackend).use(initReactI18next).init({
    lng: defaultLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
        loadPath: "http://localhost:5173/i18n/{{lng}}.json",
      },
  });

export default i18n;