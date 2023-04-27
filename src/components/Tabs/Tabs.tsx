import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  const currentTab = tabs.find((tab) => tab.id === selectedTab.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isActive = tab.id === currentTab.id;

            return (
              <li
                className={cn({
                  'is-active': isActive,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isActive) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
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
