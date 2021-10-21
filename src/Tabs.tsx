import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="Tabs">
    <div className="Tabs__nav">
      {tabs.map(tab => {
        return (
          <button
            type="button"
            className={classNames(
              'Tabs__nav-item', { 'Tabs__nav-item--selected': selectedTabId === tab.id },
            )}
            onClick={() => {
              if (selectedTabId !== tab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        );
      })}
    </div>

    <span>
      {(tabs.find(tab => tab.id === selectedTabId) || tabs[0]).content}
    </span>
  </div>
);

export default Tabs;
