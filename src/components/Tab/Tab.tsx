import React from 'react';

import './Tab.scss';

type Props = {
  tabs: Tab[],
  onTabSelected: (prop:Tab) => void,
  selectedTabId: string,
};

export const Tab: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  return (
    <>
      <div className="tabs__list tabs-list">
        {tabs.map(tab => (
          <div key={tab.id} className="tabs-list__item">
            <button
              type="button"
              className={`tabs-list__button
              ${selectedTabId === tab.id && 'tabs-list__button--active'}`}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      <div className="tabs__content tabs-content">
        {tabs.map(tab => (
          selectedTabId === tab.id ? tab.content : null
        ))}
      </div>
    </>

  );
};
