import React from 'react';
import classNames from 'classnames';

export interface TabsType {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (arg: Tab) => void;
}

export type Tab = {
  id: string;
  title: string;
  content: string;
};

export const Tabs: React.FC<TabsType> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const handleTabSelect = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  const isTabActive = (id: string, index: number) => (
    id === selectedTabId
    || (!tabs.some(tab => (tab.id === selectedTabId)) && index === 0)
  );

  const selectedTabContent
    = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': isTabActive(tab.id, index),
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
