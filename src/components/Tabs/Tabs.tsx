import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs
    .some((searchTab) => searchTab.id === selectedTabId);

  return (
    <article data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab, index: number) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={classNames({
                  'is-active': selectedTabId === id || (!currentTab && !index),
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

      <section className="block" data-cy="TabContent">
        {
          tabs.find((searchTab) => searchTab.id === selectedTabId)?.content
        }
      </section>
    </article>
  );
};
