import { type ReactElement, type ReactNode, useState } from 'react';

interface ContentItemProps<T> {
  name: T;
  children: ReactNode;
}

interface ContentProps<T> {
  children: ReactElement<ContentItemProps<T>>[];
}

export function useTab<T>(initialValue: T) {
  const [contentItem, setContentItem] = useState<T>(initialValue);

  const ContentItem: React.FC<ContentItemProps<T>> = ({ children }) => {
    return <>{children}</>;
  };

  const Content: React.FC<ContentProps<T>> = ({ children }) => {
    // name이 현재 content 상태와 동일한 content만 렌더링
    const targetContentItem = children.find(child => child.props.name === contentItem);
    return targetContentItem || null;
  };

  return [Object.assign(Content, { Item: ContentItem }), contentItem, setContentItem] as const;
}
