import React from 'react';
import cm from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[]
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (
  { tabs, selectedTabId, onTabSelected: onSelected },
) => {
  const handleSelectedTab = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onSelected(tab);
    }
  };

  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cm('tab', {
                'is-active': tab.id === currentTab.id,
              })}
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
        {currentTab.content}
      </div>
    </>
  );
};
