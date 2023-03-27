import React from 'react';
import './Tabs.scss';
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
  const findTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isSelected = selectedTabId === tab.id;

            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': tab.id === findTab.id,
                })}
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  className="tab-link"
                  onClick={() => {
                    if (!isSelected) {
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
        {findTab.content}
      </div>
    </div>
  );
};
