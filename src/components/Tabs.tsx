import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (obj: Tab) => void,
};

export const Tabs:React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div>
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs-list__item"
          >
            <button
              type="button"
              className="btn"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>

            <div className="item-content">
              {selectedTabId === tab.id ? tab.content : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
