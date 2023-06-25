import React from 'react';
import Tab from './types';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  setTabSelected: React.Dispatch<React.SetStateAction<Tab>>;
};

export const Tabs: React.FC<Props>
= ({ tabs, selectedTabId, setTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={tab.id !== selectedTabId ? 'is-active' : 'tab'}
      >
        <button
          type="submit"
          onClick={() => {
            if (tab.id !== selectedTabId) {
              setTabSelected(tab);
            }
          }}
        >
          {tab.title}
        </button>

      </li>
    ))}
  </ul>
);
