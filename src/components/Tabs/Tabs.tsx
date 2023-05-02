import { FC } from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (selectedTab: Tab) => void;
}

export const Tabs: FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(element => (
            <li
              data-cy="Tab"
              key={element.id}
              className={classNames({
                'is-active': currentTab.id === element.id,
              })}
            >
              <a
                href={`#${element.id}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(element)}
              >
                {element.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
