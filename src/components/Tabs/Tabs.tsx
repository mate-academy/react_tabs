import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (id: string) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="tab">
    <div className="tab__buttons">
      {tabs.map((tab) => (
        <button
          className="tab__button"
          type="button"
          onClick={() => {
            onTabSelected(tab.id);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div className="tab__body">
      {selectedTab.content}
    </div>
  </div>
);

export default Tabs;
