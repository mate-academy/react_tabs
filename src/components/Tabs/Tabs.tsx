import React from 'react';
import cn from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTab: Tab;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTab,

}) => {
  const selectTab = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
            >
              <a
                onClick={() => selectTab(tab)}
                href={`#${tab.id}`}
                data-cy="TabLink"
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
