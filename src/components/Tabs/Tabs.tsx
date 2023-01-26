import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const onTabSelect = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onTabSelect(tab)}
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
