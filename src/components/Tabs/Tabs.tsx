import classNames from 'classnames';
import React from 'react';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const getSelectedTab = (tabId: string): Tab => {
    const foundTab = tabs.find(tab => tab.id === tabId);

    return foundTab || tabs[0];
  };

  const selectedTab = getSelectedTab(selectedTabId);

  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={
                  classNames({
                    'is-active': id === selectedTab.id,
                  })
                }
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tabs[index])}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
