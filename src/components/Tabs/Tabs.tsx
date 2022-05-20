import React from 'react';
import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (newTab: Tab) => void,
}

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
      <ul className="Tabs__buttons">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="Tabs__list"
          >
            <button
              type="button"
              className="Tabs__button"
              onClick={() => onTabSelected(tab)}
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
