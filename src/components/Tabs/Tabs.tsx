import React, { MouseEvent } from 'react';
import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  tab: Tab,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tab,
  onTabSelected,
}) => {
  const selectTab = (event: MouseEvent) => {
    event.preventDefault();
    const selectedId
      = (event.target as HTMLAnchorElement)
        .getAttribute('href')?.replace('#', '');
    const selectedTab = tabs.find(currentTab => currentTab.id === selectedId);

    if (selectedTab) {
      onTabSelected(selectedTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((currentTab) => (
            <li
              key={currentTab.id}
              className={classNames({
                'is-active': currentTab.id === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${currentTab.id}`}
                data-cy="TabLink"
                onClick={selectTab}
              >
                {currentTab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tab.content}
      </div>
    </div>
  );
};
