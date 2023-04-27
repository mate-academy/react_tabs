import classNames from 'classnames';
import React, { useState } from 'react';
import { Tab } from '../../types/Tab';
import { TabInfo } from '../TabInfo';

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
  const [selectedTab, setSelectedTab] = useState(
    tabs.find((tab) => tab.id === selectedTabId) || tabs[0],
  );
  const { id, content } = selectedTab;

  const handleTabClick = (tab: Tab) => {
    if (tab.id !== id) {
      setSelectedTab(tab);
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            const isSelected = tab.id === id;

            return (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': isSelected,
                })}
                data-cy="Tab"
              >
                <TabInfo
                  tab={tab}
                  onTabSelected={handleTabClick}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
