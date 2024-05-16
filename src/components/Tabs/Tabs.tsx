import React from 'react';
import { TabsType } from '../types/TabsType';
import { Tab } from '../types/Tab';

export const Tabs: React.FC<TabsType> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selected = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: Tab,
  ) => {
    event.preventDefault();
    if (selected.id !== tab.id) {
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
                className={selected.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => handleClick(event, tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {selected?.content}
        </div>
      </div>
    </>
  );
};
