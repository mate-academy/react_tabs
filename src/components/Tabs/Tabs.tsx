import React from 'react';
import './Tabs.scss';
import cn from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: Tab,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <>
      <div className="Tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={cn('Tabs__tab', {
              'Tabs__tab--selected': tab.id === selectedTabId.id,
            })}
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </>
  );
};
