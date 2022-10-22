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
  const isCurrentTab = tabs
    .some((searchTab) => searchTab.id === selectedTabId);

  return (
    <section data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab, index: number) => {
            const { id, title } = tab;
            const isCurrentTabSelected = selectedTabId === id;

            return (
              <li
                key={id}
                className={classNames({
                  'is-active': isCurrentTabSelected
                    || (!isCurrentTab && !index),
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isCurrentTabSelected) {
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

      <p className="block" data-cy="TabContent">
        {
          tabs.find((searchTab) => searchTab.id === selectedTabId)?.content
        }
      </p>
    </section>
  );
};
