import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void;
  selectedTab: Tab,
};

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTab }) => {
  return (
    <>
      <div className="ui top attached tabular menu">
        {tabs.map((tab) => (
          <button
            type="button"
            className={classNames('item', { active: tab.id === selectedTab.id })}
            data-tab={tab.id}
            key={tab.id}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </>
  );
};
