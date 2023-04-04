import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTab: Tab,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTab,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelectedTab = selectedTab.id === tab.id;

            return (
              <li
                className={classNames(
                  { 'is-active': isSelectedTab },
                )}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    onTabSelected(tab);
                  }}
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
