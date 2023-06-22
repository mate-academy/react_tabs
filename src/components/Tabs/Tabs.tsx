import React from 'react';

interface Tab {
  id: string;
  title: string;
  content: string;
}

export const Tabs: React.FC<{
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  let updatedSelectedTabId = selectedTabId;

  if (!tabs.some(tab => tab.id === selectedTabId)) {
    updatedSelectedTabId = tabs[0].id;
  }

  const handleTabClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
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
              className={updatedSelectedTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === updatedSelectedTabId)?.content}
      </div>
    </div>
  );
};
