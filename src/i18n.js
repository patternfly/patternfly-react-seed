import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from './translations/fr.json';
import ar from './translations/ar.json';
import de from './translations/de.json';
import zh from './translations/zh.json';
import en from './translations/en.json';
// Intl.RelativeTimeFormat polyfill
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/fr';
import '@formatjs/intl-relativetimeformat/dist/locale-data/ar';
import '@formatjs/intl-relativetimeformat/dist/locale-data/de';
import '@formatjs/intl-relativetimeformat/dist/locale-data/zh';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    detection: {
      caches: false
    },
    fallbackLng: 'en',
    debug: true,
    resources: {        
      en: {            
        translation: en        
      },        
      de: {            
        translation: de        
      },
      fr: {            
        translation: fr        
      },        
      zh: {            
        translation: zh        
      },
      ar: {            
        translation: ar        
      }
    }, 
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    wait: true
  });


export default i18n;