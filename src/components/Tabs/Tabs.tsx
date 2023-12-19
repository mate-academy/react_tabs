import React from 'react';

const tabsData = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Tab = {
  id: string;
  title: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  setSelectedTabId: (id: string) => void;
  onTabSelected?: (tab: Tab) => void;
};

export const Tabs: React.FC<TabsProps>
= ({
  tabs, selectedTabId, setSelectedTabId, onTabSelected,
}) => {
  const handleTabClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      setSelectedTabId(tab.id);
      if (onTabSelected) {
        onTabSelected(tab);
      }
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabsData.map(tab => (
            <li
              key={tab.id}
              className={selectedTabId === tab.id
                ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  onTabSelected: () => {},
};
