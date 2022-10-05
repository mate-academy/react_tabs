import React from 'react';
import Tab from './types';

type Props = {
  tabs: Tab[];
  // selectedTabId: string;
  tabSelected: React.Dispatch<React.SetStateAction<Tab>>;
};

export const Tabs: React.FC<Props> = ({ tabs, tabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={tab.id ? 'is-active' : 'tab'}
      >
        <button
          type="submit"
          onClick={() => {
            if (tab.id) {
              tabSelected(tab);
            }
          }}
        >
          {tab.title}
        </button>

      </li>
    ))}
  </ul>
);
