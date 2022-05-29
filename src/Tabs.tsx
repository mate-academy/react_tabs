import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div className="Tabs">
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          className={classNames(
            'button',
            { button__selected: tab.id === selectedTabId },
          )}
          onClick={() => (onTabSelected(tab))}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <h3
      className="content"
      data-cy="tab-content"
    >
      {tabs.find(tab => tab.id === selectedTabId)?.content}
    </h3>
  </div>
);
