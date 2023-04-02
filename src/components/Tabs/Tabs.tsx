import React from 'react';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const getTabById = (tabsArr: Tab[], idToFind: string) => {
  return tabsArr
    .find(tab => tab.id === idToFind) || tabsArr[0];
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = getTabById(tabs, selectedTabId);

  const handleTabSelect = (tab: Tab, isSelected: boolean) => {
    if (!isSelected) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            const isSelected = id === selectedTab.id;

            return (
              <li
                className={classNames(
                  { 'is-active': isSelected },
                )}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelect(tab, isSelected)}
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
