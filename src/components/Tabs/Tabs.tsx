import React from 'react';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';
import { getTabById } from '../../utils/Helpers';

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
  const selectedTab = getTabById(tabs, selectedTabId);

  const handleTabSelect = (tab: Tab, isSelectedTab: boolean) => {
    if (!isSelectedTab) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            const isSelectedTab = id === selectedTab.id;

            return (
              <li
                className={classNames(
                  { 'is-active': isSelectedTab },
                )}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelect(tab, isSelectedTab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
