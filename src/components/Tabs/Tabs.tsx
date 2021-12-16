import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab:Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <ul className="tabs-container">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames('tab-title', { 'tab-title--active': tab.id === selectedTabId })}
        >
          <a
            className="tab-title__link"
            href="/#"
            onClick={(event) => {
              onTabSelected(tab);
              event.preventDefault();
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
