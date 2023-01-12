import React from 'react';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected
}) => {
  const selectedTab = tabs.find((tab) => (tab.id === selectedTabId)) || tabs[0];

  const handleTabClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map( tab => (
        <li
          className={classNames(
            { 'is-active': tab.id === selectedTabId },
          )}
          data-cy="Tab"
        >
          <a
            href={"#" + tab.id}
            data-cy="TabLink"
            onClick={() => handleTabClick(tab)}
          >
            {tab.title}
          </a>
        </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
  );
};
