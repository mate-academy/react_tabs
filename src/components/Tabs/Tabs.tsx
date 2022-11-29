import {
  FC,
  memo,
  useCallback,
  useMemo,
} from 'react';
import { Tab, TabsProps } from '../../typedefs';

export const Tabs: FC<TabsProps> = memo(
  ({
    tabs,
    selectedTabId,
    onTabSelected,
  }) => {
    const selectedTab = useMemo(
      () => tabs.find(tab => selectedTabId === tab.id) || tabs[0],
      [selectedTabId],
    );

    const changeTab = useCallback(
      (tab: Tab) => {
        if (selectedTabId !== tab.id) {
          onTabSelected(tab);
        }
      },
      [selectedTabId],
    );

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                className={tab.id === selectedTab.id
                  ? 'is-active'
                  : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => changeTab(tab)}
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
  },
);
