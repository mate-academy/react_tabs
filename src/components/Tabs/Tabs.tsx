import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tabs';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleSelected = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={classNames(
                  { 'is-active': tab.id === selectedTab.id },
                )}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => handleSelected(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
