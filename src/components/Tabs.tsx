import React from 'react';
import './Tabs.scss';

type Props = {
  selectedTabId: string;
  tabs: Tab[];
  onTabSelected: React.Dispatch<React.SetStateAction<Tab>>;
};

export const Tabs: React.FC<Props> = ({
  selectedTabId,
  tabs,
  onTabSelected,
}) => {
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id} className="tabs__tab">
          <button
            className="tabs__button"
            type="button"
            onClick={() => (onTabSelected(tab))}
          >
            {tab.title}
          </button>
          <span className="tabs__span">
            {tab.id === selectedTabId && tab.content}
          </span>
        </li>
      ))}
    </ul>
  );
};
