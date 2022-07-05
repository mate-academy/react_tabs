import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onChangeTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onChangeTab,
}) => {
  return (
    <div>
      <ul className="list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={`list__item ${tab.id === selectedTab.id ? 'list__item--active' : ''}`}
          >
            <button
              type="button"
              className={tab.id === selectedTab.id ? 'active' : ''}
              onClick={() => onChangeTab(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p data-cy="tab-content" className="tab-content">
        {tabs.find(tab => tab.id === selectedTab.id)?.content}
      </p>
    </div>
  );
};
