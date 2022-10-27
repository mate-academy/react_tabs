import React from 'react';
import classNames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (arg: string) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
              onClick={() => {
                onTabSelected(tab.id);
              }}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
