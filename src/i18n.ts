import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import pl from "./locales/pl.json";

const supportedLanguages = ["pl", "en"];

const getInitialLanguage = () => {
  const langInLocalStorage = localStorage.getItem("language");

  if (langInLocalStorage) {
    console.log("z local");
    return langInLocalStorage;
  }

  const browserLang = navigator.language.split("-")[0];

  if (supportedLanguages.includes(browserLang)) {
    console.log("z browser");
    return browserLang;
  }

  return "en";
};

i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
