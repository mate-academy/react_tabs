import classNames from 'classnames';
import React from 'react';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  tabId: number;
  onTabSelected: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  tabId,
  onTabSelected,
}) => {
  return (
    <>
      <div className="app__title">
        <h1>{`Selected tab is ${tabs[tabId].title}`}</h1>
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
                onClick={onTabSelected}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="app__content">
        {tabs[tabId].content}
      </div>
    </>
  );
};
