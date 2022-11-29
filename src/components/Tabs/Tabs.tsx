import classNames from 'classnames';
import React from 'react';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[]
  selectedTabId: string
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = (
  { tabs, selectedTabId, onTabSelected },
) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectedTab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => (tab.id !== selectedTabId && onTabSelected(tab))}
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
