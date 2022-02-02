import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <ul className="nav nav-pills mb-3">
    {
      tabs.map(tab => (
        <li key={tab.id} className="nav-item">
          <button
            type="button"
            onClick={() => onTabSelected(tab)}
            className={selectedTabId === tab.id ? 'nav-link active' : 'nav-link'}
          >
            {tab.title}
          </button>
          {selectedTabId === tab.id
            && (
              <p>
                {tab.content}
              </p>
            )}
        </li>
      ))
    }
  </ul>
);
