import { LANGUAGE_TYPE, LanguageType } from '@entities/languagePack/@model/language.model.ts';

export type LanguagePack = {
  [key in (typeof LANGUAGE_TYPE)[LanguageType]]: string;
};
