import i18n from 'i18next';
import {
    initReactI18next
} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

import { findBestLanguageTag, getLocales } from "react-native-localize";
import en from './translations/en';
import gu from './translations/gu';
import hi from './translations/hi';
import mr from './translations/mr';
import pa from './translations/pa';

import bn from './translations/bn'
import te from './translations/te';
import ur from './translations/ur';
import kn from './translations/kn';
import or from './translations/or';
import ml from './translations/ml';
import as from './translations/as';


const LANGUAGES = {
    en,
    gu,
    pa,
    mr,
    hi,
    bn,
    te,
    ur,
    kn,
    or,
    ml,
    as,
};


const LANG_CODES = Object.keys(LANGUAGES);

// console.log(findBestLanguageTag(LANG_CODES));
 
const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
        AsyncStorage.getItem('user-language', (err, language) => {

            if (err || !language) {
                if (err) {
                    console.log('Error fetching Languages from asyncstorage ', err);
                } else {
                    console.log('No language is set, choosing English as fallback');
                }
                // const findBestAvailableLanguage = RNLocalize.findBestAvailableLanguage(LANG_CODES);
                // callback(findBestAvailableLanguage.languageTag || 'en');

                const findBestAvailableLanguage = RNLocalize.findBestLanguageTag(LANG_CODES);
                callback(findBestAvailableLanguage.languageTag || 'en');
                return;
            }
            callback(language);
        });
    },
    init: () => { },
    cacheUserLanguage: language => {
        // LanRedux(language)
        AsyncStorage.setItem('user-language', language);
        console.log("language", language)
        // KundaliLanguage(language)
    },
};
i18n
    .use(LANGUAGE_DETECTOR)
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources: LANGUAGES,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
    });