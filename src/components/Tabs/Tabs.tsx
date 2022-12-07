import React from 'react';
import { Tab } from '../../types/tab';

interface Props {
  tabs: Tab[],
  onTabSelected: React.Dispatch<React.SetStateAction<Tab>>,
  selectedTab: Tab,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTab,
}) => {
  const handleTabSelection = (tab: Tab) => {
    if (selectedTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelection(tab)}
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
