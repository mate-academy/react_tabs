import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabChange: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabChange }) => {
  const content = tabs.find(tab => tab.id === selectedTabId)?.content || tabs[0].content;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item">
            <button
              className="nav-link"
              type="button"
              key={tab.id}
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabChange(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="tab-content">{content}</p>
    </>
  );
};
