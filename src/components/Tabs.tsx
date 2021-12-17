import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div className="tabs">
    {tabs.map(tab => (
      <div className="tabs__tab" key={tab.id}>
        <button
          type="button"
          className={classNames('tabs__button', {
            'tabs__button--active': tab.id === selectedTabId,
          })}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      </div>
    ))}
  </div>
);
