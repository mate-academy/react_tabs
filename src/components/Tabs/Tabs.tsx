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
    <div className="tabs__list">
      {tabs.map(tab => (
        <div className="tab" key={tab.id}>
          <button
            type="button"
            onClick={() => setSelectedTab(tab)}
            className={`tab__button ${selectedTabId === tab.id ? 'activated' : 'deactivated'}`}
          >
            {tab.title}
          </button>

          {selectedTabId === tab.id && tab.content && (
            <p className="tab__content">
              {tab.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
