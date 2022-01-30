import React from 'react';

import './Tabs.scss';

interface Props {
  tabs: Tab[];
  content: string;
  onTabSelected: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  content,
  onTabSelected,
}) => (
  <div className="Tabs">
    <ul className="Tabs__list">
      {
        tabs.map(item => (
          <li
            key={item.id}
            className="Tabs__item"
          >
            <button
              className="Tabs__button button"
              type="button"
              onClick={onTabSelected}
              value={item.id}
            >
              {item.title}
            </button>
          </li>
        ))
      }
    </ul>
    <div className="Tabs__content">
      {content}
    </div>
  </div>
);
