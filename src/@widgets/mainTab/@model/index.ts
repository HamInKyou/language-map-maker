export const MAIN_TAB_CONTENT = {
  다국어설정: '다국어설정',
  탐색키: '탐색키',
  언어팩: '언어팩',
} as const;

export type MainTabContent = keyof typeof MAIN_TAB_CONTENT;
