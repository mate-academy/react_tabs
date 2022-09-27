import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../type';

type Props = {
  tabs:Tab[]
  activeTab: Tab;
  setActiveId:(tab: Tab) => void;

};

export const Tabs:React.FC <Props> = ({
  tabs,
  activeTab,
  setActiveId,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === activeTab.id },
              )}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => setActiveId(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
