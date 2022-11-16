import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (id: Tab) => void
};

export const Tabs: React.FC<Props> = (
  { tabs, selectedTabId, onTabSelected }: Props,
) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': selectedTab.id === tab.id })}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-Content">
        {selectedTab.content}
      </div>
    </div>
  );
};
