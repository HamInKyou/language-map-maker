import { v4 as uuidv4 } from 'uuid';
import { LanguagePack } from '@entities/languagePack/@model/languagePack.model.ts';
import { create } from 'zustand';
import { LANGUAGE_TYPE, LanguageType } from '@entities/languagePack/@model/language.model.ts';

type StateType = {
  itemList: LanguagePack[];
};

type ActionsType = {
  append(): void;
  insert(id: string): void;
  remove(id: string): void;
  update(id: string, updatedItem: Omit<LanguagePack, 'id'>): void;
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
        itemList: [...state.itemList, { ...EMPTY_ITEM, id: uuidv4() }],
      }));
    },

    // 특정 id를 가진 item 뒤에 새로운 item 삽입
    insert: (id: string) => {
      set(state => {
        const index = state.itemList.findIndex(item => item.id === id); // 해당 id를 가진 아이템의 인덱스 찾기

        if (index === -1) {
          console.error(`Item with id ${id} not found`);
          return state; // id가 없을 경우 그대로 상태를 반환
        }

        const updatedList = [...state.itemList];
        updatedList.splice(index + 1, 0, { ...EMPTY_ITEM, id: uuidv4() }); // 해당 아이템 뒤에 새 아이템 삽입

        return { itemList: updatedList };
      });
    },

    // 특정 id를 가진 item 삭제
    remove: (id: string) => {
      set(state => {
        const updatedList = state.itemList.filter(item => item.id !== id); // 해당 id와 일치하지 않는 아이템들만 남김

        if (updatedList.length === state.itemList.length) {
          console.error(`Item with id ${id} not found`);
          return state; // id가 없을 경우 상태를 변경하지 않음
        }

        return { itemList: updatedList };
      });
    },

    // 특정 id를 가진 item 업데이트
    update: (id: string, updatedItem: Omit<LanguagePack, 'id'>) => {
      set(state => {
        const index = state.itemList.findIndex(item => item.id === id); // 해당 id를 가진 아이템의 인덱스 찾기

        if (index === -1) {
          console.error(`Item with id ${id} not found`);
          return state; // id가 없을 경우 상태를 변경하지 않음
        }

        const updatedList = [...state.itemList];
        updatedList[index] = { ...updatedList[index], ...updatedItem }; // 해당 아이템의 내용을 업데이트 (id는 유지)

        return { itemList: updatedList };
      });
    },
  },
}));

export const useLanguagePackList = () => useLanguagePackListStore().itemList;
export const useLanguagePackListAction = () => useLanguagePackListStore().actions;
