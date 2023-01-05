import React from 'react';
import { Tab } from '../../types/Tab';

export const Tabs: React.FC<{
  tabs: Tab[], selectedTabId: string, onTabSelected: (tab:Tab)=>void,
}> = ({ tabs, selectedTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const link = e.target as HTMLAnchorElement;
    const { id } = link;
    const neededTab = tabs.find(tab => tab.id === id) || tabs[0];

    if (id !== selectedTabId) {
      onTabSelected(neededTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab === activeTab ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={clickHandler}
                id={tab.id}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
