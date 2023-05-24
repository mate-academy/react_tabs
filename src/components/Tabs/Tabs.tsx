import React from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

interface TabsProps {
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
  tabs: Tab[],
}

export const Tabs: React.FC<TabsProps> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  const findTab = (tabId: string) => {
    return tabs.find((tab) => tab.id === tabId) || tabs[0];
  };

  function handleTabClick(clickedTab: string) {
    if (selectedTabId !== clickedTab) {
      onTabSelected(findTab(clickedTab));
    }
  }

  const selectedTab = findTab(selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={id === selectedTab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(id)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
