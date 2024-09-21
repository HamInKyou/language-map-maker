import { LANGUAGE_TYPE, LanguageType } from '@entities/languagePack/@model/language.model.ts';

export type LanguagePack = {
  id: string;
} & Record<(typeof LANGUAGE_TYPE)[LanguageType], string>;
