import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul className="Tabs">
      {tabs.map(tab => (
        <li key={tab.id} className="Tabs__tab">
          <button
            className={tab.id === selectedTabId ? 'button__selected' : 'button'}
            type="button"
            onClick={() => (onTabSelected(tab))}
          >
            {tab.title}
          </button>
          <p>
            {tab.id === selectedTabId && tab.content}
          </p>
        </li>
      ))}
    </ul>
  );
};
