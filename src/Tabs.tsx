import React from 'react';
import { Tab } from './react-app-env';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  selectTab: (currentTab: Tab) => void,
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, selectTab } = props;

  return (
    <>
      <div className="tab">
        {tabs.map(tab => (
          <button
            onClick={() => selectTab(tab)}
            key={tab.id}
            type="button"
            className="tab-btn"
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
