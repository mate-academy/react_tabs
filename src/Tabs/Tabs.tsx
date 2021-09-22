import React from 'react';

import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs:React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  const selectedTab = (tabId: string) => {
    return props.tabs.find(tab => tab.id === tabId);
  };

  return (
    <nav>
      <ul className="nav nav-tabs">
        {tabs.map(tab => {
          const { id, title } = tab;

          return (
            <li key={id} className="nav-item">
              <button
                type="button"
                className={classNames('nav-link', { active: selectedTabId === id })}
                onClick={() => onTabSelected(tab)}
              >
                {title}
              </button>
              {' '}
            </li>
          );
        })}
      </ul>
      {selectedTab(selectedTabId)?.title ? selectedTab(selectedTabId)?.title : 'Sorry, wrong info'}
    </nav>
  );
};
