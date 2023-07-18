import classNames from 'classnames';
import React from 'react';
import { TabsInterface } from '../../types/tabs';

type Props = {
  tabs: TabsInterface[];
  selectedTabId: string;
  onTabSelected: (tab: TabsInterface) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              return (
                <li
                  className={classNames({
                    'is-active': selectedTab.id === tab.id,
                  })}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (tab.id !== selectedTab.id) {
                        onTabSelected(tab);
                      }
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
    </>
  );
};
