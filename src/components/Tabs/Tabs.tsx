import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  tabSelectedId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (
  { tabs, tabSelectedId, onTabSelected },
) => {
  const tabChosen = tabs.find(
    tab => tab.id === tabSelectedId,
  ) || tabs[0];

  const handleSelect = (tab: Tab) => {
    if (tab.id !== tabChosen.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': tab.id === tabChosen.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  handleSelect(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabChosen.content}
      </div>
    </div>
  );
};
