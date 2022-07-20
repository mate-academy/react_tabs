import classNames from 'classnames';
import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({ 'is-active': tab.id === selectedTab.id })}
          >
            <a
              href={`#${tab.id}`}
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
