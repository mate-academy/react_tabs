import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/types';
import { getSelectedTab } from '../../helper';

interface Props {
  tabs: Tab[],
  selectedId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedId,
  onTabSelected,
}) => {
  const selectedTab = getSelectedTab(tabs, selectedId);
  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                { 'is-active': tab.id === selectedTab.id },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
