import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../types/types';
import { getTabById } from './helpers';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  setSelectedTab: (tab: Tab) => void;
};

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  setSelectedTab,
}) => {
  const selectedTab = getTabById(tabs, selectedTabId);

  const selectTab = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      setSelectedTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectTab(tab)}
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
