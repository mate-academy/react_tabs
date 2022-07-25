import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (newTab: string) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedContent = tabs
    .find(tab => tab.id === selectedTabId)?.content
    || tabs[0].content;

  return (
    <div className="Tabs">
      <ul className="Tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="Tabs__list-item"
          >
            <button
              type="button"
              className="Tabs__button"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="Tabs__content">
        {selectedContent}
      </div>
    </div>
  );
};
