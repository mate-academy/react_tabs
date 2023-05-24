import React, { useState } from 'react';
import { Tab } from '../../type/Tabs';

interface TabsProps {
  tabs: Tab[];
  selectedTabId: (elem: string) => void;
  idTitle: string;
}

export const TabList: React.FC<TabsProps> = ({
  tabs,
  selectedTabId: clickedContent,
  idTitle,
}) => {
  const [activeTabId, setActiveTabId] = useState(idTitle);
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const getClassName = (className: string) => {
    setActiveTabId(className);
    clickedContent(className);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={activeTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => getClassName(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab && activeTab.content}
      </div>
    </div>
  );
};
