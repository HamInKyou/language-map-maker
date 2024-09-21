import { LanguagePack } from '@entities/languagePack/@model/languagePack.model.ts';
import { create } from 'zustand';
import { LANGUAGE_TYPE, LanguageType } from '@entities/languagePack/@model/language.model.ts';

type StateType = {
  itemList: LanguagePack[];
};

type ActionsType = {
  append(): void;
  insert(index: number): void;
  remove(index: number): void;
  update(index: number, item: LanguagePack): void;
};

export const EMPTY_ITEM: LanguagePack = Object.keys(LANGUAGE_TYPE).reduce((acc, key) => {
  const languageCode = LANGUAGE_TYPE[key as LanguageType];
  acc[languageCode] = '';
  return acc;
}, {} as LanguagePack);

export const useLanguagePackListStore = create<StateType & { actions: ActionsType }>(set => ({
  itemList: [],

  actions: {
    // 빈 item을 맨 뒤에 추가
    append: () => {
      set(state => ({
        itemList: [...state.itemList, EMPTY_ITEM],
      }));
    },

    // 특정 인덱스에 item 삽입
    insert: (index: number) => {
      set(state => {
        const updatedList = [...state.itemList];
        updatedList.splice(index, 0, EMPTY_ITEM); // 해당 인덱스에 아이템 삽입
        return { itemList: updatedList };
      });
    },

    // 특정 인덱스의 item 제거
    remove: (index: number) => {
      set(state => ({
        itemList: state.itemList.filter((_, i) => i !== index),
      }));
    },

    // 특정 인덱스의 item 업데이트
    update: (index: number, item: LanguagePack) => {
      set(state => {
        const updatedList = [...state.itemList];
        if (index >= 0 && index < updatedList.length) {
          updatedList[index] = item; // 해당 인덱스의 아이템 업데이트
        }
        return { itemList: updatedList };
      });
    },
  },
}));

export const useLanguagePackList = () => useLanguagePackListStore().itemList;
export const useLanguagePackListAction = () => useLanguagePackListStore().actions;
