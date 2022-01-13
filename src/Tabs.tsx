import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (index: number) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map((tab, index) => (
          <li
            key={tab.id}
            className="tabs__list__item"
          >
            <button
              type="button"
              className={
                (selectedTabId === tab.id)
                  ? 'tabs__list__button tabs__list__button--active'
                  : 'tabs__list__button'
              }
              onClick={() => (
                onTabSelected(index)
              )}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="tabs__content">{selectedTab?.content}</p>
    </div>
  );
};
