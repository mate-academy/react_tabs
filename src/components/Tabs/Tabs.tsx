import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  return (
    <>
      <h1 className="title">
        {`Selected tab is ${selectedTabId.title}`}
      </h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames('', {
                'is-active': tab.id === selectedTabId.id,
              })}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  onTabSelected(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTabId.content}
      </div>
    </>
  );
};
