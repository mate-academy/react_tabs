import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const isTabSelected = (tab: Tab) => selectedTab.id === tab.id;

  const handleTabSelect = (tab: Tab) => {
    if (isTabSelected(tab)) {
      return;
    }

    onTabSelected(tab);
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': isTabSelected(tab) })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => ((
                  handleTabSelect(tab)
                )
                )}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
