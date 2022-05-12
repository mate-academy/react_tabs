import React from 'react';
import './Tabs.scss';

type Callback = (obj: Tab) => void;

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: Callback,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul className="Tabs__list">
      {tabs.map((tab) => (
        <li key={tab.id}>
          <button
            type="button"
            className="Tabs__button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.id}
          </button>
          <p className="Tabs__content">
            {selectedTabId === tab.id ? tab.content : ''}
          </p>
        </li>
      ))}
    </ul>
  );
};
