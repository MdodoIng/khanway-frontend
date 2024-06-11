import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./resource/en.tsx";
import ko from "./resource/ko.tsx";

export const getLanguage = () => {
    if (localStorage.getItem('khanway_language'))
        return localStorage.getItem('khanway_language') || 'en';
    else if (navigator.language.includes('ko')) {
        localStorage.setItem('khanway_language', 'ko');
        return 'ko';
    }
    else
        return 'en';
}

i18n.use(initReactI18next).init({
    resources: {
        ...en, ...ko
    },
    lng: getLanguage(),
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('khanway_language', lng);
}

export default i18n