import { LanguageConfig, SupportedLanguage } from '../types';

export const SUPPORTED_LANGUAGES: Record<SupportedLanguage, LanguageConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    voiceCode: 'en-IN',
    rtl: false
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    voiceCode: 'hi-IN',
    rtl: false
  },
  ta: {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    voiceCode: 'ta-IN',
    rtl: false
  },
  te: {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    voiceCode: 'te-IN',
    rtl: false
  },
  kn: {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    voiceCode: 'kn-IN',
    rtl: false
  },
  ml: {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    voiceCode: 'ml-IN',
    rtl: false
  },
  gu: {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    voiceCode: 'gu-IN',
    rtl: false
  },
  bn: {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    voiceCode: 'bn-IN',
    rtl: false
  },
  mr: {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    voiceCode: 'mr-IN',
    rtl: false
  },
  pa: {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    voiceCode: 'pa-IN',
    rtl: false
  }
};

export const getLanguageConfig = (code: SupportedLanguage): LanguageConfig => {
  return SUPPORTED_LANGUAGES[code];
};

export const getAvailableLanguages = (): LanguageConfig[] => {
  return Object.values(SUPPORTED_LANGUAGES);
};