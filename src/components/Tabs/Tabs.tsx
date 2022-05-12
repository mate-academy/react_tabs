/* eslint-disable no-console */
import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  setSelectedTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  setSelectedTab,
}) => {
  return (
    <div className="tabs-list">
      {tabs.map(tab => (
        <div
          key={tab.id}
          className="tab"
        >
          <button
            type="button"
            onClick={() => setSelectedTab(tab)}
            className={`tab__button ${selectedTabId === tab.id ? 'activated' : 'deactivated'}`}
          >
            {tab.title}
          </button>

          {selectedTabId === tab.id && (
            <p className="tab__content">
              {tab.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
