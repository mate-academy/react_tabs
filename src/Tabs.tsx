import React from 'react';
import './Tabs.css';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTab: Tab,
};

const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <div className="list">
      {tabs.map(tab => (
        <div key={tab.id}>
          <button type="button" onClick={() => onTabSelected(tab)}>{tab.title}</button>
        </div>
      ))}
    </div>
    <div className="content">{selectedTab.content}</div>
  </>
);

export default React.memo(Tabs);
