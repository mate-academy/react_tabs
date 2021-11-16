import React from 'react';

import { Tab } from '../types';

interface Props {
  tabs: Tab[];
  selectedTabId: Tab;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul className="Tabs">
      {tabs.map(tab => {
        const { id } = tab;

        return (
          <li key={id}>
            <button
              type="button"
              className={id === selectedTabId.id ? 'selected' : ''}
              onClick={() => {
                if (selectedTabId.id !== id) {
                  onTabSelected(tab);
                }
              }}
            >
              {id}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
