import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onSelect: (newTab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onSelect }) => {
  return (
    <div className="tabs">
      <div className="tabs__buttons">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelect(tab)}
            className={classNames('tabs__button',
              { 'tabs__button--active': tab.id === selectedTabId },
              { 'tabs__button--not-active': tab.id !== selectedTabId })}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tabs__content">
        {tabs.find(tab => tab.id === selectedTabId)?.content || tabs[0].content}
      </div>
    </div>
  );
};
