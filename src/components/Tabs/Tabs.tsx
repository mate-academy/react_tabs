import { FC } from 'react';
import cn from 'classnames';
import { Tab } from '../../types';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void
}

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >

              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    onTabSelected(tab);
                  }
                }}
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
};
