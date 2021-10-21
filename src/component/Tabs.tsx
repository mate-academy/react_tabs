import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[]
  selectedTab: Tab
  onTabClick: (tab: Tab) => void
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabClick }) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map((tab) => {
          return (
            <li
              key={tab.id}
              className="tab"
            >
              <button
                type="button"
                className={classNames(
                  'tab__button',
                  { tab__button__active: tab === selectedTab },
                )}
                onClick={() => {
                  if (tab !== selectedTab) {
                    onTabClick(tab);
                  }
                }}
              >
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="tabs__content">
        {selectedTab.content}
      </div>
    </div>
  );
};
