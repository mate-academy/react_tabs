import classNames from 'classnames';
import { FC } from 'react';
import { Tab } from '../../types/Tab';

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
  const handleSelectTab = (id: string, tab: Tab) => {
    if (selectedTabId !== id) {
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
                data-cy="Tab"
                className={classNames({
                  'is-active': id === selectedTab.id,
                })}
                key={id}
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

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
