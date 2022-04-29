import React from 'react';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <div className="container">
        {tabs.map(tab => (
          <div className="tabs">
            <button
              key={tab.id}
              type="button"
              className="tabs_button"
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
