import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';

import en from './locales/en.json';
import pt from './locales/pt.json';

// Obtém o idioma do sistema
const locales = Localization.getLocales();
const defaultLang = locales[0]?.languageCode || 'en';

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: { en: { translation: en }, pt: { translation: pt } },
    lng: defaultLang, // Define o idioma padrão
    fallbackLng: 'en', // Caso o idioma não seja suportado
    interpolation: { escapeValue: false },
  });

export default i18next;
