import classNames from 'classnames';
import React from 'react';
import { Tab } from '../types/Tabs';

type Props = {
  tabs: Tab[]
  selectedTabId: string
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);
  const handleTabClick = (tab: Tab) => {
    return () => tab.id !== selectedTab?.id && onTabSelected(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>

          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === selectedTabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}

          {/* <li className="is-active" data-cy="Tab">
            <a href="#tab-1" data-cy="TabLink">Tab 1</a>
          </li>

          <li data-cy="Tab">
            <a href="#tab-2" data-cy="TabLink">Tab 2</a>
          </li>

          <li data-cy="Tab">
            <a href="#tab-3" data-cy="TabLink">Tab 3</a>
          </li> */}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};
