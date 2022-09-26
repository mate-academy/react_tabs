import React from 'react';
import { TabsArrow } from '../../types/TabsArrow';

type Props = {
  tabs: TabsArrow[],
  tabId: string,
  onTab: (tab: string) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
  onTab,
}) => {
  const ourContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <div data-cy="tab-content">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === tabId ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTab(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {ourContent || 'Choose a Tab'}
      </div>
    </div>
  );
};
