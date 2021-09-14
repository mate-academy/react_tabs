import React from 'react';
import './App.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  newSelectedTab: (newTab: Tab) => void;
};

export const Tabs:React.FC<Props> = ({ tabs, selectedTabId, newSelectedTab }) => {
  return (
    <article>
      <ul>
        {tabs.map(tab => {
          return (
            <li
              key={tab.id}
              className="btn-group"
            >
              <button
                type="button"
                className="btn"
                onClick={() => {
                  if (selectedTabId !== tab.id) {
                    newSelectedTab(tab);
                  }
                }}
              >
                {tab.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </article>
  );
};
