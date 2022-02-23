import React from 'react';
import classNames from 'classnames';
import { Tab } from './Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <>
    <ul className="tabs">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className="tabs__item"
        >
          <button
            type="button"
            value={tab.id}
            onClick={() => onTabSelected(tab)}
            className={classNames('tabs__button',
              { 'tabs__button--active': tab.id === selectedTabId })}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <div className="tabs__content">
      {tabs.find(tab => tab.id === selectedTabId)?.content}
    </div>
  </>
);
