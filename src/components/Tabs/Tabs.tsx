import React from 'react';
import classnames from 'classnames';

import { Props } from '../../types/Type';

import './Tabs.scss';

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div
    className="tab"
  >
    {
      tabs.map(tab => (
        <>
          <button
            type="button"
            onClick={() => onTabSelected(tab.id)}
            key={tab.id}
            className={classnames(
              'tab__title',
              { 'tab__title--selected': tab.id === selectedTabId },
            )}
          >
            {tab.title}
          </button>
        </>
      ))
    }
    {
      tabs.map(tab => (
        <>
          <div
            key={tab.id}
            className={classnames(
              'tab__content',
              { 'tab__content--selected': tab.id === selectedTabId },
            )}
          >
            {tab.content}
          </div>
        </>
      ))
    }
  </div>
);
