import classNames from 'classnames';
import React from 'react';
import { Tab } from './types/Tab';

interface Props{
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  className={classNames(
                    { 'is-active': tab.id === selectedTab.id },
                  )}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => handleClick(tab)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>

  );
};
