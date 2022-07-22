import React from 'react';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: React.Dispatch<React.SetStateAction<Tab>>,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  let selectedTab = tabs[0];

  function handleTabSelect(isTabSelected: boolean, tab: Tab) {
    if (!isTabSelected) {
      onTabSelected(tab);
    }
  }

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isTabSelected = selectedTabId === tab.id;

            if (isTabSelected) {
              selectedTab = tab;
            }

            return (
              <li
                className="is-active"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => handleTabSelect(isTabSelected, tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
