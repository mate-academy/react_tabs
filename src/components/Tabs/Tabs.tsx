import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../Types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: CallableFunction
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const isSelectedTab = tabs
    .find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const selectedTab = isSelectedTab.id === tab.id;

            return (
              <li
                className={classNames({ 'is-active': selectedTab })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!selectedTab) {
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

      <div
        className="block"
        data-cy="TabContent"
      >
        {isSelectedTab.content}
      </div>
    </div>
  );
};
