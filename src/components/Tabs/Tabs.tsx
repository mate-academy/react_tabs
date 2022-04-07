import React, { memo } from 'react';

import './Tabs.scss';
import { TabsControll } from '../TabsControl';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onSelectTab: (tabId: string) => void,
}

export const Tabs: React.FC<Props> = memo(({
  tabs,
  selectedTabId,
  onSelectTab,
}) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__item"
          >
            <TabsControll
              tab={tab}
              selectedTabId={selectedTabId}
              onSelectTab={onSelectTab}
            />
          </li>
        ))}
      </ul>

      <div className="tabs__content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
});
