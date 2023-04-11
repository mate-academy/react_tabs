import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
  onTabFinder: (arrOfTabs: Tab[], indexOfCurrTab: string) => Tab,
};

export const Tabs:React.FC<Props> = React.memo(
  ({
    tabs,
    selectedTabId,
    onTabSelected,
    onTabFinder,
  }) => {
    const currentTab = onTabFinder(tabs, selectedTabId);

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const { id, title } = tab;

              return (
                <li
                  key={id}
                  data-cy="Tab"
                  className={classNames({ 'is-active': currentTab.id === id })}
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => currentTab.id !== tab.id
                      && onTabSelected(tab)}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      </div>
    );
  },
);
