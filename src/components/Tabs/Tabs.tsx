import cn from 'classnames';
import React from 'react';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[]
  selectedTabId: string
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(({ id }) => (
    id === selectedTabId
  )) || tabs[0];

  const { content } = selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={cn({
                  'is-active': selectedTab.id === id,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (selectedTab !== tab) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {content}
      </div>
    </div>
  );
};
