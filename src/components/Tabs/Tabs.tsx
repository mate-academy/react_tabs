import classNames from 'classnames';
import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void
  selectedTabId: string | undefined,
};

export const Tabs:React.FC<Props> = (
  {
    tabs,
    onTabSelected,
    selectedTabId,
  },
) => {
  const content = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

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
                  onClick={(event) => {
                    event.preventDefault();

                    if (!(isSelected)) {
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
        {content.content}
      </div>
    </div>
  );
};
