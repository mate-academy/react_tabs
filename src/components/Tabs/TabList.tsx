import React from 'react';
import { Tab } from '../../type/Tabs';

interface TabListProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabClick: (tabId: string) => void;
}

export const TabList: React.FC<TabListProps> = ({
  tabs,
  selectedTabId,
  onTabClick,
}) => {
  const handleTabClick = (tabId: string) => {
    onTabClick(tabId);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={selectedTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find((tab) => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
