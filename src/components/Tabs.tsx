import React from 'react';
import Class from 'classnames';
import { PropsForTabs } from '../types/PropsForTabs';
import './TabsStyle.scss';

const Tabs: React.FC<PropsForTabs> = (
  { tabs, selectedTabId, onTabSelected },
) => {
  return (
    <div className="tabs is-toggle is-toggle-rounded">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="tab-content"
            key={tab.id}
            className={Class({ 'is-active': selectedTabId === tab.id })}
          >
            <button
              type="button"
              onClick={() => selectedTabId !== tab.id && (onTabSelected(tab))}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <br />
      <h1>
        <b>{tabs.find(tab => tab.id === selectedTabId)?.content}</b>
      </h1>
    </div>
  );
};

export default React.memo(Tabs);
