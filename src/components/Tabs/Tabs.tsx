import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../type/Tab';

interface Props {
  tabs: Tab[],
  onTabSelected: (event: React.MouseEvent<HTMLAnchorElement>) => void,
  selectedTab: Tab,
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                id={tab.id}
                onClick={(event) => onTabSelected(event)}
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
