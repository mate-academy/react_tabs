import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';
import { Tab } from '../../types.ts/Tab';
import { findTab } from '../../HelperFunction';

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
  const currentTab = findTab(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isSelected = tab.id === currentTab.id;

            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': isSelected,
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
        {currentTab.content}
      </div>
    </div>
  );
};
