import React from 'react';
import cn from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[]
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => (tab.id === selectedTabId)) || tabs[0];

  const handleTabSelect = (tabToSelect: Tab) => {
    if (tabToSelect !== selectedTab) {
      onTabSelected(tabToSelect);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn(
                { 'is-active': selectedTab.id === tab.id },
              )}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => handleTabSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
