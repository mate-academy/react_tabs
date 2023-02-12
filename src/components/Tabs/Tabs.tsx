import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs:React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClickTab = (tab: Tab) => {
    if (tab.id === selectedTabId) {
      return;
    }

    onTabSelected(tab);
  };

  return (
    <ul>
      {tabs.map(tab => {
        const isActive = selectedTab.id === tab.id;

        return (
          <li
            className={cn({ 'is-active': isActive })}
            data-cy="Tab"
            aria-hidden="true"
            key={tab.id}
            onClick={() => {
              handleClickTab(tab);
            }}
          >
            <a href={`#${tab.id}`} data-cy="tab-content">
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
