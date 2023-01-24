import classNames from 'classnames';
import React from 'react';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: ((tab: Tab) => void),
};

export const Tabs: React.FC<Props> = React.memo(
  ({
    tabs,
    selectedTabId,
    onTabSelected,
  }) => {
    const isSelectedTab = tabs.find((tab) => selectedTabId === tab.id)
     || tabs[0];

    return (
      <>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': tab.id === isSelectedTab.id,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tab.id !== isSelectedTab.id) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {isSelectedTab.content}
        </div>
      </>
    );
  },
);
