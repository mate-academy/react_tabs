import React from 'react';
import '../../reset.scss';
import './Tabs.scss';

type Callback = (obj: Tab) => void;

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: Callback;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul className="Tabs">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className="Tabs__item"
        >
          <button
            type="button"
            className="Tabs__button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
          {selectedTabId === tab.id && tab.content && (
            <p className="Tabs__content">
              {tab.content}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};
