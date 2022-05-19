import React from 'react';
import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (obj: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul className="Tabs__list">
      {tabs.map((item) => (
        <li
          key={item.id}
          className="Tabs__item"
        >
          <button
            type="button"
            className="Tabs__button"
            onClick={() => onTabSelected(item)}
          >
            {item.id}
          </button>
          <p className="Tabs__content">
            {selectedTabId === item.id ? item.content : ''}
          </p>
        </li>
      ))}
    </ul>
  );
};
