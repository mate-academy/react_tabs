import { FC } from 'react';
import classNames from 'classnames';
// eslint-disable-next-line import/no-cycle
import { findTabById } from '../../helpers';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const handleTabClick = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  const currentTab = findTabById(tabs, selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed" data-cy="tab-content">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': currentTab.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
