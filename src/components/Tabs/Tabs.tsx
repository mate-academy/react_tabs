import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  setSelectedTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  setSelectedTab,
}) => {
  return (
    <ul className="tabs">
      {tabs.map((tab) => (
        <li
          className="tabs__item"
          key={tab.id}
        >
          <button
            type="button"
            className="tabs__button"
            onClick={() => setSelectedTab(tab)}
          >
            {tab.title}
          </button>
          {selectedTabId === tab.id && (
            <p className="tabs__content">
              {tab.content}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};
