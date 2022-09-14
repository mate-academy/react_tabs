import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tabs';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const { content } = selectedTab;
  const handleClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      return onTabSelected(tab);
    }

    return null;
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={classNames(
                  '',
                  {
                    'is-active': selectedTab.id === id,
                  },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    handleClick(tab);
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
        { selectedTab && content }
      </div>
    </div>
  );
};
