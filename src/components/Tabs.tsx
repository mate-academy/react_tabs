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
          {selectedTabId === tab.id
            ? (
              <button
                type="button"
                onClick={() => onTabSelected(tab)}
                className="nav-link active"
              >
                {tab.title}
              </button>
            )
            : (
              <button
                type="button"
                onClick={() => onTabSelected(tab)}
                className="nav-link"
              >
                {tab.title}
              </button>
            )}
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
