import React from 'react';
import { type TabType } from '../../types/Tab';
import { type Props } from '../../types/tabsList';

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const tabSelection = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: TabType,
  ) => {
    event.preventDefault();
    if (tabSelection.id !== tab.id) {
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
                className={tabSelection.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => handleClick(event, tab)}
                >
                  {tab.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {tabSelection.content}
        </div>
      </div>
    </>
  );
};
