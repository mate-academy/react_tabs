import React from 'react';

type TablistProps = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTab: Tab;
};

export const TabList: React.FC<TablistProps> = ({ tabs, onTabSelected, selectedTab }) => {
  return (
    <ul>
      {tabs.map((tab) => {
        return (
          <li
            key={tab.id}
          >
            <button
              type="button"
              onClick={() => {
                if (tab.id !== selectedTab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
