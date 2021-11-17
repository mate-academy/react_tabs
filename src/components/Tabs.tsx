import React from 'react';
import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectTab: Tab,
  chooseTab: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, selectTab, chooseTab }) => {
  const selectedTab = tabs.find(tab => tab.id === selectTab.id);

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li key={tab.id} className="tabs__item">
            <button
              type="button"
              className={(selectedTab?.id === tab.id)
                ? 'tabs__button tabs__button--active'
                : 'tabs__button'}
              onClick={() => chooseTab(tab)}
            >
              {tab.id}
            </button>
          </li>
        ))}
      </ul>

      <div className="tabs__text">
        {selectedTab?.content}
      </div>
    </div>
  );
};
