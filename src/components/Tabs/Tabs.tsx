import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTabId === tab.id ? 'is-active' : 'non-active'}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  onTabSelected(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="tab-content"
      >
        {tabs.filter(tab => tab.id === selectedTabId).map(tab => tab.content)}
      </div>
    </div>
  );
};
