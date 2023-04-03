import React from 'react';
import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    onTabSelected,
    selectedTabId,
  } = props;

  const currentTab = tabs
    .find(tab => tab.id === selectedTabId) || tabs[0];

  const updateSelectedTab = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={classNames(
                  {
                    'is-active': id === currentTab.id,
                  },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => updateSelectedTab(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
