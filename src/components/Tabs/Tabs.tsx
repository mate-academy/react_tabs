import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

interface Props {
  selectedTab: Tab,
  tabs: Tab[],
  onTitle: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ selectedTab, tabs, onTitle }) => {
  const { id: selectedId, content } = selectedTab;

  return (
    <div className="Tabs">
      <ul className="Tabs-Titles">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames('Tabs-Title', { 'Tabs-Title_Selected': selectedId === tab.id })}
          >
            <button
              type="button"
              onClick={() => onTitle(tab)}
              className="Tabs-Button"
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="Tabs-Content">{content}</p>
    </div>
  );
};
