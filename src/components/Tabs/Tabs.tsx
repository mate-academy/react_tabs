import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types.ts/Tab';

type FuncSelected = (props: Tab) => void;

type Props = {
  tabs: Tab[]
  onTabSelected: FuncSelected,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const getTab = () => {
    const findTab = tabs.find(tab => tab.id === selectedTabId);

    return findTab || tabs[0];
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': tab.id === getTab().id,
                })}
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
            );
          })}
        </ul>
      </div>
      <div
        className="block"
        data-cy="TabContent"
      >
        {getTab().content}
      </div>
    </div>
  );
};
