import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Tabs({ tabs, onTabSelected, currentTabId }) {
  return (
    <section className="tabs">
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li  // eslint-disable-line
            key={tab.id}
            className={
              tab.id === currentTabId
                ? 'tabs-list__item tabs-list__item_active'
                : 'tabs-list__item'
            }
            onClick={() => onTabSelected(tab.id)}
          >
            <div className="tabs__title">
              {tab.title}
            </div>
          </li>
        ))}
      </ul>
      <div className="tabs__content">
        <span>
          {tabs[currentTabId].content}
        </span>
      </div>
    </section>
  );
}
