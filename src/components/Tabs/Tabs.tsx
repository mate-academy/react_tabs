import classNames from 'classnames';
import React from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
  onTabSelected: React.Dispatch<React.SetStateAction<Tab>>,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = (
  { tabs, onTabSelected, selectedTabId },
) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const tabSelected = tab;

          return (
            <li className={classNames(
              '',
              {
                'is-active': tab.id === selectedTabId
                  || selectedTabId === undefined,
              },
            )}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tabSelected);
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
  );
};
