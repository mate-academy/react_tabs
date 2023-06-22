import classNames from 'classnames';
import React from 'react';
import { TabsType } from '../../types/Tabs';

type Props = {
  tabs: TabsType[];
  activeTab: TabsType;
  onTabSelected: (tab: TabsType) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  activeTab,
  onTabSelected,
}) => {
  const checkSelected = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.id !== activeTab.id) {
      onTabSelected(tabs.find(el => el.id === e.currentTarget.id) || tabs[0]);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames({
                'is-active': activeTab === tab,
              })}
              data-cy="Tab"
              key={tab.title}
            >
              <a
                href={`#${tab.id}`}
                onClick={checkSelected}
                data-cy="TabLink"
                id={tab.id}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
