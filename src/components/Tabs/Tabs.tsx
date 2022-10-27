import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../react-app-env';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};
type OnSelectTab = (id: string, tab: Tab) => void | undefined;

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.some(tab => tab.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;
  const onSelectTab: OnSelectTab = (id, tab) => {
    if (selectedTabId !== id) {
      onTabSelected(tab);
    }
  };

  const selectedTabContent = tabs
    .find(tab => selectedTabId === tab.id)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={classNames({
                  'is-active': selectedTab === id,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onSelectTab(id, tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
