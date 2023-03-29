import { FC } from 'react';
import classNames from 'classnames/bind';
import { getTabById } from '../../helpers';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  const isTabSelected = (currentTabId: string) => (
    getTabById(tabs, selectedTabId).id === currentTabId
  );

  const handleSelectTab = (currentTabId: string, tab: Tab) => {
    if (!isTabSelected(currentTabId)) {
      onTabSelected(tab);
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
                  { 'is-active': isTabSelected(id) },
                )}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleSelectTab(id, tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block fancy-text" data-cy="TabContent">
        {getTabById(tabs, selectedTabId).content}
      </div>
    </div>
  );
};
