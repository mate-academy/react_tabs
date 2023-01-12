import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (val: Tab) => void;
}

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const chosenTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (tab.id !== chosenTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames(
                {
                  'is-active': tab.id === chosenTab.id,
                },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        { chosenTab.content }
      </div>
    </div>
  );
};
