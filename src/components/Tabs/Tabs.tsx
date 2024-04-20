import React from 'react';
import { type Props } from '../../types/tabsList';
import classNames from 'classnames';
import { TabType } from '../../types/Tab';

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const tabSelection = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const tabClassName = (tab: TabType) => {
    return classNames({ 'is-active': tab.id === tabSelection.id });
  };

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const handleTabClick = () => {
                if (tabSelection.id !== tab.id) {
                  onTabSelected(tab);
                }
              };

              return (
                <li className={tabClassName(tab)} data-cy="Tab" key={tab.id}>
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={handleTabClick}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {tabSelection.content}
        </div>
      </div>
    </>
  );
};
