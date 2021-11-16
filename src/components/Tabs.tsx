import React from 'react';
import classnames from 'classnames';
import { Tab } from '../types/Tab';
import './Tabs.scss';

interface Props {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelect: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelect,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <ul className="List">
        {tabs.map(tab => (
          <li
            className="List__item"
            key={tab.id}
          >
            <button
              className={classnames({
                List__button: true,
                'List__button--selected': selectedTabId === tab.id,
              })}
              type="button"
              onClick={() => onTabSelect(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="List__text">
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
};
