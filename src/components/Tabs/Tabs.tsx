import React from 'react';
import className from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  const selectedTab = (): Tab => {
    const currentTab = tabs.find(tab => tab.id === selectedTabId);

    return !currentTab
      ? tabs[0]
      : currentTab;
  };

  const handleTabSelection = (tab: Tab) => {
    if (selectedTabId === tab.id) {
      return;
    }

    onTabSelected(tab);
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={className(
                { 'is-active': tab.id === selectedTab().id },
              )}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => handleTabSelection(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="tab-content"
      >
        {selectedTab().content}
      </div>
    </div>
  );
};
