import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';

export type TabType = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: TabType[],
  selectedTabId: string,
  onTabSelected: (tab: TabType) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = useMemo(
    () => tabs.find(tab => tab.id === selectedTabId),
    [selectedTabId],
  ) || tabs[0];

  const handelOnTabClick = useCallback(
    (tab: TabType) => {
      if (tab.id !== selectedTab.id) {
        onTabSelected(tab);
      }
    },
    [selectedTab],
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handelOnTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
