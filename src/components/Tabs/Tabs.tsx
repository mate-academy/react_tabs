import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  select: (id: string) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, select }) => {
  return (
    <div className="tabs">
      <div className="tabs-btn">
        {tabs.map(tab => (
          <button
            className={
              selectedTabId === tab.id
                ? 'tab-btn tab-btn--selected'
                : 'tab-btn'
            }
            type="button"
            key={tab.id}
            onClick={() => select(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
