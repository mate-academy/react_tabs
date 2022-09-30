import React from 'react';
import Tab from './types';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  tabSelected: React.Dispatch<React.SetStateAction<Tab>>;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, tabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={tab.id === selectedTabId ? 'is-active' : 'tab'}
        onClick={() => {
          if (tab.id !== selectedTabId) {
            tabSelected(tab);
          }
        }}
      >
        <a href="#">
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
