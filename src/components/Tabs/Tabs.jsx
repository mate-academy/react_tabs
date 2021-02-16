import React from 'react';
import './Tabs.css';
import { TabeType } from '../../types';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div>
    {tabs.map(
      (tab, tabIndex) => {
        let style = '';

        if (selectedTabId === tabIndex) {
          style = 'focused';
        }

        return (
          <button
            onClick={() => onTabSelected(tabIndex)}
            type="button"
            className={style}
            key={tab.title}
          >
            {tab.title}
          </button>
        );
      },
    )}

    <div className="content">
      {tabs[selectedTabId].content}
    </div>
  </div>
);

Tabs.propTypes = TabeType;
