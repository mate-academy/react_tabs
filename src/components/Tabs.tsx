import React from 'react';

import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  selectCurrentTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, selectCurrentTab }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <nav>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id} className="nav-item">
            <button
              type="button"
              className={classNames('nav-link', { active: selectedTabId === tab.id })}
              onClick={() => selectCurrentTab(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <span className="App__tab-text">
        {selectedTab?.content}
      </span>
    </nav>
  );
};
