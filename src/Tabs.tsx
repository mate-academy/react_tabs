import React from 'react';

import { MyTab } from './MyTab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: Callback,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <MyTab
          tab={tab}
          key={tab.id}
          onTabSelected={onTabSelected}
          showContent={selectedTabId === tab.id}
        />
      ))}
    </ul>
  );
};
