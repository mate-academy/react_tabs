import classNames from 'classnames';
import { FC } from 'react';
import { Tab } from '../../react-app-env';

type Probs = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (arg: Tab) => void;
};

export const Tabs: FC<Probs> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(({ id }) => (
    id === selectedTabId
  )) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                className={classNames({
                  'is-active': id === selectedTab.id,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => (
                    id !== selectedTab.id && onTabSelected(tab)
                  )}
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
