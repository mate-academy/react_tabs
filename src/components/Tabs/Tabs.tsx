import React from 'react';
import './Tabs.scss';

type OnSelect = (tab: Tab) => void;

interface Props {
  tabs: Tab[];
  onTabSelected: OnSelect;
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => (
  <div className="Tab__button">
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="submit"
        className={selectedTabId === tab.id ? 'Tab__button-selected button' : 'Tab__button-regular button'}
        onClick={() => onTabSelected(tab)}
      >
        {tab.id}
      </button>
    ))}

  </div>
);
