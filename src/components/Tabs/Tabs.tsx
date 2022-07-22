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

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === selectedTab.id })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => ((
                  onTabSelected(tab)
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
