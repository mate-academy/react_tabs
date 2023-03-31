import { FC } from 'react';
import classNames from 'classnames/bind';
import { getTabById } from '../../helpers';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: Tab) => void,
};

export const Tabs: FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  const selectedTab = getTabById(tabs, selectedTabId);

  const handleSelectTab = (currentTab: Tab) => {
    if (currentTab.id !== selectedTab.id) {
      onTabSelected(currentTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={classNames(
                  { 'is-active': id === selectedTab.id },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleSelectTab(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block fancy-text" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
