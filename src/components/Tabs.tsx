import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (id: string) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const content = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <div className="Tabs">
      <ul className="Tabs__list">
        {tabs.map(tab => (
          <li key={tab.id} className="Tabs__item">
            <button
              type="button"
              className={`Tabs__button ${tab.id === selectedTabId && 'Tabs__button--active'}`}
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="Tabs__content">{ content }</p>
    </div>
  );
};
