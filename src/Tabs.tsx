import classNames from 'classnames';
import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTab: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  const selectedTabById = tabs.find(tab => tab.id === selectedTab) || null;

  return (
    <>
      <ul className="options">
        {tabs.map(tab => (
          <li
            key={tab.id}
            role="option"
            tabIndex={0}
            aria-selected={selectedTab === tab.id}
            onClick={() => onTabSelected(tab)}
            onKeyPress={(event) => (event.key === 'Enter') && onTabSelected(tab)}
            className={classNames(
              'options__option',
              { 'options__option--selected': selectedTab === tab.id },
            )}
          >
            {tab.title}
          </li>
        ))}
        <div className="options__option--line" />
      </ul>
      <p>
        {selectedTabById && selectedTabById.content}
      </p>
    </>
  );
};
