import React from 'react';
import classNames from 'classnames';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const selectTab = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed is-right">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={classNames(
                  { 'is-active': id === selectedTab.id },
                )}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => selectTab(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="
          block
          notification
          is-info
          is-light"
        data-cy="TabContent"
      >
        {selectedTab.content}
      </div>
    </div>
  );
};
