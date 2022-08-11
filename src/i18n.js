import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-locize-backend'

import { locizePlugin } from 'locize';

const locizeOptions = {
    projectId: '47a7e289-e378-4fe5-a924-829bf9e7b257',
    apiKey: 'c506d393-768e-47f2-acc2-bb0947b4235c',
    referenceLng: 'en',
}

i18n
      .use(locizePlugin)
    // loads translations from the server
      .use(Backend)
    // detect user language
      .use(LanguageDetector)
    // pass the i18n instance to react-i18next
      .use(initReactI18next)
    // init i18next
      .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        backend: locizeOptions,
        saveMissing: true,
        react: {
          bindI18n: 'languageChanged editorSaved',
        }
    })

export default i18n