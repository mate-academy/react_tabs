import React from 'react';
import ClassNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  const changeTabId = (tab: Tab) => {
    if (selectedTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div className="tabs">
      <div className="tabs__nav">
        {tabs.map(tab => (
          <div className={ClassNames(
            'tabs__navItem',
            { tabs__navItem_active: tab.id === selectedTab.id },
          )}
          >
            <button
              type="button"
              onClick={() => changeTabId(tab)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <div className="tabs__content">
        {tabs.map(tab => (
          <div
            className={ClassNames(
              'tabs__contentItem',
              { tabs__contentItem_active: tab.id === selectedTab.id },
            )}
            data-cy="tab-content"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
