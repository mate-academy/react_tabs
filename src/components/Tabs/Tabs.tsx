import React from 'react';
import Tab from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected(tab: Tab): void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const foundSelectedTab = tabs.some(tab => selectedTabId === tab.id);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, i) => (
            <li
              className={selectedTabId === tab.id || (!foundSelectedTab && !i)
                ? 'is-active'
                : ''}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={event => {
                  event.preventDefault();

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
        {tabs.find(tab => selectedTabId === tab.id)?.content}
      </div>
    </div>
  );
};
