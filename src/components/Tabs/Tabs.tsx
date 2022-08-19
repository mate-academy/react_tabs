import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={
                classNames({ 'is-active': currentTab.id === tab.id })
              }
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (currentTab.id !== tab.id) {
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

      <div className="block" data-cy="tab-content">
        {currentTab.content}
      </div>
    </div>
  );
};
