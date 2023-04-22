import React, { useState } from 'react';
import { Tab } from '../../types/tab';

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

const getTabById = (id: string, tabs: Tab[]) => tabs
  .find((tab) => tab.id === id) ?? tabs[0];

export const Tabs: React.FC<TabsProps> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  const [
    selectedTab, setSelectedTab,
  ] = useState(() => getTabById(selectedTabId, tabs));

  const handleTabClick = (id: string) => {
    const tab = getTabById(id, tabs);

    if (tab !== selectedTab) {
      setSelectedTab(tab); onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                onClick={() => handleTabClick(id)}
                data-cy="TabLink"
              >
                {title}
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
