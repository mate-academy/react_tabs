import React from 'react';
import classNames from 'classnames';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[]
  selectedTabID: string
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabID,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(({ id }) => id === selectedTabID) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': selectedTab.id === tab.id,
              })}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => {
                  if (selectedTab.id === tab.id) {
                    return;
                  }

                  onTabSelected(tab);
                }}
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
