import React from 'react';
import './Tabs.css';

type Props = {
  tabsList: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabsList, selectedTabId, onTabSelected } = props;
  const findContent = tabsList.find(item => item.id === selectedTabId);

  return (
    <div className="tabs">
      {tabsList.map((tab) => (
        <button
          type="button"
          className="tab-button"
          key={tab.id}
          onClick={() => {
            onTabSelected(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
      <div className="tab-content">{findContent?.content}</div>
    </div>
  );
};
