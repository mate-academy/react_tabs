import React from 'react';

interface Props {
  tabs:Tab[],
  selectedTab:Tab,
  changeTab: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const Tabs: React.FC<Props> = ({ tabs, selectedTab, changeTab }) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          value={tab.id}
          className={`button ${selectedTab.id === tab.id ? 'button--active' : ''}`}
          onClick={changeTab}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
