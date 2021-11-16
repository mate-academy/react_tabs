import React from 'react';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  chooseSelectedTab: (tab: Tab) => void
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  chooseSelectedTab,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="Container">
      <ul className="Tabs__TabsList">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className={(selectedTabId === tab.id)
                ? 'Tabs__button Tabs__button--active'
                : 'Tabs__button'}
              onClick={() => chooseSelectedTab(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {selectedTab?.content}
      </div>
    </div>
  );
};
