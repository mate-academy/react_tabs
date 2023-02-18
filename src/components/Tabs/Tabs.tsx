import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
              data-cy="Tab"
              onClick={() => onTabSelected(tab)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
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
