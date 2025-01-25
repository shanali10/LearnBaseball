import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files for each language
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import de from "./locales/de/translation.json";
import es from "./locales/es/translation.json";
import ar from "./locales/ar/translation.json";
import ur from "./locales/ur/translation.json";
import hi from "./locales/hi/translation.json";

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de },
      es: { translation: es },
      ar: { translation: ar },
      ur: { translation: ur },
      hi: { translation: hi },
    },
    fallbackLng: "en", // Default language if no match is found
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
    // If you want Arabic as the default language for your app, set this:
    // lng: 'ar', // Uncomment this line if you want Arabic to be default
  });

export default i18n;
