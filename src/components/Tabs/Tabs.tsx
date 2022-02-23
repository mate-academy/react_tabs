import React from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}
type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => (
  <>
    <ul>
      {tabs.map((tab: Tab) => (
        <li key={tab.id}>
          <button
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>

    <p>{selectedTabId}</p>
  </>
);
