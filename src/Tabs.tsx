import classNames from 'classnames';
import React from 'react';
import './tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className="tabs__item"
        >
          <button
            type="button"
            className={classNames(
              'tabs__button',
              { isSelected: tab.id === selectedTabId },
            )}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
