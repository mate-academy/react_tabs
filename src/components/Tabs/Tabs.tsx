import classNames from 'classnames';
import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  handleSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  handleSelectedTab,
}) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <>
            <li
              className={classNames({ active: tab.id === selectedTab.id })}
            >
              {tab.title}
            </li>
            <button
              type="button"
              onClick={() => {
                handleSelectedTab(tab);
              }}
            >
              Select
            </button>
          </>
        ))}
      </ul>
      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
