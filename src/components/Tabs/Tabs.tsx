/* eslint-disable quote-props */
import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../react-app-env';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onSelect: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onSelect }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs">
        {tabs.map(tab => {
          return (
            <button
              className={classNames({
                'tabs__item': true,
                'tabs__item--selected': tab.id === selectedTabId,
              })}
              type="button"
              id={tab.id}
              onClick={() => (onSelect(tab))}
            >
              <span className="tabs__title">
                {tab.title}
              </span>
            </button>
          );
        })}
        <div className="tabs__content">
          {selectedTab?.content}
        </div>
      </div>
    </>
  );
};
