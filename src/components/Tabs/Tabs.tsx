import React from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
  selectedTab: Tab;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
  selectedTab,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
};
