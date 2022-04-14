import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onSelected: (tab:Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onSelected,
}) => {
  const selectedContent = tabs.find(tab => tab.id === selectedTabId)?.content;

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
        {selectedTabId}
      </h2>
      <p>{selectedContent}</p>
    </div>
  );
};
