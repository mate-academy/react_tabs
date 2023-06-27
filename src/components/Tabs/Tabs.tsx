import React from 'react';
import { TabsType } from '../../types/TabsType';

type Props = {
  tabs: TabsType[],
  selectedTabId: string,
  onTabSelected: (tab: TabsType) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = (
    tabs.find(tab => selectedTabId === tab.id) || tabs[0]
  );

  const handleClick = (tab: TabsType) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={(tab.id === selectedTab.id) ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
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
