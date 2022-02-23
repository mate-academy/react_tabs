import React from 'react';
import classNames from 'classnames';

export type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab: Tab | undefined = tabs
    .find(tab => tab.id === selectedTabId);

  const selectedContent = selectedTab ? selectedTab.content : tabs[0].content;

  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <div className="tabs__container">
            <button
              type="button"
              className={classNames('tabs__tab', { tabs__selected: tab === selectedTab })}
              key={tab.id}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <div>
        {selectedContent}
      </div>
    </>
  );
};
