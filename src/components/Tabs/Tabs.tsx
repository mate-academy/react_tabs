import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelect: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelect,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="tabs is-boxed is-flex-direction-column">
      <ul className="block">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames(
              'tabs__item',
              { 'is-active': tab === selectedTab },
            )}
          >
            <button
              type="button"
              className="button"
              onClick={() => (tab !== selectedTab ? onTabSelect(tab) : null)}
            >
              <span>{tab.title}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="tab-content">
        {selectedTab.content}
      </p>
    </div>
  );
};
