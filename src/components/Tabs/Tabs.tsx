import classNames from 'classnames';
import { FC } from 'react';
import { Tab } from '../../react-app-env';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void,
};

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
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': id === selectedTab.id,
                })}
                onFocus={() => {
                  return selectedTabId !== id
                    ? onTabSelected(tab)
                    : 0;
                }}
                key={id}
              >
                <a href={`#${id}`} data-cy="TabLink">
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
