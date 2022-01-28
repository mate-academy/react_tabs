import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className="tabs__item"
        >
          <button
            type="button"
            className={classNames('tabs__button', { 'tabs__button--active': tab.id === selectedTabId })}
            onClick={() => {
              if (tab.id !== selectedTabId) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
