import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
};

// eslint-disable-next-line max-len
export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTab = () => {
    const found = tabs.find(tab => {
      return tab.id === selectedTabId;
    });

    return found || tabs[0];
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': tab.id === currentTab().id })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== selectedTabId) {
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
        {currentTab().content}
      </div>
    </div>
  );
};
