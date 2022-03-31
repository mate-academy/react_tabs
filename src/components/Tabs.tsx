import classNames from 'classnames';
import React from 'react';

export const Tabs: React.FC<Props> = React.memo(({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            className={classNames('tabs__button', {
              'tabs__button--selected': tab === selectedTab,
            })}
            onClick={() => {
              if (tab !== selectedTab) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        ))}
      </ul>
      <p className="tabs__content">{tabs.find(tab => tab === selectedTab)?.content}</p>
    </div>
  );
});

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (data: Tab) => void
}
