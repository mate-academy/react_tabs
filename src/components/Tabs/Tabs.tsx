import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  const selectedTab = tabs.find(({ id }) => id === selectedTabId) || tabs[0];

  const test = (param: Tab) => {
    if (param.id !== selectedTab.id) {
      onTabSelected(param);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }) => {
            const isSelected = id === selectedTab.id;

            return (
              <li
                key={id}
                className={classNames({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => test({ id, title, content })}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
