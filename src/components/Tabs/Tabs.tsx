import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { getTabById } from '../../helpers/getTabById';

type TabsProps = {
  tabs: {
    id: string;
    title: string;
    content: string;
  } [];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const selectedTab = getTabById(tabs, selectedTabId);

  const handleTab = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === selectedTab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab.content}
      </div>
    </div>
  );
};
