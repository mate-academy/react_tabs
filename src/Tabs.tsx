import React from 'react';
import 'bulma/css/bulma.min.css';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li>
            <button
              type="button"
              key={tab.id}
              className={classNames('button is-white', {
                'is-dark': selectedTabId === tab.id,
              })}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <p className="subtitle">
      {tabs.find(tab => tab.id === selectedTabId)?.content}
    </p>
  </>
);
