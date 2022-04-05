import React, { memo } from 'react';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onSelectTab: (tabId: string) => void,
}

export const Tabs: React.FC<Props> = memo(({
  tabs,
  selectedTabId,
  onSelectTab,
}) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__item"
          >
            <button
              type="button"
              className={`tabs__button ${
                selectedTabId === tab.id
                  ? 'tabs__button--active'
                  : ''
              }`}
              onClick={() => {
                onSelectTab(tab.id);
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="tabs__content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
});
