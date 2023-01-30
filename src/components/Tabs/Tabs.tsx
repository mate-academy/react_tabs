import React from 'react';
import cn from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  const handleSelectedTab = (tab: Tab) => {
    if (tab.id === selectedTabId) {
      return;
    }

    onTabSelected(tab);
  };

  const selectedTab = tabs
    .find(tab => tab.id === selectedTabId)
    || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-toggle is-toggle-rounded">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              className={cn(
                { 'is-active': selectedTab.id === tab.id },
              )}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleSelectedTab(tab)}
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
