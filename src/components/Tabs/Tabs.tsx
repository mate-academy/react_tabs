import React from 'react';
import { TabControl } from '../TabControl';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs, selectedTabId, onTabSelected,
}) => {
  return (
    <div className="tabs">
      <div className="tabs__list" style={{ marginBottom: '10px' }}>
        {tabs.map(tab => (
          <TabControl
            key={tab.id}
            tab={tab}
            selectedTabId={selectedTabId}
            onTabSelected={onTabSelected}
          />
        ))}
      </div>

      <div className="tabs__content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
});
