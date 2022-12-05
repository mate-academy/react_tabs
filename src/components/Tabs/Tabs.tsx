import React from 'react';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (newTab: Tab) => void,
  content: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
  content,
}) => {

  const onChangeTab = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames(
                  { 'is-active': selectedTabId === tab.id },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onChangeTab(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
