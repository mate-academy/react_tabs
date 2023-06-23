import React from 'react';
import classNames from 'classnames';

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
              className={classNames({ 'is-active': selectedTabId === tab.id })}
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
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
