import React from 'react';

export const Tabs = ({ tabs, selectedTab, onSelectedTab }) => (
  <div>
    <ul>
      {tabs.map(tab => 
      <li key={tab.id}>
        <button type="button" onClick={() => {onSelectedTab(tab.id)}}>{tab.title}</button>
      </li>)}
    </ul>
    <p>{tabs.find(tab => selectedTab === tab.id).content}</p>
  </div>
)
