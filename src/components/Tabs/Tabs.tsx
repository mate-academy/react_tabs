import React from 'react';
import classNames from 'classnames';

interface Props {
  id: string,
  title: string,
  content: string,
}

interface TypeTabs {
  tabs : Props[],
  selectedTabId : string,
  onTabSelected: (value: Props) => void,
}

export const Tabs: React.FC<TypeTabs> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (tab: Props) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Props) => (
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

      <div
        className="block"
        data-cy="TabContent"
        ata-cy="tab-content"
      >
        { selectedTab.content }
      </div>
    </div>
  );
};
