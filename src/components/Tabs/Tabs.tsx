import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = React.memo(({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const content = tabs.find(
    ({ id }) => id === selectedTabId,
  )?.content || tabs[0].content;

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={cn({ 'is-active': selectedTabId === id })}
                key={id}
              >
                <a
                  href={`#${id}`}
                  onClick={() => onTabSelected(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {content}
      </div>
    </div>
  );
});
