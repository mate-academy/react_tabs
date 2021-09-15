import React from 'react';
import classNames from 'classnames';

type Props = {
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    onTabSelected,
    selectedTab,
  } = props;

  return (
    <>
      {tabs.map((tab) => {
        return (
          <button
            type="button"
            className={classNames(
              'btn btn-secondary',
              { 'btn btn-danger': tab.id === selectedTab.id },
            )}
            key={tab.id}
            value={tab.title}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        );
      })}

      <div>
        {selectedTab.content}
      </div>
    </>
  );
};
