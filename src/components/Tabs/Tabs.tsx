import classNames from 'classnames';
import React from 'react';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  tabIndex: number;
  onTabSelected: (tabId: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  tabIndex,
  onTabSelected,
}) => {
  return (
    <>
      <div className="app__title">
        <h1>{`Selected tab is ${tabs[tabIndex].title}`}</h1>
      </div>

      <div className="app__tabs">
        <ul className="nav nav-tabs">
          {tabs.map(tab => (
            <li className="nav-item" key={tab.id}>
              <button
                type="button"
                className={classNames('nav-link', { active: tab.id === selectedTabId })}
                aria-current="page"
                value={tab.id}
                onClick={() => onTabSelected(tab.id)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="app__content">
        {tabs[tabIndex].content}
      </div>
    </>
  );
};
