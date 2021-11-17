import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  chooseSelectedTab: (tabId: string) => void
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  chooseSelectedTab,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <ul className="Tabs__TabsList">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className={classNames(
                'Tabs__button',
                { 'Tabs__button--active': (selectedTabId === tab.id) },
              )}
              onClick={() => chooseSelectedTab(tab.id)}
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
