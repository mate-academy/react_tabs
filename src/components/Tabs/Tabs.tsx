import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/Tab';

type Callback = (id: Tab) => void;

type Props = {
  onTabSelected: Callback,
  selectedTabId: string,
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({
  onTabSelected,
  selectedTabId,
  tabs,
}) => {
  const selectedTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];

  const handleTabChange = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab) => {
              const { id, title } = tab;

              return (
                <li
                  key={id}
                  className={classNames({
                    'is-active': id === selectedTab.id,
                  })}
                  data-cy="Tab"
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => handleTabChange(tab)}
                  >
                    {title}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
