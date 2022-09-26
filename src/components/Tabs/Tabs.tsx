import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelected = selectedTab.id === id;

            return (
              <li
                key={id}
                className={classNames({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <a
                  onClick={() => !isSelected && onTabSelected(tab)}
                  href={`#${id}`}
                  data-cy="TabLink"
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
