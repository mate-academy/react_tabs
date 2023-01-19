import React from 'react';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = React.memo(
  ({
    tabs,
    selectedTabId,
    onTabSelected,
  }) => {
    const selectedTab = (
      tabs.find(tab => tab.id === selectedTabId) || tabs[0]
    );

    const handleTabClick = (tab: Tab) => {
      if (tab.id !== selectedTab.id) {
        onTabSelected(tab);
      }
    };

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={classNames(
                    { 'is-active': tab.id === selectedTab.id },
                  )}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    );
  },
);
