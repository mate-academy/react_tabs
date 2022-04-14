import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onSelected: (tab:Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onSelected,
}) => {
  return (
    <div className="App">
      <ul className="tabList">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabList__item"
          >
            <button
              type="submit"
              onClick={() => onSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <h2>
        Selected type is
        {' '}
        {selectedTab.id}
      </h2>
      <p>{selectedTab.content}</p>
    </div>
  );
};
