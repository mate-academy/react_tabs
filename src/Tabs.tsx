import React from 'react';

type Props = {
  tabs: Tab[]
  selectedTab: Tab,
  setSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="tabs is-toggle is-fullwidth is-large">
      <ul className="nav nav-tabs">
        {tabs.map(tab => {
          return (
            <li className="nav-item" key={tab.id}>
              <button
                type="button"
                className={`${(selectedTab.id === tab.id)
                  ? ('nav-link active')
                  : ('nav-link')
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>

      <div data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
