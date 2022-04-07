import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[];
  activeTab: Tab;
  activeTabId: string;
  onActiveTab: (tabId: string) => void;
}

export const Tabs: React.FC<Props> = React.memo(({
  tabs, activeTab, activeTabId, onActiveTab,
}) => (
  <div className="tabs">
    <menu className="tabs__menu">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <switch
            key={tab.id}
            onClick={() => onActiveTab(tab.id)}
            className={classNames('tabs__item',
              { 'tabs__item--active': tab.id === activeTabId })}
          >
            {tab.title}
          </switch>
        ))}
      </ul>
    </menu>

    <p className="tabs__text">
      {activeTab.content}
    </p>
  </div>
));
