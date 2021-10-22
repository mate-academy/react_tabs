import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <nav className="nav">
      <div className="nav__buttons">
        {tabs.map(tab => (
          <button
            className={classNames({ nav__button: true, 'nav__button--active': selectedTabId === tab.id })}
            type="button"
            key={tab.id}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <hr className="nav__line" />
      <div className="nav__content">
        {selectedTab?.content}
      </div>
    </nav>
  );
};
