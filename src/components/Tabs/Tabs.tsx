import React from 'react';
import { Tab } from '../typeTab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  onTabSelected:Function,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const findTab = tabs.find(tab => tab.id === selectedTabId);

  const tabId = findTab
    ? selectedTabId
    : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(e) => {
                  e.preventDefault();
                  if (tabId !== tab.id) {
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
        {tabs.find(tab => tab.id === tabId)?.content}
      </div>
    </div>
  );
};
