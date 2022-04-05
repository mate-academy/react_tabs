import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[];
  activeTabId: string;
  onActiveTab: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = React.memo(({
  tabs, activeTabId, onActiveTab,
}) => (
  <div className="tabs">
    <menu className="tabs__menu">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <switch
            key={tab.id}
            onClick={() => onActiveTab(tab)}
            className={classNames('tabs__item',
              { 'tabs__item--active': tab.id === activeTabId })}
          >
            {tab.title}
          </switch>
        ))}
      </ul>
    </menu>

    <p className="tabs__text">
      {tabs.find(tab => tab.id === activeTabId)?.content}
    </p>
  </div>
));
