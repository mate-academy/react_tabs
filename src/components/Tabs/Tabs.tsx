import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  selectedTabItem: (tab: Tab) => void
};
export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  selectedTabItem,
}) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                // eslint-disable-next-line max-len
                className={classNames({ 'is-active': selectedTabId === tab.id })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    selectedTabItem(tab);
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
        {selectedTab.content}
      </div>
    </div>
  );
};
