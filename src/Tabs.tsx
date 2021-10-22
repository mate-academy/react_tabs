import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div>
      <ul className="button__list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className="success button"
              onClick={() => (tab !== selectedTab ? onTabSelected(tab) : null)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="selectedtab__content">
        {selectedTab.content}
      </div>
    </div>
  );
};
