import React from 'react';

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

interface Tab {
  id: string;
  title: string;
  content: string;
}

export const Tabs: React.FC<TabsProps> = (
  { tabs, selectedTabId, onTabSelected },
) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabClick = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      <h1 className="title">{`Selected tab is ${selectedTab.title}`}</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              // eslint-disable-next-line
              <li
                key={tab.id}
                data-cy="Tab"
                onClick={() => handleTabClick(tab)}
                className={`${selectedTab === tab && 'is-active'}`}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
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
    </>
  );
};
