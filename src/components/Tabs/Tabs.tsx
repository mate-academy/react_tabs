import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onSelectTab: (tab: Tab) => void;
};

export const Tabs:React.FC<Props> = ({
  tabs,
  selectedTabId,
  onSelectTab,
}) => {
  let selectedTabIndex = tabs.findIndex(tab => tab.id === selectedTabId);

  selectedTabIndex = selectedTabIndex !== -1
    ? selectedTabIndex
    : 0;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': selectedTabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onSelectTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs[selectedTabIndex].content}
      </div>
    </div>
  );
};
