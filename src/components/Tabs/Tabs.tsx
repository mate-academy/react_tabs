import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { findCorrectTab } from '../../utils/helpers';

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = findCorrectTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelectedTab = currentTab.id === id;

            return (
              <li
                key={id}
                className={classNames({
                  'is-active': isSelectedTab,
                })}
                data-cy="Tab"
              >
                <a
                  onClick={() => {
                    if (!isSelectedTab) {
                      onTabSelected(tab);
                    }
                  }}
                  href={`#${id}`}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {currentTab.content}
      </div>
    </div>
  );
};
