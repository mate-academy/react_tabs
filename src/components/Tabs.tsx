import React from 'react';

import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  currentTabId: string,
  selectTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, currentTabId, selectTab }) => {
  const chosenTab = tabs.find(tab => tab.id === currentTabId);

  return (
    <>
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs-item"
          >
            <button
              className={classNames(
                'button',
                { 'button--active': currentTabId === tab.id },
              )}
              type="button"
              onClick={() => selectTab(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="show-tabs">
        {chosenTab?.content}
      </div>
    </>
  );
};
