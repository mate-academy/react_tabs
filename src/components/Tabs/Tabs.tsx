import cn from 'classnames';
import React from 'react';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({
            id,
            title,
            content,
          }) => (
            <li
              className={
                cn({
                  'is-active': id === selectedTab.id,
                })
              }
              data-cy="Tab"
              key={id}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (id !== selectedTab.id) {
                    onTabSelected({
                      id,
                      title,
                      content,
                    });
                  }
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="block" data-cy="TabContent">
        {selectedTab.content}
      </p>
    </div>
  );
};
