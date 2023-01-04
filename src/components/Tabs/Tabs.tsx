import cn from 'classnames';
import React from 'react';
import { Tab } from '../../types';

type Props = {
  tabs: Tab[]
  selectedTabId: string
  content: string
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  content,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const { id, title } = tab;

          return (
            <li
              key={id}
              className={cn({
                'is-active': selectedTabId === id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTabId !== id) {
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
