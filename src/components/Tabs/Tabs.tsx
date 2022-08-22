import React from 'react';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: string,
  setTabSelected: CallableFunction,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  setTabSelected,
}) => {
  const currentTab = tabs.find(tab => tab.id === selectedTab);
  const onSelectedTab = (tab:Tab) => {
    if (tab.id !== selectedTab) {
      setTabSelected(tab);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === selectedTab
                ? 'is-active'
                : ''}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => onSelectedTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {currentTab ? currentTab.content : 'Tab not found'}
      </div>
    </div>
  );
};
