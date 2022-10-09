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
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab, index: number) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={classNames(
                  selectedTabId === id
                  || (
                    !tabs.some((searchTab) => searchTab.id === selectedTabId)
                    && index === 0
                  )
                    ? 'is-active' : '',
                )}
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

      <div className="block" data-cy="TabContent">
        {
          tabs.find((searchTab) => searchTab.id === selectedTabId)?.content
        }
      </div>
    </div>
  );
};
