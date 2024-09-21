import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { MAIN_TAB_CONTENT, MainTabContent } from '@widgets/mainTab';
import { memo, useCallback } from 'react';

const cx = classNames.bind(styles);

interface Props {
  currentContent: MainTabContent;
  onChange: (tab: MainTabContent) => void;
}

function MainTab({ currentContent, onChange }: Props) {
  const handleTabClick = useCallback(
    (tab: MainTabContent) => {
      onChange(tab);
    },
    [onChange],
  );

  return (
    <div className={cx('main-tab')}>
      {Object.keys(MAIN_TAB_CONTENT).map(tab => {
        return (
          <button
            key={tab}
            className={cx('tab-item', { 'is-active': currentContent === tab })}
            onClick={() => handleTabClick(tab as MainTabContent)}>
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default memo(MainTab);
