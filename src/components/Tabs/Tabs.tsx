import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (currentTab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <div
          key={tab.id}
          className="tabs__item"
        >

          <button
            type="button"
            className="tabs__button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>

          <h3 className="tabs__description">
            {selectedTabId === tab.id ? tab.content : ''}
          </h3>
        </div>
      ))}
    </div>
  );
};
