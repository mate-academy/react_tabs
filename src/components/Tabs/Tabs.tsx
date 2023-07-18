import React from 'react';
import cn from 'classnames';

export interface TabsType {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: TabsType[];
  selectedTabId: string;
  onTabSelected: (tab: TabsType) => void;
  activeTab: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
  activeTab,
}) => {
  const handleClick = (tab: TabsType) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': selectedTabId === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab}
      </div>
    </div>
  );
};
