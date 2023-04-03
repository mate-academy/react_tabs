import classNames from 'classnames';
import React from 'react';
import { Tab } from '../types/Tab';
import { findVisibleTab } from '../helpers';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void
  selectedTabId: string,
};

export const Tabs:React.FC<Props> = (
  {
    tabs,
    onTabSelected,
    selectedTabId,
  },
) => {
  const content = findVisibleTab(tabs, selectedTabId);
  const handleOnClick = (tab: Tab, isSelected: boolean) => {
    if (!(isSelected)) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tab.id === content.id;

            return (
              <li
                className={classNames(
                  {
                    'is-active': isSelected,
                  },
                )}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleOnClick(tab, isSelected)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content.content}
      </div>
    </div>
  );
};
