import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  onTabSelected: (tabId: Tab) => void,
  selectedTabId: Tab,
};

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => (
  <div className="">
    <ul className="Tab__list">
      {tabs.map(tab => (
        <li
          className="Tabs__item"
          key={tab.id}
        >
          <button
            type="button"
            className="Tabs__button"
            onClick={() => onTabSelected(tab)}
          >
            <div className="Tabs__title">{tab.title}</div>
          </button>
        </li>
      ))}
    </ul>
    <p className="Tabs__content">
      {selectedTabId.content}
    </p>
  </div>
);
