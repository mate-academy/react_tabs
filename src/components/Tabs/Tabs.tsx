import React from 'react';
import { Tab, TabsProps } from '../../types/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC<TabsProps> = ({
  tabs: tabList,
  selectedTabId,
  onTabSelected,
}) => {
  const effectiveSelectedId = tabList.some(t => t.id === selectedTabId)
    ? selectedTabId
    : tabList[0]?.id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabList.map(tab => (
            <li
              key={tab.id}
              className={tab.id === effectiveSelectedId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (tab.id !== effectiveSelectedId) {
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
        {tabList.find(tab => tab.id === effectiveSelectedId)?.content}
      </div>
    </div>
  );
};
