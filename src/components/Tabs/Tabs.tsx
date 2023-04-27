import classNames from 'classnames';
import { FC } from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  tabId: string;
  onTabSelect: (tab: Tab) => void;
};

export const Tabs: FC<Props> = ({ tabs, tabId, onTabSelect }) => {
  const selectedTab = () => {
    return tabs.find((tab: Tab) => tab.id === tabId) || tabs[0];
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((item: Tab) => {
            return (
              <li
                key={item.id}
                className={classNames({
                  'is-active': tabId === item.id,
                })}
                data-cy="Tab"
              >
                <a
                  onClick={() => (tabId !== item.id ? onTabSelect(item) : '')}
                  href={`#${item.id}`}
                  data-cy="TabLink"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="`TabContent`">
        {selectedTab().content}
      </div>
    </div>
  );
};
