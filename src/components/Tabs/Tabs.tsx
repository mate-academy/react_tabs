import React from 'react';
import { type Props } from '../../types/tabsList';

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const tabSelection = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={`${tab.id === tabSelection.id ? 'is-active' : ''}`}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tabSelection.id !== tab.id) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {tabSelection.content}
        </div>
      </div>
    </>
  );
};
