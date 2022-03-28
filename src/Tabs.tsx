import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab, id: string) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <ul
    className="Tabs__list"
  >
    {tabs.map(tab => (
      <li
        key={tab.id}
        className="Tabs__list-item"
      >
        <button
          type="button"
          className={`Tabs__button
            ${selectedTabId === tab.id ? 'Tabs__button--active' : ''}`}
          onClick={() => (onTabSelected(tab, selectedTabId))}
        >
          {tab.title}
        </button>

        {(selectedTabId === tab.id) && (
          <p
            className="Tabs__content"
          >
            {tab.content}
          </p>
        )}
      </li>
    ))}
  </ul>
);
