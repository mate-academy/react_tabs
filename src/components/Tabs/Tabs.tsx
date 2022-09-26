import classNames from 'classnames';
import React from 'react';

interface Props {
  id: string,
  title: string,
  content: string,
}

interface TabType {
  tabs: Props[],
  selectedTabId: string,
  onTabSelected: (value: Props) => void,
}

export const Tabs: React.FC<TabType> = React.memo(
  ({
    tabs,
    selectedTabId,
    onTabSelected,
  }) => {
    const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map((tab) => {
                return (
                  <li
                    key={tab.id}
                    className={classNames(
                      { 'is-active': tab.id === selectedTab.id },
                    )}
                    data-cy="Tab"
                  >
                    <a
                      href={`#${tab.id}`}
                      data-cy="TabLink"
                      onClick={() => {
                        if (selectedTabId === tab.id) {
                          return;
                        }

                        onTabSelected(tab);
                      }}
                    >
                      {tab.title}
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>

    );
  },
);
