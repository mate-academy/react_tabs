import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

interface Props {
  selectedTabId: string,
  tabs: Tab[],
  onTitle: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ selectedTabId, tabs, onTitle }) => {
  return (
    <div className="Tabs">
      <ul className="Tabs-Titles">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames('Tabs-Title', { 'Tabs-Title_Selected': selectedTabId === tab.id })}
          >
            <button
              type="button"
              onClick={() => onTitle(tab)}
              className="Tabs-Button"
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="Tabs-Content">{tabs.find(tab => tab.id === selectedTabId)?.content}</p>
    </div>
  );
};
