import React from 'react';
import classNames from 'classnames';
import { TabsType } from '../../types/Tabs';

export const Tabs: React.FC<TabsType> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentСomponent = tabs.find(tab => tab.id === selectedTabId)
    || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': currentСomponent.id === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== selectedTabId) {
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

      <div className="block" data-cy="TabContent">
        {currentСomponent.content}
      </div>
    </div>
  );
};
