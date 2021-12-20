import classNames from 'classnames';
import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTabById = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <>
      <ul className="options">
        {tabs.map(tab => (
          <li
            key={tab.id}
            role="option"
            tabIndex={0}
            aria-selected={selectedTabId === tab.id}
            onClick={() => onTabSelected(tab)}
            onKeyPress={(event) => (event.key === 'Enter') && onTabSelected(tab)}
            className={classNames(
              'options__option',
              { 'options__option--selected': selectedTabId === tab.id },
            )}
          >
            {tab.title}
          </li>
        ))}
        <div className="line" />
      </ul>
      <p>
        {selectedTabById && selectedTabById.content}
      </p>
    </>
  );
};
