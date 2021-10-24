import React from 'react';

export interface Props {
  tabs: Tab[];
  selectedTab: string;
  changeTab: (tab: string) => void;
}

export const Tabs: React.FC<Props> = ({ tabs, changeTab }) => {
  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <>
            <button
              key={tab.id}
              type="button"
              onClick={() => changeTab(tab.id)}
            >
              {tab.title}
            </button>
            <div>{tab.title}</div>
          </>
        ))}
      </div>
    </>
  );
};
