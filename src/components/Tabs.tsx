import classNames from 'classnames';
import React from 'react';

type Props = {
  selectedTab: Tab,
  onTabSelected: (currentTab: Tab) => void,
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, onTabSelected, selectedTab } = props;

  return (
    <>
      {tabs.map((tab) => {
        return (
          <button
            type="button"
            className={classNames(
              'button',
              { 'button-active': tab.id === selectedTab.id },
            )}
            key={tab.id}
            value={tab.title}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        );
      })}

      <div className="content">
        {selectedTab.content}
      </div>
    </>
  );
};
