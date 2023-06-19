import React, { useState } from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<TabsProps> = (
  { tabs, selectedTabId, onTabSelected },
) => {
  const [selectedTab, setSelectedTab] = useState<Tab>(() => {
    const initialTab = tabs.find(tab => tab.id === selectedTabId);

    return initialTab || tabs[0];
  });

  const handleTabClick = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      setSelectedTab(tab);
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => handleTabClick(tab)}
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
