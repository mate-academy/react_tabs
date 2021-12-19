import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (selectedTabId: Tab) => void,
};

export const Tabs: React.FC<Props> = (
  {
    tabs, selectedTabId, onTabSelected,
  },
) => (
  <ul className="Tabs">
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={classNames('Tabs__tab', {
          'Tabs__tab--selected': tab.id === selectedTabId,
        })}
      >
        <button
          type="submit"
          onClick={() => onTabSelected(tab)}
          className="Tabs__button"
        >
          {tab.title}
        </button>
      </li>
    ))}
  </ul>
);
