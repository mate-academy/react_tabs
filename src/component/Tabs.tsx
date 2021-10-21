import React from 'react';
import classnames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = (props: Props) => {
  const {
    tabs,
    selectedTab,
    onTabSelected,
  } = props;

  return (
    <div className="tabs-container">
      <div>
        {tabs.map(tab => (
          <button
            className={classnames(
              'button',
              {
                active: tab === selectedTab,
              },
            )}
            type="button"
            key={tab.id}
            value={tab.title}
            onClick={() => {
              if (selectedTab.id !== tab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p className="content">
        {selectedTab.content}
      </p>
    </div>
  );
};
