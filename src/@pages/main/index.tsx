import { useTab } from '@shares/Tab';
import { MAIN_TAB_CONTENT, MainTab, MainTabContent } from '@widgets/mainTab';
import { useCallback } from 'react';

function Page() {
  const [Content, contentItem, setContentItem] = useTab<MainTabContent>(MAIN_TAB_CONTENT.다국어설정);

  const handleChangeTab = useCallback((content: MainTabContent) => {
    setContentItem(content);
  }, []);

  return (
    <main>
      <MainTab currentContent={contentItem} onChange={handleChangeTab} />
      <Content>
        <Content.Item name={MAIN_TAB_CONTENT.다국어설정}>
          <div>다국어설정</div>
        </Content.Item>
        <Content.Item name={MAIN_TAB_CONTENT.탐색키}>
          <div>탐색키</div>
        </Content.Item>
        <Content.Item name={MAIN_TAB_CONTENT.언어팩}>
          <div>언어팩</div>
        </Content.Item>
      </Content>
    </main>
  );
}

export default Page;
