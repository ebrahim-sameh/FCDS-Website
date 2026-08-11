import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonAr from './assets/locales/ar/common.json';
import commonEn from './assets/locales/en/common.json';
import homeAr from './assets/locales/ar/home.json';
import homeEn from './assets/locales/en/home.json';
import departmentsAr from './assets/locales/ar/departments.json';
import departmentsEn from './assets/locales/en/departments.json';
import deanMessageAr from './assets/locales/ar/deanMessage.json';
import deanMessageEn from './assets/locales/en/deanMessage.json';
import newsAr from './assets/locales/ar/news.json';
import newsEn from './assets/locales/en/news.json';
import aboutAr from './assets/locales/ar/about.json';
import aboutEn from './assets/locales/en/about.json';
import servicesAr from './assets/locales/ar/services.json';
import servicesEn from './assets/locales/en/services.json';
import contactAr from './assets/locales/ar/contact.json';
import contactEn from './assets/locales/en/contact.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        common: commonAr,
        home: homeAr,
        departments: departmentsAr,
        deanMessage: deanMessageAr,
        news: newsAr,
        about: aboutAr,
        services: servicesAr,
        contact: contactAr,
      },
      en: {
        common: commonEn,
        home: homeEn,
        departments: departmentsEn,
        deanMessage: deanMessageEn,
        news: newsEn,
        about: aboutEn,
        services: servicesEn,
        contact: contactEn,
      },
    },
    fallbackLng: 'ar',
    lng: localStorage.getItem('lang') || 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
