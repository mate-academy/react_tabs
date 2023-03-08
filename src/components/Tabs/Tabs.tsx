import classNames from 'classnames';
import { FC } from 'react';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const choosedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const {
              id,
              title,
            } = tab;

            return (
              <li
                className={classNames({
                  'is-active': id === choosedTab.id,
                })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (id !== selectedTabId) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {choosedTab.content}
      </div>
    </div>
  );
};
