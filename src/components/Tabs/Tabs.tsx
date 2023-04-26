import React from 'react';
import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const findselectedTabId = tabs
    .find(tab => tab.id === selectedTabId) || tabs[0];

  const handleTabSelected = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames('tab', {
                'is-active': tab.id === findselectedTabId.id,
              })}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelected(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findselectedTabId.content}
      </div>
    </div>
  );
};
