import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (object: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__tab"
          >
            <button
              type="button"
              className="tabs__button"
              onClick={() => (onTabSelected(tab))}
            >
              {tab.title}
            </button>
            <span className="tabs__content">
              {tab.id === selectedTabId && tab.content}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
