import React from 'react';
import './Tabs.scss';

export type Props = {
  tabs: Tab[],
  activeTab: Tab | null,
  onTabSelected: (id: string) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, activeTab }) => {
  return (
    <div className="selector">
      {tabs.map(tab => {
        return (
          <>
            <button
              type="button"
              className={(tab.id === activeTab?.id) ? 'item active' : 'item'}
              key={tab.id}
              onClick={() => {
                onTabSelected(tab.id);
              }}
            >
              {tab.title}
            </button>
          </>
        );
      })}
    </div>
  );
};
