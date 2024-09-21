export const LANGUAGE_TYPE = {
  KOR: 'kr',
  ENG: 'en',
} as const;

export type LanguageType = keyof typeof LANGUAGE_TYPE;
