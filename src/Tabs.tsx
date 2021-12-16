import React from 'react';
import { Tab } from './Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  selectTab: (currentTab: Tab) => void,
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, selectTab } = props;

  return (
    <>
      <div>
        {tabs.map(tab => (
          <button
            onClick={() => selectTab(tab)}
            key={tab.id}
            type="button"
          >
            {tab.title}
          </button>
        ))}
      </div>
      <h2>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </h2>
    </>
  );
};
