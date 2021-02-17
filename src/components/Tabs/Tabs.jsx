import React from 'react';
import './Tabs.css';
import classNames from 'classnames';
import { TabeType } from '../../types';

export const Tabs = ({
  tabs,
  selectedTabId,
  selectedTabInfo,
  onTabSelected,
}) => (
  <div>
    {tabs.map(
      (tab, tabIndex) => (
        <button
          onClick={() => onTabSelected(tabIndex)}
          type="button"
          className={classNames('button',
            { focused: selectedTabId === tabIndex })}
          key={tab.title}
        >
          {tab.title}
        </button>
      ),
    )}

    <div className="content">
      {selectedTabInfo}
    </div>
  </div>
);

Tabs.propTypes = TabeType;
