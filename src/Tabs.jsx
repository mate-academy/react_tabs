import React from 'react';

export const Tabs = ({ tabs, defaultTab, onSelectedTab }) => (
  <div>
    <ul>
      {tabs.map(tab => 
      <li key={tab.id}>
        <button type="button" onClick={() => {onSelectedTab(tab.id)}}>{tab.title}</button>
      </li>)}
    </ul>
    <p>{defaultTab.content}</p>
  </div>
)