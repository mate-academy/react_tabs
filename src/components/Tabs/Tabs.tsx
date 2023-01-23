import React from 'react';
import cn from 'classnames';
import { Tab } from './types/Tab';

export const tabsCollection = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  onTabSelected,
  selectedTabId,
  tabs,
}) => {
  const validTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  const { id } = validTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={cn({ 'is-active': tab.id === id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (id !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find((tab) => tab.id === id)?.content}
      </div>
    </div>
  );
};
